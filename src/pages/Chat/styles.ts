import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  max-width: 100rem;
  height: 800px;
  margin: 1rem auto;
  overflow-x: hidden;
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
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;
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
    gap: 0.5rem;
    svg {
      color: ${(props) => props.theme["white"]};
      cursor: pointer;


    &:hover {
      color: ${(props) => props.theme["grey-500"]};
    }
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

    &:hover {
      cursor: pointer;
      color: ${(props) => props.theme["grey-500"]};
    }
  }
`;



export const Chat = styled.div`

@keyframes example {
  0%   { right:-0.9rem; top:42rem; opacity: 0.5;}
 // 25%  { right:0.7rem; top:42rem;}
 // 50%  { right:0.9rem; top:42rem;}
 // 75%  { right:1.2rem; top:42rem;}
  100% { right:1.5rem; top:42rem; opacity: 1;}
}

  position: relative;
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
  width: 70%;

  background-color: ${(props) => props.theme["grey-200"]};

  > svg {
    color: ${(props) => props.theme["primary-hover"]};
  }
  .arrowDown {
    color: ${(props) => props.theme["primary"]};
    position: absolute;
    right: 1.5rem;
    top: 42rem;
    opacity: 1;
    animation-name: example;
    animation-duration: 1s;
    transition: transform .5s ease-in-out;
    &:hover {
      cursor: pointer;
      transform: rotate(360deg);
      color: ${(props) => props.theme["primary-hover"]};
    }
  }
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

  border-bottom-right-radius: 1rem;
  width: 100%;
  position: absolute;
  bottom: 0;
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
      flex: 1;
      padding: 0.5rem;
      border-radius: 0.5rem;
      border: solid 1px transparent;
      color: ${(props) => props.theme["grey"]};

     &:focus {
      outline: none;
      border:  ${(props) => props.theme["primary"]};
      border-style: solid;
      border-width: 1px;
     }
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
    transition:color 0.5s ease-out ;
    :hover {
      color: ${(props) => props.theme["primary-hover"]};

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
    transition: color 0.5s ease-out ;
    background-color: ${(props) => props.theme.primary};

    :hover {
      color:#a0a0a0;
      ;
    }
  }
`;
