import CardList from "@/common/CardList";
import { FeedCardProps } from "@/components/Feed/FeedCardList";
import axios from "axios";
import { InferGetStaticPropsType } from "next";

export async function getStaticProps() {
  const res = await axios.get(
    "https://pygmalihome-backend.vercel.app/api/housing/subscription",
    {
      params: { limit: 20 },
    }
  );

  const allNotice: Array<FeedCardProps> = res.data.data;

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
  return <CardList title="전체 공고 입니다." cardList={allNotice} />;
};

export default AllNoticePage;
