import Aside from '@/components/Aside';
import Nav from '@/components/Nav';
import { breakpoints } from '@/styles/media';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { FC, PropsWithChildren } from 'react';

import Header from '../Header';

type LayoutProps = PropsWithChildren;

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div
      css={css`
        display: flex;
        width: 100%;
        min-height: 100vh;
      `}
    >
      <ResponsiveNav>
        <Nav />
      </ResponsiveNav>
      <div
        css={css`
          flex-grow: 1;
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
            `}
          >
            {children}
          </main>
          <Aside />
        </div>
      </div>
    </div>
  );
};

export default Layout;

const ResponsiveNav = styled.div`
  @media screen and (max-width: ${breakpoints.laptop}px) {
    display: none;
  }

  @media screen and (min-width: ${breakpoints.laptop}px) {
    display: flex;
    flex-grow: 1;
  }
`;
