import * as S from "./styles";

interface UserChatProps {
  selected: boolean;
  name: string;
  lastMessage: string;
  unreadMessage: number;
  image_url: string;
  onClick?: () => void;
}

export const UserChat = ({
  image_url,
  selected,
  name,
  lastMessage,
  unreadMessage,
  onClick = () => console.log("No have a function"),
}: UserChatProps) => {
  return (
    <S.Container
      selected={selected}
      unreadMessage={unreadMessage}
      onClick={() => onClick()}
    >
      <div className="rotating-border ">
        <S.Profile>
          <img src={image_url} alt="" referrerPolicy="no-referrer" />
          <div>
            <h2>{name}</h2>
            <p>{lastMessage}</p>
          </div>
        </S.Profile>
        <span>{unreadMessage}</span>
      </div>
    </S.Container>
  );
};
