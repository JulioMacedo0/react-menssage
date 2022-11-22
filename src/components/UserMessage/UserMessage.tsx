import * as S from "./styles";

interface UserMassageProps {
  msg: string;
  image_url: string;
  date: string;
  owner: boolean;
}

export const UserMessage = ({
  msg,
  image_url,
  date,
  owner,
}: UserMassageProps) => {
  return (
    <S.Container owner={owner}>
      <div>
        <S.ImgUser>
          <img src={image_url} alt="" />
          <span>{date}</span>
        </S.ImgUser>
        <S.MessageContent owner={owner}>{msg}</S.MessageContent>
      </div>
    </S.Container>
  );
};
