import Feed from "@/components/Feed";
import Nav from "@/components/Nav";
import axios from "axios";
import { InferGetStaticPropsType } from "next";
import { Inter } from "next/font/google";
import { FeedCardProps } from "@/components/Feed/FeedCardList";
import Head from "next/head";

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
    <>
      <Head>
        <title>메인페이지</title>
      </Head>

      <div className={inter.className}>
        <Feed
          subscriptionPeriodNotices={subscriptionPeriodNotices}
          within2WeeksNotices={within2WeeksNotices}
        />
      </div>
    </>
  );
}
