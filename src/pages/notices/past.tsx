import FeedCardList, { FeedCardProps } from '@/components/Feed/FeedCardList';
import CardList from '@/components/common/CardList';
import { HOUR } from '@/constants/revalidate-time';
import axios from 'axios';
import dayjs from 'dayjs';
import { InferGetStaticPropsType } from 'next';
import { NextSeo } from 'next-seo';

export async function getStaticProps() {
  const lastMonthDate = dayjs().subtract(1, 'month');
  const res = await axios.get(
    'https://pygmalihome-backend.vercel.app/api/housing/subscription',
    {
      params: {
        limit: 20,
        fromStartDate: lastMonthDate.format('YYYY-MM-DD'),
        isReceving: false,
      },
    },
  );

  return {
    props: {
      pastNotice: res.data.data,
    },
    revalidate: HOUR,
  };
}

const PastNoticePage = ({
  pastNotice,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log('pastNotice', pastNotice);
  return (
    <div>
      <NextSeo title="지난 공고 모아보기" />
      <CardList title="신청 기한이 지난 공고 입니다." cardList={pastNotice} />
    </div>
  );
};

export default PastNoticePage;
