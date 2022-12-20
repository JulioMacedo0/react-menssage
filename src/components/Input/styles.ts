import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  width: 100%;
  height: 2.5rem;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.5rem;

  background-color: ${(props) => props.theme["white"]};
  button {
    background-color: ${(props) => props.theme["primary-light"]};
    color: ${(props) => props.theme["white"]};
    border-top-right-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    border: none;
    height: 100%;
  }

  > svg {
    color: ${(props) => props.theme["primary"]};
    cursor: default;
    margin-left: 0.5rem;
  }
`;

export const Input = styled.input`
  outline: none;
  border: none;
  width: 100%;
  height: 100%;
  padding: 1rem;
  background-color: transparent;

  ::placeholder {
    color: ${(props) => props.theme["primary"]};
    font-size: 0.9rem;
  }

  color: ${(props) => props.theme["primary"]};
`;
