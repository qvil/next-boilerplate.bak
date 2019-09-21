import styled from "styled-components";

const StyledButton = styled.button`
  padding: 8px;
  background: ${({ disabled }) => (disabled ? "gray" : "papayawhip")};
  color: pink;
`;

const Button = ({ disabled, children }) => {
  return <StyledButton disabled={disabled}>{children}</StyledButton>;
};

export default Button;
