import styled from "@emotion/styled";
import { FC } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "sm " | "md";
}

const Button: FC<ButtonProps> = ({ size = "sm", ...props }) => {
  return <ButtonStyle size={size} {...props} />;
};

export default Button;

const ButtonStyle = styled.button<{ size: string }>`
  background-color: #29a19c;
  color: #ffff;
  border-radius: 0.25rem;
  font-size: ${(props) => (props.size === "sm" ? "0.875rem" : "1rem")};
  min-width: ${(props) => (props.size === "sm" ? "5.5rem" : "25.25rem")};
  height: ${(props) => (props.size === "sm" ? "1.5rem" : "2.5rem")};
`;
