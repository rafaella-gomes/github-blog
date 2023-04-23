import styled from "styled-components";

export const PostContainer = styled.div`
  max-width: 54rem;
  height: 26.375rem;

  .container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2.5rem 2rem;
    margin-bottom: 8rem;
    color: ${(props) => props.theme["base-text"]};
    font-weight: 700;
    font-size: 1rem;

    p {
      margin-bottom: 0.5rem;
    }
    a {
      color: ${(props) => props.theme["blue"]};
    }

    .language-js {
      padding: 0.5rem;
      background: ${(props) => props.theme["base-post"]};
    }
  }
`;
