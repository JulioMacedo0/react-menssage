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
  Timestamp,
  setDoc,
} from "firebase/firestore";
import {
  createContext,
  ReactNode,
  RefObject,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { db } from "../Services/firebase";
import { useAuth } from "./AuthContext";

interface ChatContextType {
  getUser: ({ e, userEmail }: GetUserType) => void;
  readMessages: () => void;
  openChat: ({
    userName,
    uuid,
    messages,
    unreadMessage,
    chatId,
  }: openChatProps) => void;
  onChangeMessageInput: (message: string) => void;
  sendMessage: ({ e }: sendMessageType) => void;
  getUserData: (userID: string) => void;
  scrollToBottom: () => void;
  createChat: (userUid: string) => void;
  unreadMessages: number;
  userFind: User | undefined;
  currentChat: openChatProps | undefined;
  chatsFireBase: ChatFirebaseType[] | undefined;
  chats: ChatType[] | undefined;
  messagesEndRef: RefObject<HTMLDivElement> | null;
  messageInput: string;
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
  id: string;
  messages: [
    {
      message: {
        data: Timestamp;
        msg: string;
        owner: string;
        uuid: string;
        read: boolean;
        received: boolean;
      };
    }
  ];
  users: Array<string>;
  userInfos: {
    uuid: string;
    displayName: string;
    photoURL: string;
  };
}

interface ChatFirebaseType {
  messages: [
    {
      message: {
        data: Timestamp;
        msg: string;
        owner: string;
        uuid: string;
        read: boolean;
        received: boolean;
      };
    }
  ];
  users: Array<string>;
  id: string;
}

interface msgs {
  message: {
    data: Timestamp;
    msg: string;
    owner: string;
    uuid: string;
    read: boolean;
    received: boolean;
  };
}

interface openChatProps {
  chatId: string;
  userName: string;
  uuid: string;
  messages: msgs[];
  photoUrl: string;
  unreadMessage: number;
}

const ChatContext = createContext({} as ChatContextType);

export const ChatContextProvider = ({ children }: ChatContextProps) => {
  const { user } = useAuth();

  const [userFind, setUserFind] = useState<User | undefined>();
  const [currentChat, setCurrentChat] = useState<openChatProps | undefined>();
  const [chatsFireBase, setChatsFireBase] = useState<
    ChatFirebaseType[] | undefined
  >();
  const [chats, setChats] = useState<ChatType[] | undefined>();
  const [messageInput, setMessageInput] = useState("");
  const [unreadMessages, setUnreadMessages] = useState(0);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView();
  };

  const confirmReceivedMessages = async () => {
    const message = chatsFireBase?.map((chats) => {
      chats.messages.map((msg) => {
        const message = {
          message: {
            data: msg.message.data,
            msg: msg.message.msg,
            owner: msg.message.owner,
            read: msg.message.read,
            uuid: msg.message.uuid,
            received: true,
          },
        };
        return message;
      });
    });
  };

  const readMessages = async () => {
    const message = currentChat?.messages.map((msg) => {
      const message = {
        message: {
          data: msg.message.data,
          msg: msg.message.msg,
          owner: msg.message.owner,
          read: true,
          uuid: msg.message.uuid,
          received: msg.message.received,
        },
      };

      return message;
    });

    if (currentChat && currentChat?.unreadMessage > 0) {
      const docRef = doc(db, "Chats", currentChat.chatId);
      try {
        await updateDoc(docRef, {
          messages: message,
        });
      } catch (error) {
        console.log("Read messages error: ", error);
      }
    }
  };

  const createChat = async (userUid: string) => {
    await setDoc(
      doc(db, "Chats", `${userUid}${user?.uid}`),
      {
        messages: [],
        users: [user?.uid, userUid],
      },
      { merge: true }
    );

    setUserFind(undefined);
  };

  const getChat = async () => {
    if (chatsFireBase) {
      const chats = await Promise.all(
        chatsFireBase.map(async (doc) => {
          const userID = doc.users.find((userid) => userid != user?.uid);

          const userChat = await getUserData(userID ?? "notUser");

          const newchatBody = {
            id: doc.id,
            messages: doc.messages,
            users: doc.users,
            userInfos: {
              uuid: userChat?.uid,
              displayName: userChat?.displayName,
              photoURL: userChat?.photoURL,
            },
          };

          return newchatBody;
        })
      );
      setChats(chats as ChatType[]);
    } else {
      console.log("not possible get chats");
    }
  };

  const updateChat = async () => {
    await getChat();
    await updateCurrentChat();
  };

  useEffect(() => {
    updateChat();
  }, [chatsFireBase]);

  useEffect(() => {
    try {
      const unsubscribe = onSnapshot(
        query(
          collection(db, "Chats"),
          where("users", "array-contains", user?.uid)
        ),
        (doc) => {
          const chats = doc.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

          setChatsFireBase(chats as ChatFirebaseType[]);

          return () => {
            unsubscribe;
          };
        }
      );
    } catch (error) {
      console.log("Error get chats", error);
    }
  }, [user]);

  const getUserData = async (userID: string) => {
    const docRef = doc(db, "Users", userID);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data() as User;
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
      return null;
    }
  };

  const openChat = ({
    userName,
    uuid,
    messages,
    photoUrl,
    unreadMessage,
    chatId,
  }: openChatProps) => {
    const current = {
      chatId,
      userName,
      uuid,
      messages,
      photoUrl,
      unreadMessage,
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

  const onChangeMessageInput = (message: string) => {
    setMessageInput(message);
  };

  const sendMessage = async ({ e }: sendMessageType) => {
    e.preventDefault();
    try {
      const q = query(
        collection(db, "Chats"),
        where("users", "==", [user?.uid, currentChat?.uuid])
      );

      const querySnapshot = await getDocs(q);

      let docId = "notExist";

      querySnapshot.forEach((doc) => (docId = doc.id));

      if (docId == "notExist") {
        const q = query(
          collection(db, "Chats"),
          where("users", "==", [currentChat?.uuid, user?.uid])
        );

        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc) => (docId = doc.id));
      }

      if (docId != "notExist") {
        const docRef = doc(db, "Chats", docId);

        await updateDoc(docRef, {
          messages: arrayUnion({
            message: {
              data: Timestamp.fromDate(new Date()),
              msg: messageInput,
              owner: user?.uid,
              read: false,
              received: false,
              uuid: uuidv4(),
            },
          }),
        });
        scrollToBottom();
        setMessageInput("");
      } else {
        console.log("docId not exist");
      }
    } catch (error) {
      console.log("Error update fields: ", error);
    }
  };

  const updateCurrentChat = () => {
    try {
      chatsFireBase?.forEach((chat) => {
        const chatExist = chat.users.includes(
          currentChat?.uuid ?? "chat not exist"
        );

        if (chatExist) {
          if (currentChat) {
            const unreadMessage = chat.messages.filter(
              (msg) =>
                msg.message.read == false && msg.message.owner != user?.uid
            );
            setUnreadMessages(unreadMessage.length);
            setCurrentChat({
              ...currentChat,
              messages: chat.messages,
              unreadMessage: unreadMessage.length,
            });
          }
        }
      });
    } catch (error) {
      console.log("Error update current chat: ", error);
    }
  };

  return (
    <ChatContext.Provider
      value={{
        readMessages,
        createChat,
        openChat,
        onChangeMessageInput,
        sendMessage,
        getUser,
        getUserData,
        scrollToBottom,
        unreadMessages,
        userFind,
        currentChat,
        chatsFireBase,
        chats,
        messagesEndRef,
        messageInput,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => useContext(ChatContext);
