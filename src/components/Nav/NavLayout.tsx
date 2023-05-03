import styled from "@emotion/styled";
import { FC, PropsWithChildren } from "react";

type NaveLayoutProps = PropsWithChildren;

const NavLayout: FC<NaveLayoutProps> = ({ children }) => {
  return <StyledNavLayout>{children}</StyledNavLayout>;
};

export default NavLayout;

const StyledNavLayout = styled.div`
  width: 300px;
  background-color: rgba(225, 225, 225, 0.03);
  border: 1px solid rgba(225, 225, 225, 0.07);
  border-radius: 5px;
  padding: 4px;
`;
