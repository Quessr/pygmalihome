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

  return {
    props: {
      subscriptionPeriodNotices,
      within2WeeksNotices,
    },
    revalidate: 10, // In seconds
  };
}

export default function Home({
  subscriptionPeriodNotices,
  within2WeeksNotices,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between ${inter.className}`}
    >
      <div>
        {/* header */}

        {/* nav */}
        {/* <Nav /> */}
        {/* feed */}
        <Feed
          subscriptionPeriodNotices={subscriptionPeriodNotices}
          within2WeeksNotices={within2WeeksNotices}
        />
        {/* aside */}
        {/* <Aside /> */}
      </div>
    </main>
  );
}
