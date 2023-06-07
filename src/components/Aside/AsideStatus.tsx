import {
  AgencyImage,
  CardHeaderContainer,
} from '@/components/common/NoticeCard/NoticeCardHeader';
import { CARD_HEADER_IMAGES } from '@/constants/card-header-image-src';
import { breakpoints } from '@/styles/media';
import styled from '@emotion/styled';
import { Baloo_2 } from '@next/font/google';
import { FC, ReactNode } from 'react';
import { FaRegSadTear as ReactIconsSad } from 'react-icons/fa';

import AsideLayout from './AsideLayout';

export interface EachNoticeCountProps {
  type: string;
  count: number;
}

interface AsiedeStatusProps {
  thisMonthNoticesCount?: Array<EachNoticeCountProps>;
  title?: string;
  svg?: ReactNode;
}

const baloo2 = Baloo_2({
  weight: ['500', '600', '700'],
  subsets: ['latin'],
});
const AsideStatus: FC<AsiedeStatusProps> = ({
  title = '이번달 신청가능 공고 현황',
  thisMonthNoticesCount,
}) => {
  const thisMonthShNoticesCount = thisMonthNoticesCount?.find(
    (item) => item.type === 'sh',
  )?.count;
  const thisMonthLhNoticesCount = thisMonthNoticesCount?.find(
    (item) => item.type === 'lh',
  )?.count;

  return (
    <AsideLayout>
      <StyledAsideHeader>{title}</StyledAsideHeader>
      <ResposiveRelativeStatus>
        {/* SH status */}
        <CardHeaderContainer>
          <AgencyImage src={CARD_HEADER_IMAGES.SH} />
          {thisMonthShNoticesCount && thisMonthShNoticesCount !== 0 ? (
            <StatusCount className={`${baloo2.className}`}>
              {`+${thisMonthShNoticesCount}`}
            </StatusCount>
          ) : (
            <NoNoticeFound />
          )}
        </CardHeaderContainer>
        {/* LH status */}
        <CardHeaderContainer>
          <AgencyImage src={CARD_HEADER_IMAGES.LH} />
          {thisMonthLhNoticesCount && thisMonthLhNoticesCount !== 0 ? (
            <StatusCount className={`${baloo2.className}`}>
              {`+${thisMonthLhNoticesCount}`}
            </StatusCount>
          ) : (
            <NoNoticeFound />
          )}
        </CardHeaderContainer>
      </ResposiveRelativeStatus>
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
  font-size: 44px;
`;

const NoNoticeFound = styled(ReactIconsSad)`
  width: 40px;
  height: 40px;
  color: #29a19c;
`;

const ResposiveRelativeStatus = styled.div`
  @media screen and (max-width: ${breakpoints.laptop}px) {
    /* display: none; */
    & > div > span {
      font-size: 34px;
    }
  }

  @media screen and (min-width: ${breakpoints.laptop}px) {
    display: flex;
    gap: 14px;
  }
`;
