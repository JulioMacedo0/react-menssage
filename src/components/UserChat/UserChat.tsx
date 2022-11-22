import * as S from "./styles";

interface UserChatProps {
  selected: boolean;
  name: string;
  lastMessage: string;
  unreadMessage: number;
  image_url: string;
}

export const UserChat = ({
  image_url,
  selected,
  name,
  lastMessage,
  unreadMessage,
}: UserChatProps) => {
  return (
    <S.Container selected={selected} unreadMessage={unreadMessage}>
      <S.Profile>
        <img src={image_url} alt="" />
        <div>
          <h2>{name}</h2>
          <p>{lastMessage}</p>
        </div>
      </S.Profile>
      <span>{unreadMessage}</span>
    </S.Container>
  );
};
