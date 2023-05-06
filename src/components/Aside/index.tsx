import { css } from "@emotion/react";
import AsideStatus, { EachNoticeCountProps } from "./AsideStatus";
import AsideYoutube from "./AsideYoutube";
import { FC } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import dayjs from "dayjs";

const Aside: FC = () => {
  const { data: youtubeList, isLoading } = useQuery({
    queryKey: ["youtube"],
    queryFn: () => axios.get("/api/housing/youtube").then((res) => res.data),
  });

  const { data: thisMonthNoticesCount } = useQuery<Array<EachNoticeCountProps>>(
    {
      queryKey: ["subscription"],
      queryFn: async () => {
        const endOfMonth = dayjs().endOf("month");
        const requests = ["sh", "lh"].map((type) => {
          return axios
            .get("/api/housing/subscription", {
              params: {
                type,
                fromStartDate: dayjs().format("YYYY-MM-DD"),
                toStartDate: endOfMonth.format("YYYY-MM-DD"),
              },
            })
            .then((res) => res.data)
            .catch((error) => {
              return Promise.resolve({
                total: 0,
                error: error.message,
              });
            });
        });
        const response = await Promise.allSettled(requests);
        const result = response.map((response, i) => {
          if (response.status === "fulfilled") {
            const type = ["sh", "lh"][i];
            const { total } = response.value;
            return {
              type,
              count: total,
            };
          } else {
            const type = ["sh", "lh"][i];
            return {
              type,
              count: 0,
            };
          }
        });
        return result;
      },
    }
  );

  return (
    <div
      css={css`
        display: grid;
        /* grid-template-rows: repeat(2, 1fr 3fr); */
        grid-template-rows: 124px 350px;
        gap: 24px;
        /* margin-top: 28px; */
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
