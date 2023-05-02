import { FC, ReactNode } from "react";
import AsideLayout from "./AsideLayout";
import styled from "@emotion/styled";
import { Baloo_2 } from "@next/font/google";
import { css } from "@emotion/react";
import { AgencyImage, CardHeaderContainer } from "@/common/CardHeader.tsx";
import { AsideProps } from ".";
import { FaRegSadTear as ReactIconsSad } from "react-icons/fa";
import dayjs from "dayjs";

interface AsiedeStatusProps extends AsideProps {
  title?: string;
  svg?: ReactNode;
}

const baloo2 = Baloo_2({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
});
const AsideStatus: FC<AsiedeStatusProps> = ({
  title = "이번달 신청가능 공고 현황",
  thisMonthNoticesCount,
}) => {
  const thisMonthShNoticesCount = thisMonthNoticesCount?.find(
    (item) => item.type === "sh"
  )?.count;
  const thisMonthLhNoticesCount = thisMonthNoticesCount?.find(
    (item) => item.type === "lh"
  )?.count;
  return (
    <AsideLayout>
      <StyledAsideHeader>{title}</StyledAsideHeader>
      <div
        css={css`
          display: flex;
          gap: 14px;
        `}
      >
        {/* SH status */}
        <CardHeaderContainer>
          <AgencyImage />
          {thisMonthShNoticesCount !== 0 ? (
            <StatusCount className={`${baloo2.className}`}>
              {`+${thisMonthShNoticesCount}`}
            </StatusCount>
          ) : (
            <NoNoticeFound />
          )}
        </CardHeaderContainer>
        {/* LH status */}
        <CardHeaderContainer>
          <AgencyImage />
          {thisMonthLhNoticesCount !== 0 ? (
            <StatusCount className={`${baloo2.className}`}>
              {" "}
              {`+${thisMonthLhNoticesCount}`}
            </StatusCount>
          ) : (
            <NoNoticeFound />
          )}
        </CardHeaderContainer>
      </div>
    </AsideLayout>
  );
};

export default AsideStatus;

export const StyledAsideHeader = styled.h4`
  font-size: 14px;
  color: rgba(225, 225, 225, 0.7);
`;

const StatusCount = styled.span`
  font-weight: 500;
  color: #29a19c;
  font-size: 45px;
`;

const NoNoticeFound = styled(ReactIconsSad)`
  width: 40px;
  height: 40px;
  color: #29a19c;
`;
