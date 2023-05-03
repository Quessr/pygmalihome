import CardHeader from "@/components/Feed/FeedCardHeader.tsx";
import AsideLayout from "./AsideLayout";
import { StyledAsideHeader } from "./AsideStatus";
import { AsideProps } from ".";
import { FC } from "react";
import styled from "@emotion/styled";
import SectionBodyListItem from "@/common/SectionBodyListItem";

export type AsideYoutubeProps = Pick<AsideProps, "youtubeList">;

const AsideYoutube: FC<AsideYoutubeProps> = ({ youtubeList }) => {
  return (
    <AsideLayout>
      {/* Header */}
      <StyledAsideHeader>Youtube</StyledAsideHeader>

      {/* Body */}
      <StyledAsideYoutubeBody>
        {youtubeList &&
          youtubeList.map(({ id, ...rest }) => (
            <SectionBodyListItem key={id} {...rest} />
          ))}
      </StyledAsideYoutubeBody>
    </AsideLayout>
  );
};

export default AsideYoutube;

const StyledAsideYoutubeBody = styled.div`
  display: grid;
  gap: 12px;
  margin-top: 12px;
`;
