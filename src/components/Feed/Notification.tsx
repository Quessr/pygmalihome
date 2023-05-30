import Logo from '@/assets/logo.svg';
import CardHeader from '@/components/common/NoticeCard/NoticeCardHeader';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import axios from 'axios';
import { FC, useState } from 'react';

import Button from '../common/Button';
import CardLayout from '../common/CardLayout';
import Input from '../common/Input';
import FeedCardListLayout from '../common/SectionContainer';

const Notification: FC = () => {
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const userEmail = target.useremail.value;

    axios.post('/api/notification/subscribe', { email: userEmail });
  };

  return (
    <FeedCardListLayout>
      <StyledForm onSubmit={onSubmit}>
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
      </StyledForm>
    </FeedCardListLayout>
  );
};

export default Notification;

const StyledForm = styled.form`
  min-width: 30rem;
  width: 100%;
  display: grid;
  place-items: center;
  padding: 30px;

  @media screen and (min-width: 1200px) {
    width: 50%;
    margin: 0 auto;
  }
`;
