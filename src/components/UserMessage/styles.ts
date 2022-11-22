import styled from "styled-components";

interface StyleProps {
  owner: boolean;
}
export const Container = styled.div<StyleProps>`
  width: 100%;
  margin: 1rem 0rem;

  > div {
    margin: 0 1rem;
    display: flex;
    align-items: center;
    justify-content: ${(props) => (props.owner ? "end" : "start")};
    flex-direction: ${(props) => (props.owner ? "row-reverse" : "row")};
  }
`;

export const MessageContent = styled.p<StyleProps>`
  padding: 1rem;
  max-width: 80%;
  border-radius: 12px;
  color: ${(props) =>
    props.owner ? props.theme["white"] : props.theme["grey"]};
  background-color: ${(props) =>
    props.owner ? props.theme.primary : props.theme["input-chat-background"]};
`;

export const ImgUser = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  align-items: center;
  // justify-content: start;
  img {
    margin-right: 0.5rem;
    object-fit: cover;
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 100%;
  }

  span {
    color: ${(props) => props.theme["grey"]};
    font-size: 0.7rem;
    margin: 0 0.5rem;
    font-weight: bold;
  }
`;
