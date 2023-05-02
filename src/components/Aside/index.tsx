import { css } from "@emotion/react";
import AsideStatus from "./AsideStatus";
import AsideYoutube from "./AsideYoutube";
import { FC } from "react";

export interface EachNoticeCountProps {
  type: string;
  count: number;
}

export interface EachYoutubeProps {
  id?: string;
  name?: string;
  thumbnail?: string;
  url?: string;
}
export interface AsideProps {
  thisMonthNoticesCount?: Array<EachNoticeCountProps>;
  youtubeList?: Array<EachYoutubeProps>;
}

const Aside: FC<AsideProps> = ({
  thisMonthNoticesCount,
  youtubeList,
}: AsideProps) => {
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
      <AsideYoutube youtubeList={youtubeList} />
    </div>
  );
};

export default Aside;
