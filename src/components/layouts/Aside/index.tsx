import { getParamListForThisMonthNoticesCounts } from '@/utils/getParamListForThisMonthNoticesCounts';
import { css } from '@emotion/react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { FC } from 'react';

import AsideStatus from './AsideStatus';
import AsideYoutube from './AsideYoutube';

const Aside: FC = () => {
  const { data: youtubeList, isLoading } = useQuery({
    queryKey: ['youtube'],
    queryFn: () => axios.get('/api/housing/youtube').then((res) => res.data),
  });

  const { data: thisMonthNoticesCount } = useQuery({
    queryKey: ['subscriptionCount'],
    queryFn: async () => {
      const paramList = getParamListForThisMonthNoticesCounts();
      const requestList = paramList.map((params) => {
        return axios
          .get('/api/housing/subscription', {
            params,
          })
          .then((res) => {
            return {
              type: params.type,
              total: Number(res.data.total),
            };
          })
          .catch((error) => {
            return {
              type: params.type,
              total: 0,
              error: error,
            };
          });
      });
      const responseList = await Promise.allSettled(requestList);
      const result = responseList.map((response) => {
        if (response.status === 'fulfilled') {
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
        }, {} as Record<string, number>),
      ).map(([type, count]) => ({ type, count }));
    },
  });

  return (
    <div
      className="aside"
      css={css`
        margin-left: 28px;
        & > div + div {
          margin-top: 24px;
        }
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
