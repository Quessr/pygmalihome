import NavLayout from "./NavLayout";
import Logo from "../../assets/logo.svg";
import { BsClipboardCheck } from "react-icons/bs";
import { MdContentPasteGo } from "react-icons/md";
import { RiHomeSmileLine } from "react-icons/ri";

import NavListItem, { NavListItemProps } from "./NavListItem";
import { css } from "@emotion/react";

const iconStyle = css`
  color: #29a19c;
  width: 32px;
  height: 32px;
  margin: 8px;
`;

const navList: Array<NavListItemProps> = [
  { category: "logo", icon: <Logo />, title: "PYGMALIHOME" },
  {
    category: "allNotice",
    icon: <BsClipboardCheck css={iconStyle} />,
    title: "신청 가능한 전체 공고 보기",
  },
  {
    category: "postNotice",
    icon: <MdContentPasteGo css={iconStyle} />,
    title: "지난 공고 모아보기",
  },
  {
    category: "information",
    icon: <RiHomeSmileLine css={iconStyle} />,
    title: "공급 계획 정보 모아보기",
  },
];

const Nav = () => {
  return (
    <NavLayout>
      {/* Logo */}
      {navList.map(({ category, ...props }) => (
        <NavListItem key={category} {...props} />
      ))}
      {/* Nav Items */}
    </NavLayout>
  );
};

export default Nav;
