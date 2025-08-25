import { toast } from "react-toastify";
import { logout } from "../../../redux/auth/operations";
import { useAppDispatch } from "../../../redux/helpers/hooks";

const LogOutBtn = () => {
  const dispatch = useAppDispatch();
  const logOut = () => {
    dispatch(logout());
    toast("🥺 I will miss you");
  };

  return (
    <button type="button" onClick={logOut} className="logOutBtn">
      Log Out
    </button>
  );
};

export default LogOutBtn;
