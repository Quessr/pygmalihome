import { EachYoutubeProps } from "@/components/Aside";
import { CARD_HEADER_IMAGES } from "@/constants/card-header-image-src";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { FC, ReactNode } from "react";

export interface CardHeaderProps {
  image?: string;
  category?: string;
  type?: string;
  color?: "primary" | "secondary";
  logo?: ReactNode;
}

const CardHeader: FC<CardHeaderProps> = ({
  category,
  type,
  color = "secondary",
  logo,
}) => {
  return (
    <CardHeaderContainer>
      {type ? (
        type === "sh" ? (
          <AgencyImage src={CARD_HEADER_IMAGES.SH} />
        ) : (
          <AgencyImage src={CARD_HEADER_IMAGES.LH} />
        )
      ) : null}
      {logo && logo}
      <Title color={color}>{category && category}</Title>
    </CardHeaderContainer>
  );
};

export default CardHeader;

export const CardHeaderContainer = styled.div`
  display: flex;
  column-gap: 10px;
  align-items: center;
`;

export const AgencyImage = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  /* background-color: skyblue; */
  border-radius: 7.5rem;
`;

export const Title = styled.h3<Pick<CardHeaderProps, "color">>`
  color: ${(props) => (props.color === "primary" ? "#29A19C" : "#ffff")};
  display: flex;
  align-items: center;
`;
