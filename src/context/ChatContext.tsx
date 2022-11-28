import {
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { db } from "../Services/firebase";
import { useAuth } from "./AuthContext";

interface ChatContextType {
  getUser: ({ e, userEmail }: GetUserType) => void;
  userFind: User | undefined;
  currentChat: CurrentChat | undefined;
  getUserData: (userID: string) => void;
  chatsFireBase: ChatFirebaseType[] | undefined;
  chats: ChatType[] | undefined
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

interface CurrentChat {
  userName: string;
  uuid: string;
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

const ChatContext = createContext({} as ChatContextType);

export const ChatContextProvider = ({ children }: ChatContextProps) => {
  const { user } = useAuth();

  const [userFind, setUserFind] = useState<User | undefined>();
  const [currentChat, setCurrentChat] = useState<CurrentChat | undefined>();
  const [chatsFireBase, setChatsFireBase] = useState<ChatFirebaseType[] | undefined>();
  const [chats , setChats] = useState<ChatType[] | undefined>();


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

  const getUser = async ({ e, userEmail }: GetUserType) => {
    e.preventDefault();

    const q = query(collection(db, "Users"));

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      setUserFind(doc.data() as User);
      // console.log(doc.data);
    });
  };

  return (
    <ChatContext.Provider
      value={{ getUser, userFind, currentChat,  getUserData , chatsFireBase, chats}}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => useContext(ChatContext);
