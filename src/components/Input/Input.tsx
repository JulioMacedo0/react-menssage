import { MagnifyingGlass } from "phosphor-react";
import { useState } from "react";
import { useChat } from "../../context/ChatContext";
import * as S from "./styles";

export const Input = () => {
  const [userEmail, setUserEmail] = useState("");

  const { getUser } = useChat();

  return (
    <S.Container>
      <MagnifyingGlass size={28} />
      <S.Input
        placeholder="Find a user by email..."
        onChange={(e) => setUserEmail(e.target.value)}
      />
      <button onClick={(e) => getUser({ e, userEmail })}>Find user</button>
    </S.Container>
  );
};
