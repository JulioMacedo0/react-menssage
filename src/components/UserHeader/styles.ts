import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme["white-600"]};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 1.5rem;
  box-shadow: 0px 2px 2px 1px rgba(0, 0, 0, 0.2);

  p {
    font-size: 1.5rem;
    font-weight: bold;
    color: ${(props) => props.theme["title-name-user"]};
  }

  div {
    display: flex;
    gap: 0.8rem;
    align-items: center;

    svg {
      color: ${(props) => props.theme.white};
      background-color: ${(props) => props.theme.primary};
      padding: 8px;
      border-radius: 50%;
    }

    span {
      height: 0.5rem;
      width: 0.5rem;
      background-color: ${(props) => props.theme.online};
      border-radius: 50%;
      display: inline-block;
    }
  }
`;
