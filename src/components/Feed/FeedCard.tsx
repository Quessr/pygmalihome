import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Button from "../Button";

interface FeedCardProps {
  image?: string;
  title?: string;
  content?: string;
  date?: string;
}

const FeedCard = ({ image, title, content, date }: FeedCardProps) => {
  return (
    <StyledFeedCard>
      {/* image & title */}
      <div
        css={css`
          display: flex;
          column-gap: 10px;
        `}
      >
        <AgencyImage />
        <Title>매입임대</Title>
      </div>
      {/* content */}
      <p>2023년 장기미임대 수시1차 입주자모집(2023.04.07)</p>

      {/* subscription date */}
      <span
        css={css`
          font-size: 14px;
        `}
      >
        청약시작일: 2023-04-19
      </span>

      {/* button */}
      <div>
        <Button>모집공고보기</Button>
      </div>
    </StyledFeedCard>
  );
};

export default FeedCard;

const StyledFeedCard = styled.div`
  width: 15.625rem;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 5px;
  border: rgba(255, 255, 255, 0.35) 1px solid;
  padding: 1rem 1rem;
  color: #fff;
  display: grid;
  gap: 0.75rem;
  & > div:last-of-type {
    text-align: right;
  }
`;
const AgencyImage = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  background-color: skyblue;
  border-radius: 7.5rem;
`;

const Title = styled.h3`
  display: flex;
  align-items: center;
`;
