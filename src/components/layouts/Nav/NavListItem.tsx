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
  display: block;
  margin: 0 12px;

  @media screen and (min-width: ${breakpoints.tablet}px) {
    display: flex;
    margin: 16px;
  }
`;

const NavListTitle = styled(Title)`
  font-size: 12px;
  justify-content: center;
  @media screen and (min-width: ${breakpoints.tablet}px) {
    font-size: 16px;
  }
`;
