import FeedCardList, { FeedCardProps } from "@/components/Feed/FeedCardList";
import axios from "axios";
import dayjs from "dayjs";
import { InferGetStaticPropsType } from "next";

export async function getStaticProps() {
  const res = await axios.get(
    "https://pygmalihome-backend.vercel.app/api/housing/subscription",
    {
      params: { limit: 20 },
    }
  );
  const pastNotice: Array<FeedCardProps> = res.data.data.filter(
    (item: FeedCardProps) => {
      return (
        item.endDate !== undefined &&
        item.endDate < dayjs().format("YYYY-MM-DD")
      );
    }
  );

  return {
    props: {
      pastNotice,
    },
    revalidate: 10, // In seconds
  };
}

const PastNoticePage = ({
  pastNotice,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <FeedCardList
        title="신청 기한이 지난 공고 입니다!"
        cardList={pastNotice}
      />
    </div>
  );
};

export default PastNoticePage;
