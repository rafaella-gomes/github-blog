import styled from "styled-components";

export const ProfileContainer = styled.div`
  width: 100%;
  min-height: 13.25rem;
  margin-top: -5.5rem;
  background: ${(props) => props.theme["base-profile"]};
  box-shadow: 0px 2px 28px rgba(0, 0, 0.2);
  border-radius: 10px;
  padding: 2rem 2.5rem;
  display: flex;
  gap: 2rem;
`;
export const ProfileImage = styled.img`
  width: 9.25rem;
  height: 9.25rem;
  border-radius: 8px;
  object-fit: cover;
`;

export const ProfileParticularities = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  section {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  h1 {
    font-size: 1.5rem;
    color: ${(props) => props.theme["base-title"]};
    line-height: 130%;
  }
  p {
    font-size: 1rem;
    font-weight: 400;
    width: 38.25rem;
    height: 3.25rem;
    line-height: 160%;
    color: ${(props) => props.theme["base-text"]};
    margin-top: -1rem;
  }
`;
export const ProfileInfos = styled.div`
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
      width: 1.7rem;
      height: 1.7rem;
      margin-top: 0, 25rem;
      margin-bottom: 0.25rem;

      color: ${(props) => props.theme["base-label"]};
    }
  }
`;
