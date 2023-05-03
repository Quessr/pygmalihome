import NavLayout from "./NavLayout";

import NavListItem from "./NavListItem";
import Link from "next/link";
import { NAV_LIST } from "@/constants/nav-list";

const Nav = () => {
  return (
    <NavLayout>
      {/* Logo */}
      {NAV_LIST.map(({ category, link, ...props }) => (
        <Link href={link ?? "/"} key={category}>
          <NavListItem {...props} />
        </Link>
      ))}
      {/* Nav Items */}
    </NavLayout>
  );
};

export default Nav;
