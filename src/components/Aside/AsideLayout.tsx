import { breakpoints } from '@/styles/media';
import styled from '@emotion/styled';
import { FC, PropsWithChildren } from 'react';

type AsideLayoutProps = PropsWithChildren;

const AsideLayout: FC<AsideLayoutProps> = ({ children }) => {
  return <StyledAsideLayout>{children}</StyledAsideLayout>;
};

export default AsideLayout;

const StyledAsideLayout = styled.div`
  background-color: rgba(225, 225, 225, 0.03);
  border: 1px solid rgba(225, 225, 225, 0.07);
  border-radius: 5px;
  padding: 16px;
  height: fit-content;
  @media screen and (max-width: ${breakpoints.laptop}px) {
    width: 152px;
  }

  @media screen and (min-width: ${breakpoints.laptop}px) {
    width: 252px;
  }
`;
