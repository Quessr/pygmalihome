import styled from '@emotion/styled';
import { BsExclamationLg } from 'react-icons/bs';
import { TbBellFilled } from 'react-icons/tb';

const AlertBellIcon = () => {
  return (
    <AlertBell>
      <TbBellFilled />
      <BsExclamationLg />
    </AlertBell>
  );
};

export default AlertBellIcon;

const AlertBell = styled.div`
  position: relative;
  margin-right: 5px;
  color: #f05454;
  width: 20px;
  height: 20px;

  & > svg:first-of-type {
    width: 100%;
    height: 100%;
  }

  & > svg:last-of-type {
    position: absolute;
    top: 2px;
    right: -3.5px;
    width: 12px;
    height: 12px;
  }
`;
