import styled from "styled-components";

const Button = styled.button`
  background: none;
  border: none;
  outline: none;

  &.disabled {
    svg {
      stroke: gainsboro;
    }
  }

  &:hover,
  &:focus {
    opacity: 0.8;
  }
`;

export default Button;
