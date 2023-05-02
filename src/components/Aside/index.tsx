import { css } from "@emotion/react";
import AsideStatus from "./AsideStatus";
import AsideYoutube from "./AsideYoutube";
import { FC } from "react";

export interface EachNoticeCountProps {
  type: string;
  count: number;
}
export interface AsideProps {
  thisMonthNoticesCount?: Array<EachNoticeCountProps>;
}

const Aside: FC<AsideProps> = ({ thisMonthNoticesCount }: AsideProps) => {
  return (
    <div
      css={css`
        display: grid;
        grid-template-rows: repeat(2, 1fr 3fr);
        gap: 24px;
      `}
    >
      {/* Status */}
      <AsideStatus thisMonthNoticesCount={thisMonthNoticesCount} />
      {/* Youtube */}
      <AsideYoutube />
    </div>
  );
};

export default Aside;
