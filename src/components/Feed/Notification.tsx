import FeedCardListLayout from "./FeedCardListLayout";
import CardHeader from "@/components/Feed/FeedCardHeader.tsx";
import { css } from "@emotion/react";
import Logo from "@/assets/logo.svg";
import { FC, useState } from "react";
import axios from "axios";
import CardLayout from "../common/CardLayout";
import Button from "../common/Button";
import Input from "../common/Input";

const Notification: FC = () => {
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const userEmail = target.useremail.value;

    axios.post("/api/notification/subscribe", { email: userEmail });
  };

  return (
    <FeedCardListLayout>
      <form
        css={css`
          min-width: 30rem;
          width: 100%;
          display: grid;
          place-items: center;
          padding: 30px;

          @media screen and (min-width: 1200px) {
            width: 50%;
            margin: 0 auto;
          }
        `}
        onSubmit={onSubmit}
      >
        <CardLayout fullWidth>
          <CardHeader
            type="logo"
            category="피그말리홈으로 청약신청일 알림을 받아보세요!"
            color="primary"
          />
          <Input
            fullWidth
            type="email"
            placeholder="이메일 주소"
            name="useremail"
          />
          <Button fullWidth size="md" type="submit">
            구독하기
          </Button>
        </CardLayout>
      </form>
    </FeedCardListLayout>
  );
};

export default Notification;
