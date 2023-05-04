import {
  CardHeaderContainer as YoutubeCardContainer,
  AgencyImage as YoutubeThumbnail,
  Title,
} from "@/components/Feed/FeedCardHeader.tsx";
import { FC, ReactNode } from "react";
import { EachYoutubeProps } from "./AsideYoutube";

interface YoutubeBodyListItemProps extends EachYoutubeProps {
  icon?: ReactNode;
}

const YoutubeBodyListItem: FC<YoutubeBodyListItemProps> = ({
  url,
  thumbnail,
  icon,
  name,
}) => {
  return (
    <a href={url} target="_blank">
      <YoutubeCardContainer>
        {thumbnail ? <YoutubeThumbnail src={thumbnail} /> : icon}
        <Title>{name}</Title>
      </YoutubeCardContainer>
    </a>
  );
};

export default YoutubeBodyListItem;
