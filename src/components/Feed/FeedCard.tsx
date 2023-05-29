import CardHeader from '@/components/Feed/FeedCardHeader.tsx';
import { css } from '@emotion/react';

import Button from '../common/Button';
import CardLayout from '../common/CardLayout';
import { FeedCardProps } from './FeedCardList';
import FeedCardTitle from './FeedCardTitle';

const FeedCard = ({
  title,
  type,
  category,
  startDate,
  link,
}: FeedCardProps) => {
  return (
    <CardLayout>
      {/* image & title */}
      <CardHeader category={category} type={type} />
      {/* content */}
      {/* <p>{title}</p> */}
      <FeedCardTitle title={title ?? ''} />
      {/* subscription date */}
      <span
        css={css`
          font-size: 14px;
        `}
      >
        {`청약시작일: ${startDate}`}
      </span>
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

export default FeedCard;
