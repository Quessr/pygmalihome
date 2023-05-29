import styled from '@emotion/styled';
import { East_Sea_Dokdo } from '@next/font/google';

const eastSeaDokdo = East_Sea_Dokdo({
  weight: ['400'],
  subsets: ['latin'],
});
const Header = () => {
  return (
    <StyledHeader className={`${eastSeaDokdo.className}`}>
      간절히 원하면 이루어진다
    </StyledHeader>
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
`;
