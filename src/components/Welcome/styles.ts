import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    border: 1px solid red;
    width: 35rem;
    height: 35rem;
    object-fit: cover;
    object-position: bottom;

    margin: 0 auto;

    @media (max-width: 850px) {
      width: 25rem;
      height: 25rem;
    }

    @media (max-width: 690px) {
      width: 15rem;
      height: 15rem;
    }
  }

  p {
    color: ${(props) => props.theme.primary};
    font-size: 1.5rem;
  }
`;
