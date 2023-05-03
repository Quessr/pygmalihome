import { FC, ReactNode } from "react";
import {
  CardHeaderContainer,
  AgencyImage as NavIcon,
  Title,
} from "@/components/Feed/FeedCardHeader.tsx";
import styled from "@emotion/styled";

export interface NavListItemProps {
  category?: string;
  icon: ReactNode;
  title: string;
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
