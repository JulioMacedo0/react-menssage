import { MagnifyingGlass } from "phosphor-react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useState } from "react";
import * as S from "./styles";
import { db } from "../../Services/firebase";

interface User {
  displayName: string;
  email: string;
  photoURL: string;
  uid: string;
}

export const Input = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userFind, setUserFind] = useState<User>();

  const GetUser = async (e: React.FormEvent<EventTarget>) => {
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
    <S.Container>
      <S.Input
        placeholder="Find a user by email..."
        onChange={(e) => setUserEmail(e.target.value)}
      />
      <button onClick={(e) => GetUser(e)}>Find user</button>
    </S.Container>
  );
};
