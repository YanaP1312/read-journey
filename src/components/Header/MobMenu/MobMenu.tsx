import { RxCross2 } from "react-icons/rx";
import LogOutBtn from "../LogOutBtn/LogOutBtn";
import UserNav from "../UserNav/UserNav";
import { useEffect } from "react";

const MobMenu = ({ onClose }: { onClose: () => void }) => {
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  useEffect(() => {
    document.body.classList.add("no-scroll");
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);

  return (
    <div onClick={handleBackdropClick} className="overlay">
      <div className="mobMenu">
        <button type="button" onClick={onClose} className="btnClose">
          <RxCross2 size={26}  />
        </button>
        <UserNav />
        <LogOutBtn />
      </div>
    </div>
  );
};

export default MobMenu;
