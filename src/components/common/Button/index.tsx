import { breakpoints } from '@/styles/media';
import styled from '@emotion/styled';
import { FC } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: Boolean;
  size?: 'sm ' | 'md';
}

const Button: FC<ButtonProps> = ({ size = 'sm', ...props }) => {
  return <ButtonStyle size={size} {...props} />;
};

export default Button;

const ButtonStyle = styled.button<Omit<ButtonProps, 'size'> & { size: string }>`
  background-color: #29a19c;
  color: #ffff;
  border-radius: 0.25rem;
  font-size: ${(props) => (props.size === 'sm' ? '14px' : '16px')};
  width: ${(props) => (props.fullWidth ? '100%' : '88px')};
  height: ${(props) => (props.size === 'sm' ? '1.5rem' : '2.5rem')};

  @media screen and (min-width: ${breakpoints.desktopL}px) {
    font-size: ${(props) => (props.size === 'sm' ? '16px' : '20px')};
    width: ${(props) => (props.fullWidth ? '100%' : 'auto')};
    padding-left: ${(props) => (props.size === 'sm' ? '8px' : '12px')};
    padding-right: ${(props) => (props.size === 'sm' ? '8px' : '12px')};
    padding-top: ${(props) => (props.size === 'sm' ? '4px' : '12px')};
    padding-bottom: ${(props) => (props.size === 'sm' ? '4px' : '12px')};
    height: auto;
  }
`;
