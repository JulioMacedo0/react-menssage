import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    width: 35rem;
    height: 35rem;
  }

  p {
    color: ${(props) => props.theme.primary};
    font-size: 1.5rem;
  }
`;
