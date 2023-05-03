import CardLayout from "@/common/CardLayout";
import FeedCardListLayout from "./FeedCardListLayout";
import CardHeader from "@/components/Feed/FeedCardHeader.tsx";
import Button from "@/common/Button";
import Input from "@/common/Input";
import { css } from "@emotion/react";
import Logo from "@/assets/logo.svg";

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
            category="피그말리홈으로 청약신청일 알림을 받아보세요!"
            color="primary"
            logo={<Logo />}
          />
          <Input placeholder="이메일 주소" />
          <Button size="md">구독하기</Button>
        </CardLayout>
      </form>
    </FeedCardListLayout>
  );
};

export default Notification;
