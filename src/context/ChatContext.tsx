import { v4 as uuidv4 } from "uuid";
import {
  arrayUnion,
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  query,
  updateDoc,
  where,
  Timestamp
} from "firebase/firestore";
import { createContext, ReactNode, useContext, useEffect,  useState } from "react";
import { db } from "../Services/firebase";
import { useAuth } from "./AuthContext";

interface ChatContextType {
  getUser: ({ e, userEmail }: GetUserType) => void;
  openChat: ({userName, uuid, messages}: openChatProps) => void;
  onChangeMessageInput: (message : string) => void;
  sendMessage: ({e} : sendMessageType) => void;
  getUserData: (userID: string) => void;
  userFind: User | undefined;
  currentChat: openChatProps | undefined;
  chatsFireBase: ChatFirebaseType[] | undefined;
  chats: ChatType[] | undefined

}

interface sendMessageType {
  e: React.FormEvent<EventTarget>;
}

interface ChatContextProps {
  children: ReactNode;
}

interface User {
  displayName: string;
  email: string;
  photoURL: string;
  uid: string;
}

interface GetUserType {
  e: React.FormEvent<EventTarget>;
  userEmail: string;
}

interface ChatType {
  messages: [
    {
      message: {
        data: string;
        msg: string;
        owner: string;
        uuid: string;
      };
    }
  ];
  users: Array<string>;
  userInfos:
    {
      uuid: string;
      displayName: string;
      photoURL: string
    }

}

interface ChatFirebaseType {
  messages: [
    {
      message: {
        data: string;
        msg: string;
        owner: string;
        uuid: string;
      };
    }
  ];
  users: Array<string>;

}

interface msgs {
      message: {
        data: string;
        msg: string;
        owner: string;
        uuid: string;
      };
}

interface openChatProps {
  userName: string;
  uuid: string;
  messages: msgs[];
  photoUrl: string
}

const ChatContext = createContext({} as ChatContextType);

export const ChatContextProvider = ({ children }: ChatContextProps) => {
  const { user } = useAuth();

  const [userFind, setUserFind] = useState<User | undefined>();
  const [currentChat, setCurrentChat] = useState<openChatProps | undefined>();
  const [chatsFireBase, setChatsFireBase] = useState<ChatFirebaseType[] | undefined>();
  const [chats , setChats] = useState<ChatType[] | undefined>();
  const [messageInput , setMessageInput] = useState("");


  const getChat = async  () => {

    if(chatsFireBase){

      const chats =  await Promise.all(chatsFireBase.map( async doc => {

        const userID = doc.users.find((userid) => userid != user?.uid);

        const userChat = await getUserData(userID ?? "notUser");

        const newchatBody = {
          messages: doc.messages,
          users: doc.users,
          userInfos: {
            uuid: userChat?.uid,
            displayName: userChat?.displayName,
            photoURL: userChat?.photoURL,
          }

        };

        return newchatBody;
      }));
      setChats(chats as ChatType[]);
    }else {
      console.log("not possible get chats");
    }
  };

  useEffect(() => {
    getChat();
    updateCurrentChat();
  }, [chatsFireBase]);

  useEffect(() => {

    try {
      const unsubscribe = onSnapshot(query(
        collection(db, "Chats"),
        where("users", "array-contains", user?.uid)) , (doc) => {

        const chats =  doc.docs.map( doc => doc.data());
        setChatsFireBase(chats as ChatFirebaseType[]);
        return () => {
          unsubscribe;
        };
      });

    } catch (error) {
      console.log(error);
    }

  },[user]);


  const getUserData = async (userID: string) => {
    const docRef = doc(db, "Users", userID);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return  docSnap.data() as User;
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
      return null;
    }
  };

  const openChat = ({userName, uuid, messages, photoUrl}: openChatProps) => {
    const current = {
      userName,
      uuid,
      messages,
      photoUrl,
    };
    setCurrentChat(current);

  };

  const getUser = async ({ e, userEmail }: GetUserType) => {
    e.preventDefault();

    const q = query(collection(db, "Users"), where("email", "==", userEmail));

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      setUserFind(doc.data() as User);
      // console.log(doc.data);
    });
  };

  const onChangeMessageInput = (message : string) => {

    setMessageInput(message);
  };

  const sendMessage = async ({e}: sendMessageType) => {

    e.preventDefault();
    try {


      const q = query(collection(db, "Chats"), where("users", "==", [  user?.uid,currentChat?.uuid]));

      const querySnapshot = await getDocs(q);

      let docId = "notExist";

      querySnapshot.forEach(  doc =>  docId = doc.id);

      if(docId != "notExist"){
        const docRef = doc(db, "Chats", docId);

        await updateDoc(docRef, {
          messages: arrayUnion({
            message: {
              data:  Timestamp.fromDate(new Date()),
              msg: messageInput,
              owner: user?.uid,
              uuid: uuidv4()
            }
          })
        });
      }else {
        console.log("docId not exist");
      }

    } catch (error) {
      console.log("Error update fields: ", error);
    }

  };

  const updateCurrentChat = () => {
    try {
      chatsFireBase?.forEach(chat => {

        const chatExist =   chat.users.includes(currentChat?.uuid ?? "chat not exist");

        if(chatExist){
          if(currentChat){
            setCurrentChat({...currentChat, messages: chat.messages});
          }
        }
      });

    } catch (error) {
      console.log("Error update current chat: ", error);
    }
  };

  return (
    <ChatContext.Provider
      value={{ getUser, userFind, currentChat,  getUserData , chatsFireBase, chats, openChat, onChangeMessageInput, sendMessage}}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => useContext(ChatContext);
