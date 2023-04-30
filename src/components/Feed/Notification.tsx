import CardLayout from "@/common/CardLayout.tsx";
import FeedCard from "./FeedCard";
import FeedCardListLayout from "./FeedCardListLayout";
import CardHeader from "@/common/CardHeader.tsx";
import Button from "@/common/Button";
import Input from "@/common/Input";
import { css } from "@emotion/react";

const Notification = () => {
  return (
    <FeedCardListLayout>
      <form
        css={css`
          display: grid;
          padding: 30px;
        `}
      >
        <CardLayout>
          <CardHeader
            title="피그말리홈으로 청약신청일 알림을 받아보세요!"
            color="primary"
          />
          <Input placeholder="이메일 주소" />
          <Button size="md">구독하기</Button>
        </CardLayout>
      </form>
    </FeedCardListLayout>
  );
};

export default Notification;
