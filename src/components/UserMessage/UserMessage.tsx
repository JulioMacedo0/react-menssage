import { Check } from "phosphor-react";
import * as S from "./styles";

interface UserMessageProps {
  msg: string;
  image_url: string;
  date: string;
  owner: boolean;
  read: boolean;
}

export const UserMessage = ({
  msg,
  image_url,
  date,
  owner,
  read,
}: UserMessageProps) => {

  return (
    <S.Container owner={owner} read={read}>
      <div>
        <S.ImgUser>
          <img src={image_url} alt="" />
          <span>{date}</span>
        </S.ImgUser>
        <S.MessageContent owner={owner} read={read}>{msg} {owner && <Check size={22} />}</S.MessageContent>

      </div>
    </S.Container>
  );
};
