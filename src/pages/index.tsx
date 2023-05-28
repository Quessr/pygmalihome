import Feed from "@/components/Feed";
import Nav from "@/components/Nav";
import axios from "axios";
import { InferGetStaticPropsType } from "next";
import { Inter } from "next/font/google";
import { FeedCardProps } from "@/components/Feed/FeedCardList";
import Head from "next/head";
import dayjs from "dayjs";
import { NextSeo } from "next-seo";

const inter = Inter({ subsets: ["latin"] });

export async function getStaticProps() {
  const subscriptionPeriodNotices = await axios
    .get("https://pygmalihome-backend.vercel.app/api/housing/subscription", {
      params: { limit: 20, isReceiving: true },
    })
    .then((res) => res.data.data);

  const within2WeeksNotices = await axios
    .get("https://pygmalihome-backend.vercel.app/api/housing/subscription", {
      params: {
        limit: 20,
        isReceiving: false,
        fromStartDate: dayjs().format("YYYY-MM-DD"),
        toStartDate: dayjs().add(2, "weeks").format("YYYY-MM-DD"),
      },
    })
    .then((res) => res.data.data);

  return {
    props: {
      subscriptionPeriodNotices,
      within2WeeksNotices,
    },
    revalidate: 10,
  };
}

export default function Home({
  subscriptionPeriodNotices,
  within2WeeksNotices,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <NextSeo title="당신의 집은 이루어 진다" />

      <div className={inter.className}>
        <Feed
          subscriptionPeriodNotices={subscriptionPeriodNotices}
          within2WeeksNotices={within2WeeksNotices}
        />
      </div>
    </>
  );
}
