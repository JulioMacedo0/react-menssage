import { Check } from "phosphor-react";
import * as S from "./styles";

interface UserChatProps {
  selected: boolean;
  name: string;
  lastMessage: string;
  unreadMessage: number;
  image_url: string;
  owner?: boolean;
  read?: boolean;
  date?: string;
  onClick?: () => void;
}

export const UserChat = ({
  image_url,
  selected,
  name,
  lastMessage,
  unreadMessage,
  owner,
  read = false,
  date,
  onClick = () => console.log("No have a function"),
}: UserChatProps) => {
  return (
    <S.Container
      selected={selected}
      unreadMessage={unreadMessage}
      read={read}
      onClick={onClick}
    >
      <div>
        <S.Profile>
          <img src={image_url} alt="" referrerPolicy="no-referrer" />
          <div>
            <S.rowName>
              <h2>{name}</h2>
              <p>{date}</p>
            </S.rowName>

            <S.rowMessage
              read={read}
              selected={selected}
              unreadMessage={unreadMessage}
            >
              <div>
                {" "}
                {owner && <Check size={18} weight="bold" />}{" "}
                <p>{lastMessage}</p>{" "}
              </div>
              <div>
                <span>{unreadMessage}</span>
              </div>
            </S.rowMessage>
          </div>
        </S.Profile>
      </div>
    </S.Container>
  );
};
