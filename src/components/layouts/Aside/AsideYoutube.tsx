import YoutubeChannelList from '@/components/common/YoutubeChannelList';
import styled from '@emotion/styled';
import { FC } from 'react';
import { Triangle as Loading } from 'react-loader-spinner';

import { AsideLayout } from './AsideLayout';
import { StyledAsideHeader } from './AsideStatus';

export interface EachYoutubeProps {
  id?: string;
  name?: string;
  thumbnail?: string;
  url?: string;
}
export interface AsideYoutubeProps {
  youtubeList?: Array<EachYoutubeProps>;
  isLoading?: boolean;
}

const AsideYoutube: FC<AsideYoutubeProps> = ({ youtubeList, isLoading }) => {
  return (
    <AsideLayout>
      {/* Header */}
      <StyledAsideHeader>Youtube</StyledAsideHeader>

      {/* Body */}
      {isLoading ? (
        <LoadingContainer>
          <Loading color="#29A19C" height="40px" width="40px" />
        </LoadingContainer>
      ) : (
        <StyledAsideYoutubeBody>
          {youtubeList &&
            youtubeList.map(({ id, ...rest }) => (
              <YoutubeChannelList key={id} {...rest} />
            ))}
        </StyledAsideYoutubeBody>
      )}
    </AsideLayout>
  );
};

export default AsideYoutube;

const StyledAsideYoutubeBody = styled.div`
  display: grid;
  gap: 12px;
  margin-top: 12px;
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80%;
`;
