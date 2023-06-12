import { breakpoints } from '@/styles/media';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { FC, ReactNode } from 'react';

import NoticeCard, { NoticeCardProps } from '../NoticeCard';
import Section from '../Section';

export interface CardListProps {
  title?: string;
  icon?: ReactNode;
  cardList?: Array<NoticeCardProps> | null;
}

const CardList: FC<CardListProps> = ({ title, icon, cardList }) => {
  return (
    <Section>
      {/* title */}
      {title && (
        <CategoryContainer>
          {icon && <span>{icon}</span>}
          <h3>{title}</h3>
        </CategoryContainer>
      )}
      {/* cardList */}

      <div
        css={css`
          padding: 30px;
        `}
      >
        {cardList && cardList.length !== 0 ? (
          <CardListContainer>
            {cardList.map(
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
            )}
          </CardListContainer>
        ) : (
          <div
            css={css`
              color: #ffff;
              text-align: center;
            `}
          >
            No data available
          </div>
        )}
      </div>
    </Section>
  );
};

export default CardList;

const CategoryContainer = styled.div`
  display: flex;
  gap: 5px;
  border-bottom: 1px solid rgba(225, 225, 225, 0.07);
  padding: 10px 30px;
  align-items: center;
  color: #29a19c;
  margin: 0 20px;

  & > span {
    color: #ecca75;
  }
`;

const CardListContainer = styled.div<CardListProps>`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  justify-items: center;
  gap: 20px;
  padding-bottom: 10px;
  overflow: auto;

  &::-webkit-scrollbar {
    background-color: transparent;
    width: 8px;
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 5px;
    :hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }

  @media screen and (min-width: ${breakpoints.tablet}px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: ${breakpoints.laptop}px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: ${breakpoints.desktop}px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (min-width: ${breakpoints.desktopL}px) {
    grid-template-columns: repeat(8, 1fr);
  }
`;
