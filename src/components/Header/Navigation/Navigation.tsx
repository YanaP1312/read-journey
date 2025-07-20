import { NavLink } from "react-router-dom";
import clsx from "clsx";

const buildLinkClass = ({ isActive }: { isActive: boolean }) => {
  return clsx("nav-link", { active: isActive });
};

const Navigation = () => {
  return (
    <nav>
      <NavLink to="/recommended" className={buildLinkClass}>
        Home
      </NavLink>
      <NavLink to="/library" className={buildLinkClass}>
        My library
      </NavLink>
    </nav>
  );
};

export default Navigation;
