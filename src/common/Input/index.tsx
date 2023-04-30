import styled from "@emotion/styled";
import { FC } from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input: FC<InputProps> = ({ ...props }) => {
  return <InputStyle {...props} />;
};

export default Input;

const InputStyle = styled.input<InputProps>`
  background-color: rgba(225, 225, 225, 0.05);
  color: rgba(225, 225, 225, 0.35);
  border-radius: 0.25rem;
  min-width: 25.25rem;
  height: 2.5rem;
  padding: 0 14px;
  &::placeholder {
    font-size: 1rem;
  }
`;
