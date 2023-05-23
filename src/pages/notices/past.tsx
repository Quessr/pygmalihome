import CardList from "@/common/CardList";
import FeedCardList, { FeedCardProps } from "@/components/Feed/FeedCardList";
import axios from "axios";
import dayjs from "dayjs";
import { InferGetStaticPropsType } from "next";

export async function getStaticProps() {
  const lastMonthDate = dayjs().subtract(1, "month");
  const res = await axios.get(
    "https://pygmalihome-backend.vercel.app/api/housing/subscription",
    {
      params: {
        limit: 20,
        fromStartDate: lastMonthDate.format("YYYY-MM-DD"),
        isReceving: false,
      },
    }
  );

  return {
    props: {
      pastNotice: res.data.data,
    },
    revalidate: 10, // In seconds
  };
}

const PastNoticePage = ({
  pastNotice,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log("pastNotice", pastNotice);
  return (
    <div>
      <CardList title="신청 기한이 지난 공고 입니다." cardList={pastNotice} />
    </div>
  );
};

export default PastNoticePage;
