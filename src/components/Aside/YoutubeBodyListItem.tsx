import {
  CardHeaderContainer as YoutubeCardContainer,
  AgencyImage as YoutubeThumbnail,
  Title,
  CardHeaderProps,
} from "@/components/Feed/FeedCardHeader.tsx";
import Logo from "@/assets/logo.svg";
import { FC, ReactNode } from "react";
import { EachYoutubeProps } from "@/components/Aside";

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
        {/* <YoutubeThumbnail src="/logo.svg" /> */}
        {/* <Logo /> */}
        <Title>{name}</Title>
      </YoutubeCardContainer>
    </a>
  );
};

export default YoutubeBodyListItem;
