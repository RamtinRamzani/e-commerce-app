// import { Link } from "@nextui-org/react";

import NavLink from "../../ui/NavLink";

export default function Page() {
  return (
    <div className="hidden md:block">
      <h2 className="mb-8 text-2xl font-semibold text-neutral-06">Page</h2>

      <div className="flex flex-col gap-4">
        <NavLink to="/">home</NavLink>
        <NavLink to="/shop">shop</NavLink>
        <NavLink to="/product">product</NavLink>
        <NavLink to="/blog">blog</NavLink>
        <NavLink to="/contact">contact us</NavLink>
      </div>
    </div>
  );
}
