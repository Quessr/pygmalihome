import CardList from '@/components/common/CardList';
import { NextSeo } from 'next-seo';

const NoticeInformationPage = () => {
  return (
    <div>
      <NextSeo title="공급 계획 정보 모아보기" />
      <CardList title="서비스 준비 중 입니다." />
    </div>
  );
};

export default NoticeInformationPage;
