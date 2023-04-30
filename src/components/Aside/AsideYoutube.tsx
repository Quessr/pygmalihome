import CardHeader from "@/common/CardHeader.tsx";
import AsideLayout from "./AsideLayout";
import { StyledAsideHeader } from "./AsideStatus";
import { css } from "@emotion/react";

const AsideYoutube = () => {
  return (
    <AsideLayout>
      <StyledAsideHeader>Youtube</StyledAsideHeader>
      <div
        css={css`
          display: grid;
          gap: 12px;
          margin-top: 12px;
        `}
      >
        <CardHeader title="LH 임대 알리미" />
        <CardHeader title="아영이네 행복주택" />
        <CardHeader title="LH 집소식" />
      </div>
    </AsideLayout>
  );
};

export default AsideYoutube;
