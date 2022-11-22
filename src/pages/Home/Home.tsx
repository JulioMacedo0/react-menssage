import * as S from "./styles";
import GoogleButton from "react-google-button";
import { useAuth } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";

export const Home = () => {
  const { googleSignIn, user } = useAuth();
  console.log(`dados do usuario: ${user?.displayName}`);

  return (
    <S.Container>
      {user ? (
        <Navigate replace to="/chat" />
      ) : (
        <GoogleButton onClick={() => googleSignIn()} />
      )}
    </S.Container>
  );
};
