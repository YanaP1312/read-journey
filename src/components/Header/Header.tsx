import { Link } from "react-router-dom";
import LogOutBtn from "./LogOutBtn/LogOutBtn";
import { BsListNested } from "react-icons/bs";
import MobMenu from "./MobMenu/MobMenu";
import { useEffect, useState } from "react";
import UserBar from "./UserBar/UserBar";
import UserNav from "./UserNav/UserNav";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return (
    <header>
      <Link to="/recommended">
        <svg width="42" height="17">
          <use href="../../../public/sprite.svg#icon-favicon" />
        </svg>
        <span>READ JOURNEY</span>
      </Link>
      <UserNav />
      <UserBar />
      <LogOutBtn />
      <button type="button" onClick={() => setIsOpen(true)}>
        <BsListNested />
      </button>
      {isOpen && <MobMenu onClose={() => setIsOpen(false)} />}
    </header>
  );
};

export default Header;
