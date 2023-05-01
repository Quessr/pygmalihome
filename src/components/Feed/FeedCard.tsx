import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Button from "@/common/Button";
import CardHeader from "@/common/CardHeader.tsx";
import CardLayout from "@/common/CardLayout.tsx";
import { FeedCardListProps } from "./FeedCardList";
import { FeedCardProps } from "./FeedCardList";

const FeedCard = ({
  title,
}: // title,
// date = "청약시작일: 2023-04-19",
FeedCardProps) => {
  return (
    <CardLayout>
      {/* image & title */}
      <CardHeader />
      {/* content */}
      <p>{title}</p>
      {/* subscription date */}
      <span
        css={css`
          font-size: 14px;
        `}
      >
        {/* {date} */}
      </span>
      {/* button */}
      <div>
        <Button>모집공고보기</Button>
      </div>
    </CardLayout>
  );
};

export default FeedCard;
