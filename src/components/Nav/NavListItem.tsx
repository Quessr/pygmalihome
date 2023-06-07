import {
  CardHeaderContainer,
  AgencyImage as NavIcon,
  Title,
} from '@/components/common/NoticeCard/NoticeCardHeader';
import { breakpoints } from '@/styles/media';
import styled from '@emotion/styled';
import { FC, ReactNode } from 'react';

export interface NavListItemProps {
  category?: string;
  icon: ReactNode;
  title: string;
  link?: string;
}

const NavListItem: FC<NavListItemProps> = ({ icon, title }) => {
  return (
    <NavListItemContainer>
      {icon}
      <NavListTitle>{title}</NavListTitle>
    </NavListItemContainer>
  );
};

export default NavListItem;

const NavListItemContainer = styled(CardHeaderContainer)`
  @media screen and (max-width: ${breakpoints.laptop}px) {
    margin: 0 12px;
  }

  @media screen and (min-width: ${breakpoints.laptop}px) {
    margin: 16px;
  }
`;

const NavListTitle = styled(Title)`
  @media screen and (max-width: ${breakpoints.laptop}px) {
    font-size: 16px;
  }

  @media screen and (min-width: ${breakpoints.laptop}px) {
    font-size: 16px;
  }
`;
