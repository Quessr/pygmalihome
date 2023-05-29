import Logo from '@/assets/logo.svg';
import { NavListItemProps } from '@/components/Nav/NavListItem';
import { css } from '@emotion/react';
import { BsClipboardCheck } from 'react-icons/bs';
import { MdContentPasteGo } from 'react-icons/md';
import { RiHomeSmileLine } from 'react-icons/ri';

const iconStyle = css`
  color: #29a19c;
  width: 32px;
  height: 32px;
  margin: 8px;
`;

export const NAV_LIST: Array<NavListItemProps> = [
  {
    category: 'logo',
    icon: (
      <Logo
        css={[
          iconStyle,
          css`
            scale: 1.5;
          `,
        ]}
      />
    ),
    title: 'PYGMALIHOME',
    link: '/',
  },
  {
    category: 'allNotice',
    icon: <BsClipboardCheck css={iconStyle} />,
    title: '신청 가능한 전체 공고 보기',
    link: '/notices',
  },
  {
    category: 'postNotice',
    icon: <MdContentPasteGo css={iconStyle} />,
    title: '지난 공고 모아보기',
    link: '/notices/past',
  },
  // {
  //   category: "information",
  //   icon: <RiHomeSmileLine css={iconStyle} />,
  //   title: "공급 계획 정보 모아보기",
  //   link: "/notices/info",
  // },
];
