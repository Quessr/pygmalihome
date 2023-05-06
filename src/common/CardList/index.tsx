import { FC, ReactNode } from "react";
import FeedCardListLayout from "@/components/Feed/FeedCardListLayout";
import styled from "@emotion/styled";
import FeedCard from "@/components/Feed/FeedCard";
import { css } from "@emotion/react";
import { FeedCardListProps } from "@/components/Feed/FeedCardList";

const CardList: FC<FeedCardListProps> = ({ title, icon, cardList }) => {
  return (
    <FeedCardListLayout>
      {/* title */}
      {title && (
        <CategoryContainer>
          {icon}
          <h3>{title}</h3>
        </CategoryContainer>
      )}
      {/* cardList */}

      <div
        css={css`
          padding: 30px;
        `}
      >
        <CardListContainer>
          {cardList && cardList.length !== 0 ? (
            cardList.map(
              (card) =>
                card !== null && (
                  <FeedCard
                    key={card?.id}
                    title={card?.title}
                    type={card?.type}
                    category={card?.category}
                    startDate={card?.startDate}
                    link={card?.link}
                  />
                )
            )
          ) : (
            <div
              css={css`
                color: #ffff;
              `}
            >
              No data available
            </div>
          )}
        </CardListContainer>
      </div>
    </FeedCardListLayout>
  );
};

export default CardList;

const CategoryContainer = styled.div`
  display: flex;
  border-bottom: 1px solid rgba(225, 225, 225, 0.07);
  padding: 10px 30px;
  align-items: center;
  color: #29a19c;
`;

const CardListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  gap: 20px;
  padding-bottom: 10px;
  /* max-height: 832px; */
  overflow: auto;

  &::-webkit-scrollbar {
    background-color: transparent;
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 5px;
    :hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }
`;
