import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Button from "@/common/Button";
import CardHeader from "@/common/CardHeader.tsx";
import CardLayout from "@/common/CardLayout.tsx";
interface FeedCardProps {
  content?: string;
  date?: string;
  size?: string;
}

const FeedCard = ({
  content = "2023년 장기미임대 수시1차 입주자모집(2023.04.07)",
  date = "청약시작일: 2023-04-19",
}: FeedCardProps) => {
  return (
    <CardLayout>
      {/* image & title */}
      <CardHeader />
      {/* content */}
      <p>{content}</p>
      {/* subscription date */}
      <span
        css={css`
          font-size: 14px;
        `}
      >
        {date}
      </span>
      {/* button */}
      <div>
        <Button>모집공고보기</Button>
      </div>
    </CardLayout>
  );
};

export default FeedCard;
