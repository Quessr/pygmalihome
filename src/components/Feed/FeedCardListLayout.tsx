import { FC, PropsWithChildren, useRef, useState } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
type FeedCardListLayoutProps = PropsWithChildren;

const FeedCardListLayout: FC<FeedCardListLayoutProps> = ({ children }) => {
  return <StyledFeedContainer>{children}</StyledFeedContainer>;
};

export default FeedCardListLayout;

const StyledFeedContainer = styled.div`
  width: 40.125rem;
  background-color: rgba(225, 225, 225, 0.03);
  border: 1px solid rgba(225, 225, 225, 0.07);
  border-radius: 5px;
  overflow: hidden;
`;
