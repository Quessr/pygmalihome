import { breakpoints } from '@/styles/media';
import styled from '@emotion/styled';
import { FC, PropsWithChildren } from 'react';

export interface CardLayoutProps extends PropsWithChildren {
  fullWidth?: boolean;
}

const CardLayout = styled.div<CardLayoutProps>`
  width: ${(props) => (props.fullWidth ? '100%' : '252px')};
  min-width: 252px;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 5px;
  border: rgba(255, 255, 255, 0.35) 1px solid;
  padding: 1rem 1rem;
  color: #fff;
  display: grid;
  gap: 12px;
  & > div > button {
    float: right;
  }

  @media screen and (min-width: ${breakpoints.desktopL}px) {
    width: ${(props) => (props.fullWidth ? '100%' : '320px')};
    min-width: 320px;
  }
`;

export default CardLayout;
