import { Phone, VideoCamera } from "phosphor-react";
import * as S from "./styles";

export const UserHeader = () => {
  return (
    <S.Container>
      <div>
        <span></span> <p>Elizabeth Nelson</p>
      </div>

      <div>
        <Phone size={36} />

        <VideoCamera size={36} />
      </div>
    </S.Container>
  );
};
