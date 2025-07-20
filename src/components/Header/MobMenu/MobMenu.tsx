import { RxCross2 } from "react-icons/rx";
import Navigation from "../Navigation/Navigation";
import LogOutBtn from "../LogOutBtn/LogOutBtn";

const MobMenu = ({ onClose }: { onClose: () => void }) => {
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div onClick={handleBackdropClick}>
      <div>
        <button type="button" onClick={onClose}>
          <RxCross2 />
        </button>
        <Navigation />
        <LogOutBtn />
      </div>
    </div>
  );
};

export default MobMenu;
