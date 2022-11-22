import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  max-width: 100rem;
  height: 800px;
  margin: 1rem auto;
`;

export const Sidebar = styled.div`
  width: 20%;
  min-width: 17.5rem;
  height: 100%;
  background-color: ${(props) => props.theme.primary};
  border-radius: 16px;
`;

export const Margin = styled.div`
  margin: 0 1.2rem;
`;
export const HeaderSidebar = styled.div`
  display: flex;
  justify-content: space-between;
  justify-items: center;
  width: 100%;
  height: 1rem;
  padding: 1.5rem 0;
  margin-bottom: 1.8rem;

  span {
    font-size: 1.5rem;
    color: ${(props) => props.theme["white"]};
  }
  > div {
    display: flex;
    justify-content: space-between;

    svg {
      color: ${(props) => props.theme["white"]};
    }
  }
`;

export const NavChat = styled.nav`
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: flex;

  justify-content: space-between;

  svg {
    color: ${(props) => props.theme["white"]};
  }
`;

export const Chat = styled.div`
  width: 80%;
  // height: 100%;
  background-color: ${(props) => props.theme["grey-200"]};
`;

export const Content = styled.main`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const Footer = styled.footer`
  background-color: ${(props) => props.theme["input-chat-background"]};
  display: flex;
  align-items: center;
  justify-content: space-around;

  .w-input-container {
    width: 80%;
    height: 4rem;
    box-sizing: border-box;
    padding: 9px 18px 11px;

    border: 1px solid ${(props) => props.theme["input-chat-background"]};
  }
  .w-input-text-group {
    position: relative;
  }

  .w-placeholder {
    color: #a0a0a0;
    top: 0;
    pointer-events: none;
    user-select: none;
    position: absolute;
    opacity: 0;
    transition: 0.2s padding ease-in-out;
  }

  #w-input-text {
    overflow-x: hidden;
    overflow-y: auto;
    white-space: pre-wrap;
    word-wrap: break-word;
    z-index: 1;
    max-height: 40px;
    min-height: 20px;
    padding: 0 0 0 2px;
    outline: 0;
    transition: 0.2s padding ease-in-out;
  }

  #w-input-text:empty + .w-placeholder {
    opacity: 1;
  }

  #w-input-text:focus + .w-placeholder {
    padding: 0 6px 0px;
  }

  #w-input-text:focus {
    padding: 0 6px 0px;
  }
`;

export const ContainerButtons = styled.div`
  gap: 0.8rem;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  svg {
    color: #a0a0a0;
  }

  .paper-clip {
    transform: rotate(-90deg);
  }

  .navigation-arrow {
    transform: rotate(90deg);
  }

  > :last-child {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    padding: 8px;
    color: white;
    background-color: ${(props) => props.theme.primary};
  }
`;
