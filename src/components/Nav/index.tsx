import NavLayout from "./NavLayout";
import Logo from "../../assets/logo.svg";
import CardHeader from "@/common/CardHeader.tsx";

const Nav = () => {
  return (
    <NavLayout>
      Nav
      {/* Logo */}
      <CardHeader image={Logo} />
      {/* Nav Items */}
    </NavLayout>
  );
};

export default Nav;
