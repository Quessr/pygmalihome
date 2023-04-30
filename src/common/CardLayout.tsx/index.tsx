import styled from "@emotion/styled";
import { FC, PropsWithChildren } from "react";

type CardLayoutProps = PropsWithChildren;

const CardLayout: FC<CardLayoutProps> = ({ children }) => {
  return <StyledCard>{children}</StyledCard>;
};

export default CardLayout;

const StyledCard = styled.div<CardLayoutProps>`
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 5px;
  border: rgba(255, 255, 255, 0.35) 1px solid;
  padding: 1rem 1rem;
  color: #fff;
  display: grid;
  gap: 0.75rem;
  & > div:last-of-type {
    text-align: right;
  }
`;
