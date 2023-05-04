import Aside from "@/components/Aside";
import Nav from "@/components/Nav";
import { css } from "@emotion/react";
import { FC, PropsWithChildren } from "react";
import Header from "../header";

type LayoutProps = PropsWithChildren;

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div
      css={css`
        display: flex;
      `}
    >
      <Nav />
      <div>
        <Header />

        <div
          css={css`
            display: flex;
            padding: 28px;
          `}
        >
          <main>{children}</main>
          <Aside />
        </div>
      </div>
    </div>
  );
};

export default Layout;
