import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { FC } from 'react';

import { CardListProps } from '../common/CardList';
import NoticeCard from '../common/NoticeCard';
import SectionContainer from '../common/SectionContainer';

const FeedCardList: FC<CardListProps> = ({ title, icon, cardList }) => {
  return (
    <SectionContainer>
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
              ({ id, title, type, category, startDate, link }) =>
                cardList && (
                  <NoticeCard
                    key={id}
                    title={title}
                    type={type}
                    category={category}
                    startDate={startDate}
                    link={link}
                  />
                ),
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
    </SectionContainer>
  );
};

export default FeedCardList;

const CategoryContainer = styled.div`
  display: flex;
  border-bottom: 1px solid rgba(225, 225, 225, 0.07);
  padding: 10px 30px;
  align-items: center;
  color: #29a19c;
`;

const CardListContainer = styled.div`
  display: flex;
  gap: 20px;
  padding-bottom: 10px;
  overflow: auto;
  cursor: pointer;

  &::-webkit-scrollbar {
    background-color: transparent;
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 5px;
    :hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }
`;
