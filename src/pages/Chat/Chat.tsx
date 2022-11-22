import {
  AddressBook,
  Archive,
  ClockCounterClockwise,
  DotsThreeVertical,
  NavigationArrow,
  Paperclip,
  PlusCircle,
  Smiley,
  Users,
} from "phosphor-react";
import { Input } from "../../components/Input/Input";
import { UserChat } from "../../components/UserChat/UserChat";
import { UserHeader } from "../../components/UserHeader/UserHeader";
import * as S from "./styles";

export const Chat = () => {
  return (
    <S.Container>
      <S.Sidebar>
        <S.Margin>
          <S.HeaderSidebar>
            <span>React Chat</span>

            <div>
              <PlusCircle size={32} weight="fill" />
              <DotsThreeVertical size={32} weight="fill" />
            </div>
          </S.HeaderSidebar>

          <Input />

          <S.NavChat>
            <ClockCounterClockwise size={26} />
            <Users size={26} />
            <AddressBook size={26} />
            <Archive size={26} />
          </S.NavChat>
        </S.Margin>
        <UserChat
          image_url="https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
          name="Richards Hendrics"
          lastMessage="Sup man, Wanna go out?"
          unreadMessage={1}
          selected={false}
        />
        <UserChat
          image_url="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
          name="Elazebeth Nelson"
          lastMessage="are you sure This isn't ovedoinggg"
          unreadMessage={3}
          selected={true}
        />
        <UserChat
          image_url="https://images.unsplash.com/photo-1564564244660-5d73c057f2d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
          name="Jaed Dunn"
          lastMessage="I can't wait to hear All about the"
          unreadMessage={0}
          selected={false}
        />
        <UserChat
          image_url="https://images.unsplash.com/photo-1536552518043-62dcb2723115?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          name="Gilfoyle"
          lastMessage="it's, it's nothing... just my imagine"
          unreadMessage={4}
          selected={false}
        />
        <UserChat
          image_url="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          name="Dinesh"
          lastMessage="Typing..."
          unreadMessage={0}
          selected={false}
        />
        <UserChat
          image_url="https://images.unsplash.com/photo-1562124638-724e13052daf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
          name="Big Head"
          lastMessage="wish cloud always help out."
          unreadMessage={0}
          selected={false}
        />
      </S.Sidebar>

      <S.Chat>
        <UserHeader />
        <S.Content></S.Content>
        <S.Footer>
          <div className="w-input-container">
            <div className="w-input-text-group">
              <div id="w-input-text" contentEditable></div>
              <div className="w-placeholder">Type a message</div>
            </div>
          </div>
          <S.ContainerButtons>
            <Smiley size={25} />
            <Paperclip size={25} />
            <NavigationArrow size={38} />
          </S.ContainerButtons>
        </S.Footer>
      </S.Chat>
    </S.Container>
  );
};
