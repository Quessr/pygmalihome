import { RESPONSIVE_NAV_LIST } from '@/constants/nav-list';
import { breakpoints } from '@/styles/media';
import styled from '@emotion/styled';
import { East_Sea_Dokdo } from '@next/font/google';
import Link from 'next/link';

import NavListItem from '../Nav/NavListItem';

const eastSeaDokdo = East_Sea_Dokdo({
  weight: ['400'],
  subsets: ['latin'],
});
const Header = () => {
  return (
    <StyledHeader className="header">
      {/* 모바일 네비게이션 */}
      <StyledNavList>
        {RESPONSIVE_NAV_LIST.map(({ category, link, ...props }) => (
          <Link href={link ?? '/'} key={category}>
            <NavListItem {...props} />
          </Link>
        ))}
      </StyledNavList>

      <span className={`${eastSeaDokdo.className}`}>
        간절히 원하면 이루어진다
      </span>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  align-items: center;
  min-height: 76px;
  background-color: rgba(0, 0, 0);
  border: rgba(225, 225, 225, 0.05) 1px solid;
  border-radius: 25px 25px 0 0;
  color: rgba(225, 225, 225, 0.4);
  padding: 16px;
  font-size: 20px;
  z-index: 1;

  & > span {
    display: none;
  }

  @media screen and (min-width: ${breakpoints.tablet}px) {
    position: relative;
    justify-content: space-between;
    padding: 0 28px;
    background-color: rgba(225, 225, 225, 0.02);
    justify-content: space-between;

    & > span {
      display: block;
    }
  }

  @media screen and (min-width: ${breakpoints.laptop}px) {
    justify-content: flex-end;
  }
`;

const StyledNavList = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;

  @media screen and (min-width: ${breakpoints.tablet}px) {
    justify-content: unset;
    width: 530px;
  }

  @media screen and (min-width: ${breakpoints.laptop}px) {
    display: none;
  }
`;
