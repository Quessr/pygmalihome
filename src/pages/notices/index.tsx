import CardList from '@/components/common/CardList';
import { HOUR } from '@/constants/revalidate-time';
import axios from 'axios';
import dayjs from 'dayjs';
import { InferGetStaticPropsType } from 'next';
import { NextSeo } from 'next-seo';
import { AiOutlineSmile } from 'react-icons/ai';

export async function getStaticProps() {
  const allNotice = await axios
    .get('https://pygmalihome-backend.vercel.app/api/housing/subscription', {
      params: { limit: 100, fromStartDate: dayjs().format('YYYY-MM-DD') },
    })
    .then((res) => res.data.data);

  return {
    props: {
      allNotice,
    },
    revalidate: HOUR,
  };
}

const AllNoticePage = ({
  allNotice,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <NextSeo title="신청 가능한 전체 공고 보기" />
      <CardList
        title="오늘 기준, 신청 가능한 전체 공고 입니다."
        cardList={allNotice}
        icon={<AiOutlineSmile width={30} height={30} />}
      />
    </>
  );
};

export default AllNoticePage;
