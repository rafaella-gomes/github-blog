import styled from "styled-components";

export const SearchFormContainer = styled.form`
  width: 100%;
  margin-top: 4.5rem;
  margin-bottom: 3rem;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 0.85rem;
  }

  h3 {
    font-size: 1.125rem;
    font-weight: 700;
    color: ${(props) => props.theme["base-subtitle"]};
    line-height: 160%;
  }
  span {
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 160%;
    color: ${(props) => props.theme["base-span"]};
    text-align: right;
  }
  input {
    width: 54rem;
    height: 3.125rem;
    padding: 1rem;
    border-radius: 6px;
    background: ${(props) => props.theme["base-input"]};
    border: 1px solid ${(props) => props.theme["base-border"]};
    color: ${(props) => props.theme["base-text"]};
    transition: 0.4s;
    align-items: center;
    margin-top: 0.75rem;

    font-size: 1rem;

    &:focus {
      border-color: ${(props) => props.theme["blue"]};
      outline: none;
    }

    &::placeholder {
      color: ${(props) => props.theme["base-label"]};
      font-size: 1rem;
      line-height: 160%;
      font-weight: 400;
    }
  }

  ul {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(26rem, 1fr));
    gap: 2rem;
    list-style-type: none;
    margin-top: 3rem;
    margin-bottom: 14rem;

    a {
      text-decoration: none;
    }
  }
`;
