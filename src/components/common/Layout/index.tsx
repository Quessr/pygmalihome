import Aside from '@/components/Aside';
import Nav from '@/components/Nav';
import { css } from '@emotion/react';
import { FC, PropsWithChildren } from 'react';

import Header from '../header';

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
      <Nav />
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
