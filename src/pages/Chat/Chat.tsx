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
import { Navigate } from "react-router-dom";
import { Input } from "../../components/Input/Input";
import { UserChat } from "../../components/UserChat/UserChat";
import { UserHeader } from "../../components/UserHeader/UserHeader";
import { UserMessage } from "../../components/UserMessage/UserMessage";
import { useAuth } from "../../context/AuthContext";

import * as S from "./styles";

export const Chat = () => {
  const { user, signOutApp } = useAuth();

  if (!user) {
    return <Navigate replace to="/" />;
  } else {
    return (
      <S.Container>
        <S.Sidebar>
          <S.Margin>
            <S.HeaderSidebar>
              <span>React Chat</span>

              <div>
                <PlusCircle size={32} weight="fill" />
                <DotsThreeVertical
                  size={32}
                  weight="fill"
                  onClick={() => signOutApp()}
                />
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
          <S.Content>
            <UserMessage
              date="10.35AM"
              image_url="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
              msg="Hi"
              owner={false}
            />
            <UserMessage
              date="10.36AM"
              image_url="https://avatars.githubusercontent.com/u/57598810?v=4"
              msg="Hiii"
              owner={true}
            />
            <UserMessage
              date="10.37AM"
              image_url="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
              msg="How do you do?"
              owner={false}
            />
            <UserMessage
              date="10.38AM"
              image_url="https://avatars.githubusercontent.com/u/57598810?v=4"
              msg="I'm fine, and you?"
              owner={true}
            />
            <UserMessage
              date="10.37AM"
              image_url="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
              msg="I'm pretty good !"
              owner={false}
            />
            <UserMessage
              date="10.38AM"
              image_url="https://avatars.githubusercontent.com/u/57598810?v=4"
              msg="haha it's good"
              owner={true}
            />
            <UserMessage
              date="10.39AM"
              image_url="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
              msg="Can you helpe me? "
              owner={false}
            />

            <UserMessage
              date="10.38AM"
              image_url="https://avatars.githubusercontent.com/u/57598810?v=4"
              msg="Yeah, whats is?"
              owner={true}
            />
          </S.Content>
          <S.Footer>
            <div className="w-input-container">
              <div className="w-input-text-group">
                <div id="w-input-text" contentEditable></div>
                <div className="w-placeholder">Type a message</div>
              </div>
            </div>
            <S.ContainerButtons>
              <Smiley size={25} />
              <Paperclip size={25} className="paper-clip" />
              <NavigationArrow size={38} className="navigation-arrow" />
            </S.ContainerButtons>
          </S.Footer>
        </S.Chat>
      </S.Container>
    );
  }
};
