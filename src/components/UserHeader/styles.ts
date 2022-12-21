import styled from "styled-components";

export const Container = styled.div`
  border-top-right-radius: 1rem;
  width: 100%;
  background-color: ${(props) => props.theme["white-600"]};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 1.5rem;
  box-shadow: 0px 2px 2px 1px rgba(0, 0, 0, 0.2);

  @keyframes pulse {
	0% {
		transform: scale(0.95);
		box-shadow: 0 0 0 0 rgba(0, 255, 0, 1);
	}

	70% {
		transform: scale(1);
		box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
	}

	100% {
		transform: scale(0.95);
		box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
	}
}

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
      padding:0.5rem;
      border-radius: 50%;
      transition: transform .5s ease-in-out;

       &:hover {
      cursor: pointer;
      transform: rotate(360deg);
      background-color: ${(props) => props.theme["primary-hover"]};
    }
    }

    span {
      height: 0.65rem;
      width: 0.65rem;
      background-color: ${(props) => props.theme.online};
      border-radius: 50%;
      display: inline-block;

      box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);
	    transform: scale(1);
	    animation: pulse 2s infinite;
    }
  }

  .nameDiv{

    flex: 0.97;
    :hover{
      cursor: pointer;
    }
  }
`;
