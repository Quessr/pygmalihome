import { breakpoints } from '@/styles/media';
import styled from '@emotion/styled';
import { FC } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  fullWidth?: boolean;
}

const Input: FC<InputProps> = ({ ...props }) => {
  return <InputStyle {...props} />;
};

export default Input;

const InputStyle = styled.input<InputProps>`
  background-color: rgba(225, 225, 225, 0.05);
  color: rgba(225, 225, 225);
  border-radius: 0.25rem;
  width: ${(props) => (props.fullWidth ? '100%' : '404px')};
  height: 2.5rem;
  padding: 0 14px;
  &::placeholder {
    font-size: 1rem;
    color: rgba(225, 225, 225, 0.35);
  }
`;
