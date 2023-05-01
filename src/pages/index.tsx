import Aside from "@/components/Aside";
import Feed from "@/components/Feed";
import Nav from "@/components/Nav";
import { css } from "@emotion/react";
import axios from "axios";
import { InferGetStaticPropsType } from "next";
import { Inter } from "next/font/google";
import { FeedCardProps } from "@/components/Feed/FeedCardList";

const inter = Inter({ subsets: ["latin"] });

export async function getStaticProps() {
  const res = await axios.get(
    "http://192.168.0.6:5000/api/housing/subscription",
    {
      params: { limit: 20 },
    }
  );
  const subscriptionPeriodPosts: Array<FeedCardProps> | null =
    res.data?.data?.filter((item: FeedCardProps) => item.isReceiving) ?? null;
  const within2WeeksPosts: Array<FeedCardProps> | null =
    res.data?.data?.filter((item: FeedCardProps) => !item.isReceiving) ?? null;

  return {
    props: {
      subscriptionPeriodPosts,
      within2WeeksPosts,
    },
    revalidate: 10, // In seconds
  };
}

export default function Home({
  subscriptionPeriodPosts,
  within2WeeksPosts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
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
          subscriptionPeriodPosts={subscriptionPeriodPosts}
          within2WeeksPosts={within2WeeksPosts}
        />
        {/* aside */}
        <Aside />
        {/* announcement status */}
        {/* youtube */}
      </div>
    </main>
  );
}
