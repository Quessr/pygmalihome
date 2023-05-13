import { CARD_HEADER_IMAGES } from "@/constants/card-header-image-src";
import Logo from "@/assets/logo.svg";
import styled from "@emotion/styled";
import { FC } from "react";
import { css } from "@emotion/react";

export interface CardHeaderProps {
  image?: string;
  category?: string;
  type?: string;
  color?: "primary" | "secondary";
}

const CardHeader: FC<CardHeaderProps> = ({
  category,
  type,
  color = "secondary",
}) => {
  return (
    <CardHeaderContainer>
      <div
        css={css`
          min-width: 40px;
          min-height: 40px;
          width: 40px;
          height: 40px;
        `}
      >
        {type === "sh" && <AgencyImage src={CARD_HEADER_IMAGES.SH} />}
        {type === "lh" && <AgencyImage src={CARD_HEADER_IMAGES.LH} />}
        {type === "logo" && (
          <Logo
            width="100%"
            height="100%"
            css={css`
              scale: 1.3;
            `}
          />
        )}
      </div>

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
