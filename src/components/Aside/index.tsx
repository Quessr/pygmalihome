import { css } from "@emotion/react";
import AsideStatus from "./AsideStatus";
import AsideYoutube from "./AsideYoutube";

const Aside = () => {
  return (
    <div
      css={css`
        display: grid;
        grid-template-rows: repeat(2, 1fr 3fr);
        gap: 24px;
      `}
    >
      {/* Status */}
      <AsideStatus />
      {/* Youtube */}
      <AsideYoutube />
    </div>
  );
};

export default Aside;
