import { Link } from "react-router-dom";
import UserInfo from "./UserInfo/UserInfo";
import Navigation from "./Navigation/Navigation";
import LogOutBtn from "./LogOutBtn/LogOutBtn";
import { BsListNested } from "react-icons/bs";
import MobMenu from "./MobMenu/MobMenu";
import { useEffect, useState } from "react";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsOpen(false);
        }
        document.addEventListener("keydown", handleEsc);
        return ()=>{document.removeEventListener('keydown', handleEsc)}
    }, [])

  return (
    <header>
      <Link to="/recommended">
        <svg width="42" height="17">
          <use href="../../../public/sprite.svg#icon-favicon" />
        </svg>
        <span>READ JOURNEY</span>
      </Link>
      <Navigation />
      <UserInfo />
      <LogOutBtn />
      <button type="button" onClick={() => setIsOpen(true)}>
        <BsListNested />
      </button>
          {isOpen && <MobMenu onClose={() => setIsOpen(false) } />}
    </header>
  );
};

export default Header;
