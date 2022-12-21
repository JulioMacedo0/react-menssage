import { Phone, VideoCamera } from "phosphor-react";
import * as S from "./styles";

interface UserHedaerProps {
  userName: string
}

export const UserHeader = ({userName}: UserHedaerProps) => {
  return (
    <S.Container>
      <div className="nameDiv">
        <span></span> <p>{userName}</p>
      </div>

      <div>
        <Phone size={36} />

        <VideoCamera size={36} />
      </div>
    </S.Container>
  );
};
