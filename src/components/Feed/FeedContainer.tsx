import { FC, ReactNode } from "react";
import FeedCard from "./FeedCard";
import styled from "@emotion/styled";
import { TbBellFilled } from "react-icons/tb";
import { BsExclamationLg } from "react-icons/bs";
import { css } from "@emotion/react";
interface FeedContainerProps {
  title?: string;
  icon?: ReactNode;
  cardList?: Array<{
    image: string;
    title: string;
    content: string;
    data: string;
  }>;
}

const FeedContainer: FC<FeedContainerProps> = ({ title, icon, cardList }) => {
  return (
    <StyledFeedContainer>
      {/* title */}
      <TitleContainer>
        {icon}
        <h3>{title}</h3>
      </TitleContainer>

      {/* cardList */}
      <CardListContainer>
        <FeedCard />
        <FeedCard />
      </CardListContainer>
    </StyledFeedContainer>
  );
};

export default FeedContainer;

const StyledFeedContainer = styled.div`
  /* display: flex; */
  width: 40.125rem;
  background-color: rgba(225, 225, 225, 0.03);
  border: 1px solid rgba(225, 225, 225, 0.07);
  border-radius: 5px;
`;

const TitleContainer = styled.div`
  display: flex;
  border-bottom: 1px solid rgba(225, 225, 225, 0.07);
  padding: 10px 30px;
  align-items: center;
  color: #29a19c;
`;

const CardListContainer = styled.div`
  padding: 20px 30px;
  display: flex;
  gap: 20px;
`;
