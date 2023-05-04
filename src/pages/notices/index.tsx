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
  // const subscriptionPeriodNotices: Array<FeedCardProps> | null =
  //   res.data?.data?.filter((item: FeedCardProps) => item.isReceiving) ?? null;
  // const within2WeeksNotices: Array<FeedCardProps> | null =
  //   res.data?.data?.filter((item: FeedCardProps) => !item.isReceiving) ?? null;
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
  return (
    <div>
      <CardList title="전체 공고 입니다." cardList={allNotice} />
    </div>
  );
};

export default AllNoticePage;