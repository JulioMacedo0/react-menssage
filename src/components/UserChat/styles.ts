import styled from "styled-components";

interface UserChatProps {
  selected: boolean;
  unreadMessage: number;
}

export const Container = styled.div<UserChatProps>`
  width: 100%;
  height: 4rem;
  display: flex;
  padding: 1.2rem;
  transition: background-color 0.8s;
  background-color: ${(props) =>
    props.selected ? props.theme["primary-light"] : props.theme.primary};
  justify-content: space-between;
  align-items: center;

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
  }

  :hover {
    background-color: ${(props) => props.theme["primary-hover"]};
    cursor: pointer;
  }

  > div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

  }
`;

export const Profile = styled.div`
  display: flex;
  gap: 0.5rem;
  img {
    object-fit: cover;
    width: 3rem;
    height: 3rem;
    border-radius: 100%;
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.2rem;

    h2 {
      font-size: 0.85rem;
      color: ${(props) => props.theme["white"]};
    }

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
  }
`;
