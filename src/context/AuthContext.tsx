import { useContext, createContext, ReactNode, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  onAuthStateChanged
} from "firebase/auth";

import { auth } from "../Services/firebase";


interface AuthContextProps {
  children: ReactNode;
}

interface AuthContextType {
  googleSignIn: () => void;
}

const AuthContext = createContext({} as AuthContextType);

export const AuthContextProvider = ({children} :AuthContextProps) => {
  const [user, setUser] = useState({});

  const googleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {

        const user = result.user;
        console.log(user);
      }).catch((error) => {
      // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
      });
  };

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
  //     setUser(currentUser);
  //   });
  //   return () => {
  //     unsubscribe;
  //   };
  // }, []);

  return (
    <AuthContext.Provider

      value={{googleSignIn}}
    >
      {children}
    </AuthContext.Provider>
  );
};


export const UserAuth = () => useContext(AuthContext);

