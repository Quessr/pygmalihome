import Aside from '@/components/Aside';
import Nav from '@/components/Nav';
import { breakpoints } from '@/styles/media';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { FC, PropsWithChildren } from 'react';

import Header from '../Header';
import MobileHeader from '../MobileHeader';

type LayoutProps = PropsWithChildren;

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <StyledLayout>
      <ResponsiveNav>
        <Nav />
      </ResponsiveNav>
      <MobileHeader />
      <div
        css={css`
          flex-grow: 1;
          width: 100%;
        `}
      >
        <Header />

        <div
          css={css`
            display: flex;
            padding: 28px;
          `}
        >
          <main
            css={css`
              flex-grow: 1;
              width: calc(100vw - 300px - 252px - 56px - 56px);
              margin: 64px 0 92px 0;

              @media screen and (min-width: ${breakpoints.tablet}px) {
                margin: 0;
              }
            `}
          >
            {children}
          </main>
          <Aside />
        </div>
      </div>
    </StyledLayout>
  );
};

export default Layout;

const StyledLayout = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;

  @media screen and (max-width: ${breakpoints.tablet}px) {
    & .aside {
      display: none;
    }
  }

  @media screen and (min-width: ${breakpoints.tablet}px) {
    & .mobileHeader {
      display: none;
    }
  }
`;

const ResponsiveNav = styled.div`
  @media screen and (max-width: ${breakpoints.laptop}px) {
    display: none;
  }

  @media screen and (min-width: ${breakpoints.laptop}px) {
    display: flex;
    flex-grow: 1;
  }
`;
