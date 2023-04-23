import styled from "styled-components";

export const LinksContainer = styled.a`
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
  }

  &:hover {
    border-color: ${(props) => props.theme["blue"]};
  }
`;
