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
                limit: 20,
                startDate: dayjs().format("YYYY-MM-DD"),
                endDate: endOfMonth.format("YYYY-MM-DD"),
              },
            })
            .then((res) => res.data);
        });
        const response = await axios.all(requests);
        return response.map((response, i) => {
          const type = ["sh", "lh"][i];
          const { total } = response;
          return {
            type,
            count: total,
          };
        });
      },
    }
  );

  return (
    <div
      css={css`
        display: grid;
        grid-template-rows: repeat(2, 1fr 3fr);
        gap: 24px;
        /* margin-top: 28px; */
        margin-left: 28px;
      `}
    >
      {/* Status */}
      <AsideStatus
        thisMonthNoticesCount={thisMonthNoticesCount}
        isLoading={isLoading}
      />
      {/* Youtube */}
      <AsideYoutube youtubeList={youtubeList} isLoading={isLoading} />
    </div>
  );
};

export default Aside;
