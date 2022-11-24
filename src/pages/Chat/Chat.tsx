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
import { Line } from "../../components/Line/Line";
import { UserChat } from "../../components/UserChat/UserChat";
import { UserHeader } from "../../components/UserHeader/UserHeader";
import { UserMessage } from "../../components/UserMessage/UserMessage";
import { Welcome } from "../../components/Welcome/Welcome";
import { useAuth } from "../../context/AuthContext";
import { useChat } from "../../context/ChatContext";

import * as S from "./styles";

export const Chat = () => {
  const { signOutApp } = useAuth();
  const { userFind, currentChat } = useChat();

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

          {userFind ? (
            <>
              <UserChat
                onClick={() => console.log("test")}
                image_url={userFind!.photoURL}
                lastMessage=" "
                name={userFind!.displayName}
                selected={false}
                unreadMessage={0}
              />
              <Line />
            </>
          ) : null}
        </S.Margin>
      </S.Sidebar>

      <S.Chat>
        {currentChat ? (
          <>
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
          </>
        ) : (
          <Welcome />
        )}
      </S.Chat>
    </S.Container>
  );
};
