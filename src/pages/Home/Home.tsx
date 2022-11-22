import * as S from "./styles";
import GoogleButton from "react-google-button";
import { useAuth } from "../../context/AuthContext";

export const Home = () => {
  const { googleSignIn, user } = useAuth();

  return (
    <S.Container>
      <GoogleButton onClick={() => googleSignIn()} />
    </S.Container>
  );
};
