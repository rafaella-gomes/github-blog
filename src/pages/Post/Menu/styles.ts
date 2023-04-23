import styled from "styled-components";

export const MenuContainer = styled.div`
  width: 100%;
  min-height: 10.25rem;
  margin-top: -5.5rem;
  margin-bottom: 2.5rem;
  background: ${(props) => props.theme["base-profile"]};
  box-shadow: 0px 2px 28px rgba(0, 0, 0.2);
  border-radius: 10px;
  padding: 2rem 2.5rem;
  display: flex;
  gap: 2rem;
`;

export const PostParticularities = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  section {
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      border: none;
      background: none;
      color: ${(props) => props.theme["blue"]};
      font-size: 0.75rem;
      text-transform: uppercase;
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-weight: 700;
      transition: 0.4s;
      border-bottom: 1px solid transparent;
      height: 19px;
      line-height: 19px;

      svg {
        width: 0.75rem;
        height: 0.75rem;
        flex-direction: row-reverse;
      }

      &:hover {
        border-color: ${(props) => props.theme["blue"]};
      }
    }
  }

  h2 {
    font-size: 1.5rem;
    color: ${(props) => props.theme["base-title"]};
    line-height: 130%;
    font-weight: 700;
  }
`;
export const PostInfos = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 1.5rem;
  width: 24.56rem;
  height: 1.625rem;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 0.5rem;

    flex: none;
    flex-grow: 0;
    font-size: 1rem;
    font-weight: 400;
    line-height: 160%;
    color: ${(props) => props.theme["base-subtitle"]};

    svg {
      width: 1.5rem;
      height: 1.5rem;
      margin-top: 0, 25rem;
      margin-bottom: 0.25rem;

      color: ${(props) => props.theme["base-label"]};
    }
  }
`;
