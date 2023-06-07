import NavListItem from '@/components/Nav/NavListItem';
import { RESPONSIVE_NAV_LIST } from '@/constants/nav-list';
import { breakpoints } from '@/styles/media';
import styled from '@emotion/styled';
import { East_Sea_Dokdo } from '@next/font/google';
import Link from 'next/link';

const eastSeaDokdo = East_Sea_Dokdo({
  weight: ['400'],
  subsets: ['latin'],
});
const Header = () => {
  return (
    <div>
      <StyledHeader>
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
    </div>
  );
};

export default Header;

const StyledHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  min-height: 76px;
  background-color: rgba(225, 225, 225, 0.02);
  border: rgba(225, 225, 225, 0.05) 1px solid;
  color: rgba(225, 225, 225, 0.4);
  padding: 16px;
  font-size: 20px;
  @media screen and (max-width: ${breakpoints.laptop}px) {
    justify-content: space-between;
    padding: 0 28px;
  }
`;

const StyledNavList = styled.div`
  @media screen and (max-width: ${breakpoints.laptop}px) {
    display: flex;
    width: 530px;
  }

  @media screen and (min-width: ${breakpoints.laptop}px) {
    display: none;
  }
`;
