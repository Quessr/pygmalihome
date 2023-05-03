import CardLayout, { CardLayoutProps } from "@/common/CardLayout";
import FeedCardListLayout from "./FeedCardListLayout";
import CardHeader from "@/components/Feed/FeedCardHeader.tsx";
import Button from "@/common/Button";
import Input from "@/common/Input";
import { css } from "@emotion/react";
import Logo from "@/assets/logo.svg";
import { FC, useState } from "react";
import axios from "axios";

type NotificationProps = Pick<CardLayoutProps, "fullWidth">;

const Notification: FC<NotificationProps> = ({ fullWidth }) => {
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const userEmail = target.useremail.value;

    axios.post(
      "https://pygmalihome-backend.vercel.app/api/notification/subscribe",
      {}
    );

    console.log(userEmail);

    //   axios.post(
    //     "https://pygmalihome-backend.vercel.app/api/notification/subscribe",
    //     {
    //       data: { email: userEmail },
    //     }
    //   );
  };

  return (
    <FeedCardListLayout>
      <form
        css={css`
          display: grid;
          padding: 30px;
        `}
        onSubmit={onSubmit}
      >
        <CardLayout fullWidth={fullWidth}>
          <CardHeader
            category="피그말리홈으로 청약신청일 알림을 받아보세요!"
            color="primary"
            logo={<Logo />}
          />
          <Input type="email" placeholder="이메일 주소" name="useremail" />
          <Button size="md" type="submit">
            구독하기
          </Button>
        </CardLayout>
      </form>
    </FeedCardListLayout>
  );
};

export default Notification;
