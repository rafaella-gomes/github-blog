import styled from "styled-components";

export const IssuesContainer = styled.div`
  width: 100%;
  height: 16, 25rem;
  background: ${(props) => props.theme["base-post"]};
  border: 2px solid ${(props) => props.theme["base-post"]};
  padding: 2rem;
  transition: 0.4s;
  border-radius: 10px;

  &:hover {
    border-color: ${(props) => props.theme["base-label"]};
  }

  div {
    display: flex;
    gap: 1rem;
    margin-bottom: 1.25rem;
  }
  h4 {
    flex: 1;
    font-size: 1.25rem;
    font-weight: 700;
    color: ${(props) => props.theme["base-title"]};
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  span {
    width: max-content;
    font-size: 0.875remrem;
    font-weight: 400;
    color: ${(props) => props.theme["base-span"]};
  }

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    text-align: left;
    font-size: 1rem;
    font-weight: 400;
    color: ${(props) => props.theme["base-text"]};
  }
`;
