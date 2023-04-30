import { FC, ReactNode } from "react";
import FeedCardListLayout from "./FeedCardListLayout";
import styled from "@emotion/styled";
import FeedCard from "./FeedCard";

interface FeedCardListProps {
  title?: string;
  icon?: ReactNode;
  cardList?: Array<{
    image: string;
    title: string;
    content: string;
    data: string;
  }>;
}

const FeedCardList: FC<FeedCardListProps> = ({ title, icon, cardList }) => {
  return (
    <FeedCardListLayout>
      {" "}
      {/* title */}
      {title && (
        <TitleContainer>
          {icon}
          <h3>{title}</h3>
        </TitleContainer>
      )}
      {/* cardList */}
      <CardListContainer>
        <FeedCard />
        <FeedCard />
      </CardListContainer>
    </FeedCardListLayout>
  );
};

export default FeedCardList;

const TitleContainer = styled.div`
  display: flex;
  border-bottom: 1px solid rgba(225, 225, 225, 0.07);
  padding: 10px 30px;
  align-items: center;
  color: #29a19c;
`;

const CardListContainer = styled.div`
  /* padding: 20px 30px; */
  display: flex;
  gap: 20px;
  padding: 30px;
`;
