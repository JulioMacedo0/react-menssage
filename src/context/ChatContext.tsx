import { collection, getDocs, query, where } from "firebase/firestore";
import { createContext, ReactNode, useContext, useState } from "react";
import { db } from "../Services/firebase";

interface ChatContextType {
  getUser: ({ e, userEmail }: GetUserType) => void;
  userFind: User | undefined;
  currentChat: CurrentChat | undefined;
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

const ChatContext = createContext({} as ChatContextType);

export const ChatContextProvider = ({ children }: ChatContextProps) => {
  const [userFind, setUserFind] = useState<User | undefined>();
  const [currentChat, setCurrentChat] = useState<CurrentChat | undefined>();

  // const createChat = async ({}) => {

  // }

  const getUser = async ({ e, userEmail }: GetUserType) => {
    e.preventDefault();

    const q = query(collection(db, "Users"), where("email", "==", userEmail));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      setUserFind(doc.data() as User);
      console.log(userFind);
    });
  };

  return (
    <ChatContext.Provider value={{ getUser, userFind, currentChat }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => useContext(ChatContext);
