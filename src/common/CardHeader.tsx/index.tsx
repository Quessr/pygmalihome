import styled from "@emotion/styled";
import { FC } from "react";

interface CardHeaderProps {
  image?: string;
  title?: string;
  color?: "primary" | "secondary";
}

const CardHeader: FC<CardHeaderProps> = ({
  image,
  title = "매입임대",
  color = "secondary",
}) => {
  return (
    <CardHeaderContainer>
      <AgencyImage />
      <Title color={color}>{title}</Title>
    </CardHeaderContainer>
  );
};

export default CardHeader;

const CardHeaderContainer = styled.div`
  display: flex;
  column-gap: 10px;
`;

const AgencyImage = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  background-color: skyblue;
  border-radius: 7.5rem;
`;

const Title = styled.h3<Pick<CardHeaderProps, "color">>`
  color: ${(props) => (props.color === "primary" ? "#29A19C" : "#ffff")};
  display: flex;
  align-items: center;
`;
