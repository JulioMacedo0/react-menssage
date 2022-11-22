import styled from "styled-components";

export const Container = styled.form`
  display: flex;
`;

export const Input = styled.input`
  border: none;
  width: 100%;
  height: 2.5rem;
  padding: 1rem;

  ::placeholder {
    color: ${(props) => props.theme["white"]};
  }

  background-color: ${(props) => props.theme["primary-light"]};
  color: ${(props) => props.theme["white"]};
`;
