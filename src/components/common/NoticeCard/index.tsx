import { breakpoints } from '@/styles/media';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import Button from '../Button';
import CardLayout from '../CardLayout';
import NoticeCardHeader from './NoticeCardHeader';
import NoticeCardTitle from './NoticeCardTitle';

export interface NoticeCardProps {
  id?: string;
  type?: string;
  category?: string;
  isReceiving?: boolean;
  link?: string;
  title?: string;
  startDate: string;
  endDate?: string;
}

const NoticeCard = ({
  title,
  type,
  category,
  startDate,
  link,
}: NoticeCardProps) => {
  return (
    <CardLayout>
      {/* image & title */}
      <NoticeCardHeader category={category} type={type} />
      {/* content */}
      <NoticeCardTitle title={title ?? ''} />
      {/* subscription date */}
      <StyledStartDate>{`청약시작일: ${startDate}`}</StyledStartDate>
      {/* button */}
      <div>
        <Button>
          <a href={link} target="_blank">
            모집공고보기
          </a>
        </Button>
      </div>
    </CardLayout>
  );
};

export default NoticeCard;

const StyledStartDate = styled.span`
  font-size: 14px;

  @media screen and (min-width: ${breakpoints.desktopL}px) {
    font-size: 16px;
  }
`;
