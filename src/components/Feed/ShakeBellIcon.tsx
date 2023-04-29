import styled from "@emotion/styled";
import { TbBellRingingFilled } from "react-icons/tb";

const ShackeBellIcon = () => {
  return (
    <ShakeBell>
      <TbBellRingingFilled />
    </ShakeBell>
  );
};

export default ShackeBellIcon;

const ShakeBell = styled.div`
  color: #ecca75;
  margin-right: 5px;
  width: 20px;
  height: 20px;

  & > svg:first-of-type {
    width: 100%;
    height: 100%;
  }
`;
