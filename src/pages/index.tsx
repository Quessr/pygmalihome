import Feed from "@/components/Feed";
import Nav from "@/components/Nav";
import { css } from "@emotion/react";
import axios from "axios";
import { InferGetStaticPropsType } from "next";
import { Inter } from "next/font/google";
import { FeedCardProps } from "@/components/Feed/FeedCardList";
import dayjs from "dayjs";
import Aside from "@/components/Aside";

const inter = Inter({ subsets: ["latin"] });

export async function getStaticProps() {
  const thisMonthNoticesCount = await Promise.all(
    ["sh", "lh"].map((type) => {
      const endOfMonth = dayjs().endOf("month");
      return axios
        .get(
          "https://pygmalihome-backend.vercel.app/api/housing/subscription",
          {
            params: {
              type,
              limit: 20,
              startDate: dayjs().format("YYYY-MM-DD"),
              endDate: endOfMonth.format("YYYY-MM-DD"),
            },
          }
        )
        .then((res) => ({ type, count: res.data.total }));
    })
  );

  const res = await axios.get(
    "https://pygmalihome-backend.vercel.app/api/housing/subscription",
    {
      params: { limit: 20 },
    }
  );
  const subscriptionPeriodNotices: Array<FeedCardProps> | null =
    res.data?.data?.filter((item: FeedCardProps) => item.isReceiving) ?? null;
  const within2WeeksNotices: Array<FeedCardProps> | null =
    res.data?.data?.filter((item: FeedCardProps) => !item.isReceiving) ?? null;

  // const youtubeList = await axios
  //   .get("https://pygmalihome-backend.vercel.app/api/housing/youtube")
  //   .then((res) => res.data);

  return {
    props: {
      subscriptionPeriodNotices,
      within2WeeksNotices,
      thisMonthNoticesCount,
      // youtubeList,
    },
    revalidate: 10, // In seconds
  };
}

export default function Home({
  subscriptionPeriodNotices,
  within2WeeksNotices,
  thisMonthNoticesCount,
}: // youtubeList,
InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div
        css={css`
          display: flex;
          gap: 24px;
        `}
      >
        {/* header */}

        {/* nav */}
        <Nav />
        {/* feed */}
        <Feed
          subscriptionPeriodNotices={subscriptionPeriodNotices}
          within2WeeksNotices={within2WeeksNotices}
        />
        {/* aside */}
        <Aside
          thisMonthNoticesCount={thisMonthNoticesCount}
          // youtubeList={youtubeList}
        />
        {/* announcement status */}
        {/* youtube */}
      </div>
    </main>
  );
}
