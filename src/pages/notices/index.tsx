import CardList from "@/common/CardList";
import { FeedCardProps } from "@/components/Feed/FeedCardList";
import axios from "axios";
import dayjs from "dayjs";
import { InferGetStaticPropsType } from "next";
import { AiOutlineSmile } from "react-icons/ai";

export async function getStaticProps() {
  const res = await axios.get(
    "https://pygmalihome-backend.vercel.app/api/housing/subscription",
    {
      params: { limit: 20 },
    }
  );

  const allNotice: Array<FeedCardProps> =
    res.data.data.filter(
      (item: FeedCardProps) => item.startDate > dayjs().format("YYYY-MM-DD")
    ) ?? null;

  return {
    props: {
      allNotice,
    },
    revalidate: 10, // In seconds
  };
}

const AllNoticePage = ({
  allNotice,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log("allNotice", allNotice);
  return (
    <CardList
      title="오늘 기준, 신청 가능한 전체 공고 입니다."
      cardList={allNotice}
      icon={<AiOutlineSmile />}
    />
  );
};

export default AllNoticePage;
