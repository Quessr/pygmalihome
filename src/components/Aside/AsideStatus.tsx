import { FC, ReactNode } from "react";
import AsideLayout from "./AsideLayout";
import styled from "@emotion/styled";
import { Baloo_2 } from "@next/font/google";
import { css } from "@emotion/react";
import { AgencyImage, CardHeaderContainer } from "@/common/CardHeader.tsx";

interface AsiedeStatusProps {
  title?: string;
  svg?: ReactNode;
}

const baloo2 = Baloo_2({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
});
const AsideStatus: FC<AsiedeStatusProps> = ({
  title = "이번달 신청가능 공고 현황",
}) => {
  return (
    <AsideLayout>
      <StyledAsideHeader>{title}</StyledAsideHeader>
      <div
        css={css`
          display: flex;
          gap: 14px;
        `}
      >
        {/* LH status */}
        <CardHeaderContainer>
          <AgencyImage />
          <StatusCount className={`${baloo2.className}`}>+2</StatusCount>
        </CardHeaderContainer>
        {/* SH status */}
        <CardHeaderContainer>
          <AgencyImage />
          <StatusCount className={`${baloo2.className}`}>+1</StatusCount>
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
