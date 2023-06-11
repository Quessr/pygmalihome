import {
  Title,
  CardHeaderContainer as YoutubeCardContainer,
  AgencyImage as YoutubeThumbnail,
} from '@/components/common/NoticeCard/NoticeCardHeader';
import { EachYoutubeProps } from '@/components/layouts/Aside/AsideYoutube';
import { FC, ReactNode } from 'react';

export interface NavListItemProps {
  logo: {
    icon: ReactNode;
    title: string;
  };
  allNotice: {
    icon: ReactNode;
    title: string;
  };
  pastNotice: {
    icon: ReactNode;
    title: string;
  };
  information: {
    icon: ReactNode;
    title: string;
  };
}

interface SectionBodyListItemProps extends EachYoutubeProps {
  icon?: ReactNode;
}

const SectionBodyListItem: FC<SectionBodyListItemProps> = ({
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

export default SectionBodyListItem;
