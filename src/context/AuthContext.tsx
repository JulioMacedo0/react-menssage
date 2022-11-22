import {
  useContext,
  createContext,
  ReactNode,
  useEffect,
  useState,
} from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
  User,
} from "firebase/auth";

import { auth } from "../Services/firebase";

interface AuthContextProps {
  children: ReactNode;
}

interface AuthContextType {
  googleSignIn: () => void;
  signOutApp: () => void;
  user: User | null;
}

const AuthContext = createContext({} as AuthContextType);

export const AuthContextProvider = ({ children }: AuthContextProps) => {
  const [user, setUser] = useState<User | null>(null);

  const googleSignIn = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
    } catch (error) {
      console.log(error);
    }
  };

  const signOutApp = async () => {
    try {
      const result = await signOut(auth);
      console.log(`Sucesso ao deslogar:${result} `);
    } catch (error) {
      console.log(`Erro ao deslogar:${error} `);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe;
    };
  }, []);

  return (
    <AuthContext.Provider value={{ googleSignIn, user, signOutApp }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
