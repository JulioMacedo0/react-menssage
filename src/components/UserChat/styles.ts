import styled from "styled-components";

interface UserChatProps {
  selected: boolean;
  unreadMessage: number;
  read: boolean;
}

export const Container = styled.div<UserChatProps>`
  width: 100%;
  height: 4rem;
  display: flex;
  transition: background-color 0.8s;
  background-color: ${(props) =>
    props.selected ? props.theme["primary-light"] : props.theme.primary};
  justify-content: space-between;
  align-items: center;

  background-image: linear-gradient(
    ${(props) => props.theme["primary-hover"]},
    ${(props) => props.theme["primary-hover"]}
  );
  background-size: 0 100%;
  background-repeat: no-repeat;
  transition: 0.4s;
  :hover {
    background-size: 100% 100%;
    cursor: pointer;
  }

  span {
    display: ${(props) => (props.unreadMessage ? "flex" : "none")};

    justify-content: center;
    align-items: center;
    border-radius: 100%;
    width: 0.5rem;
    height: 0.5rem;
    padding: 8px;
    background-color: ${(props) => props.theme.white};
    color: ${(props) => props.theme.primary};
    font-weight: bold;
    font-size: 0.6rem;
    margin-right: 1.5rem;
  }

  > div {
    padding: 1.2rem 0rem 1.2rem 1.2rem;

    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Profile = styled.div`
  flex: 1;
  display: flex;
  gap: 0.5rem;
  img {
    object-fit: cover;
    width: 3rem;
    height: 3rem;
    border-radius: 100%;
  }

  > div {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.2rem;

    h2 {
      font-size: 0.85rem;
      color: ${(props) => props.theme["white"]};
    }
  }
`;

export const rowMessage = styled.div<UserChatProps>`
  display: flex;
  justify-content: space-between;
  gap: 0.15rem;
  align-items: center;

  p {
    width: 9.35rem;
    font-size: 0.75rem;
    color: ${(props) => props.theme["white"]};
    font-weight: normal;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1; /* number of lines to show */
    line-clamp: 1;
    -webkit-box-orient: vertical;
  }

  svg {
    color: ${(props) =>
      props.read ? props.theme["white"] : props.theme["message-unread"]};
  }
  > div {
    display: flex;
    align-items: center;
  }
`;

export const rowName = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    color: ${(props) => props.theme["white"]};
    font-size: 0.75rem;
    margin-right: 0.5rem;
  }
`;
