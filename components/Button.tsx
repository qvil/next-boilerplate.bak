import styled from "styled-components";

interface ButtonProps {
  children?: any;
  disabled?: boolean;
}

const StyledButton = styled.button`
  padding: 8px;
  background: ${({ disabled }) => (disabled ? "gray" : "papayawhip")};
  color: pink;
`;

const Button: React.FC<ButtonProps> = ({ disabled, children }) => {
  return <StyledButton disabled={disabled}>{children}</StyledButton>;
};

export default Button;
