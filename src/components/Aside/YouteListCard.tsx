import {
  CardHeaderContainer as YoutubeCardContainer,
  AgencyImage as YoutubeThumbnail,
  Title,
  CardHeaderProps,
} from "@/common/CardHeader.tsx";
import { EachYoutubeProps } from ".";
import { FC } from "react";

interface YoutubeListCardProps extends Pick<CardHeaderProps, "color"> {
  youtubeInfo?: EachYoutubeProps;
}

const YoutubeListCard: FC<YoutubeListCardProps> = ({ youtubeInfo }) => {
  return (
    <YoutubeCardContainer>
      <YoutubeThumbnail src={youtubeInfo?.thumbnail} />
      <Title>{youtubeInfo && youtubeInfo.name}</Title>
    </YoutubeCardContainer>
  );
};

export default YoutubeListCard;
