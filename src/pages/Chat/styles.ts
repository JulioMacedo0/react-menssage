import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  max-width: 100rem;
  height: 800px;
  margin: 1rem auto;

  > svg {
    :hover {
      cursor: pointer;
    }
  }


  @media (max-width: 1440px) {
      width: 100vw;
      height: 100vh;
      margin: 0 0;

    }
`;

export const Sidebar = styled.div`
  width: 30%;
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
  width: 70%;
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



  form {
    margin-left: 1rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;


    input {

    }
  }
`;

export const ContainerButtons = styled.div`
  gap: 0.8rem;
  display: flex;
  align-items: center;
  padding: 0rem 1rem;

  >button {
   margin: 0.5rem 0rem;
    border: none;
  }
 > svg {
    color: #a0a0a0;
    cursor: pointer;
    transition:all 0.5s ease-out;
    :hover {
      filter: brightness(0.7);
    }
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
