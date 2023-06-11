import CardHeader from '@/components/common/NoticeCard/NoticeCardHeader';
import { breakpoints } from '@/styles/media';
import styled from '@emotion/styled';
import axios from 'axios';
import { FC } from 'react';
import { toast } from 'react-toastify';

import Button from '../common/Button';
import CardLayout from '../common/CardLayout';
import Input from '../common/Input';
import SectionContainer from '../common/SectionContainer';

const Notification: FC = () => {
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const userEmail = target.useremail.value;

    try {
      await axios.post('/api/notification/subscribe', {
        email: userEmail,
      });
      toast.success('구독신청이 되었습니다.');
      target.useremail.value = '';
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.warn(error.response?.data.errors.email);
      }
    }
  };

  return (
    <SectionContainer>
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
    </SectionContainer>
  );
};

export default Notification;

const StyledForm = styled.form`
  width: 100%;
  display: grid;
  place-items: center;
  padding: 30px;

  @media screen and (min-width: ${breakpoints.tablet}px) {
    width: 50%;
    margin: 0 auto;
    min-width: 30rem;
  }
`;
