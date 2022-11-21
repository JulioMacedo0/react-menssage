import * as S from "./styles";
import  GoogleButton  from "react-google-button";
import { UserAuth } from "../../context/AuthContext";

export const Home = () => {

  const { googleSignIn } = UserAuth();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn;
    } catch (error){
      console.log(error);
    }
  };

  return (
    <S.Container>
      <GoogleButton onClick={googleSignIn} />
    </S.Container>
  );
};
