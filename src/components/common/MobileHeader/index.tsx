import NavListItem from '@/components/Nav/NavListItem';
import { NAV_LIST, RESPONSIVE_NAV_LIST } from '@/constants/nav-list';
import { breakpoints } from '@/styles/media';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { East_Sea_Dokdo } from '@next/font/google';
import Link from 'next/link';

const eastSeaDokdo = East_Sea_Dokdo({
  weight: ['400'],
  subsets: ['latin'],
});
const MobileHeader = () => {
  return (
    <StyledHeader className="mobileHeader">
      {/* 모바일 헤더 로고 */}
      <StyledNavList>
        {NAV_LIST.map(
          ({ category, link, icon, title }) =>
            category === 'logo' && (
              <Link href={link ?? '/'} key={category}>
                <StyledLogo>
                  {icon}
                  {title}
                </StyledLogo>
              </Link>
            ),
        )}
      </StyledNavList>

      <span className={`${eastSeaDokdo.className}`}>
        간절히 원하면 이루어진다
      </span>
    </StyledHeader>
  );
};

export default MobileHeader;

const StyledHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  align-items: center;
  min-height: 76px;
  background-color: #181820;
  border: #181820 1px solid;
  border-radius: 25px 25px 0 0;
  color: rgba(225, 225, 225, 0.4);
  padding: 16px;
  font-size: 20px;
  z-index: 1;
  font-weight: 600;

  & > span {
    display: none;
  }

  @media screen and (min-width: ${breakpoints.laptop}px) {
    justify-content: flex-end;
  }
`;

const StyledNavList = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
`;

const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
