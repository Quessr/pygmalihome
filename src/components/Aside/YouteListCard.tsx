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
      <a href={youtubeInfo?.url} target="_blank">
        <YoutubeThumbnail src={youtubeInfo?.thumbnail} />
      </a>

      <a href={youtubeInfo?.url} target="_blank">
        <Title>{youtubeInfo && youtubeInfo.name}</Title>
      </a>
    </YoutubeCardContainer>
  );
};

export default YoutubeListCard;
