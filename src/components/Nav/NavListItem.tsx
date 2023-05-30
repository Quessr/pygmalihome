import {
  CardHeaderContainer,
  AgencyImage as NavIcon,
  Title,
} from '@/components/common/NoticeCard/NoticeCardHeader';
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
  margin: 16px;
`;

const NavListTitle = styled(Title)`
  font-size: 16px;
`;
