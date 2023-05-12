import { css } from "@emotion/react";
import AsideStatus, { EachNoticeCountProps } from "./AsideStatus";
import AsideYoutube from "./AsideYoutube";
import { FC } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import dayjs from "dayjs";

const getParamList = () => {
  const startOfMonth = dayjs().startOf("month");
  const endOfMonth = dayjs().endOf("month");
  return [
    {
      type: "sh",
      fromStartDate: dayjs().format("YYYY-MM-DD"),
      toStartDate: endOfMonth.format("YYYY-MM-DD"),
    },
    {
      type: "lh",
      fromStartDate: dayjs().format("YYYY-MM-DD"),
      toStartDate: endOfMonth.format("YYYY-MM-DD"),
    },
    {
      type: "sh",
      fromStartDate: startOfMonth.format("YYYY-MM-DD"),
      toStartDate: dayjs().subtract(1, "day").format("YYYY-MM-DD"),
      isReceiving: true,
    },
    {
      type: "lh",
      fromStartDate: startOfMonth.format("YYYY-MM-DD"),
      toStartDate: dayjs().subtract(1, "day").format("YYYY-MM-DD"),
      isReceiving: true,
    },
  ];
};

const Aside: FC = () => {
  const { data: youtubeList, isLoading } = useQuery({
    queryKey: ["youtube"],
    queryFn: () => axios.get("/api/housing/youtube").then((res) => res.data),
  });

  const { data: thisMonthNoticesCount } = useQuery({
    queryKey: ["subscriptionCount"],
    queryFn: async () => {
      const paramList = getParamList();
      const requestList = paramList.map((params) => {
        return axios
          .get("/api/housing/subscription", {
            params,
          })
          .then((res) => {
            return {
              type: params.type,
              total: Number(res.data.total),
              error: null,
            };
          })
          .catch((error) => {
            return Promise.resolve({
              type: params.type,
              total: 0,
              error: error.message,
            });
          });
      });
      const responseList = await Promise.allSettled(requestList);
      const result = responseList.map((response) => {
        if (response.status === "fulfilled") {
          const {
            value: { type, total },
          } = response;
          return {
            type,
            count: total,
          };
        } else {
          return null;
        }
      });
      return Object.entries(
        result.reduce((acc, cur) => {
          if (cur) acc[cur.type] = (acc[cur.type] ?? 0) + cur.count;
          return acc;
        }, {} as Record<string, number>)
      ).map(([type, count]) => ({ type, count }));
    },
  });

  return (
    <div
      css={css`
        display: grid;
        grid-template-rows: 124px 350px;
        gap: 24px;
        margin-left: 28px;
      `}
    >
      {/* Status */}
      <AsideStatus thisMonthNoticesCount={thisMonthNoticesCount} />
      {/* Youtube */}
      <AsideYoutube youtubeList={youtubeList} isLoading={isLoading} />
    </div>
  );
};

export default Aside;
