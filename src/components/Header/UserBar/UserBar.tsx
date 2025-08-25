import { selectUser } from "../../../redux/auth/selectors";
import { useAppSelector } from "../../../redux/helpers/hooks";

const UserBar = () => {
  const nameUser = useAppSelector(selectUser);

  return (
    <div className="userBar">
      <div className="userBarRound">
        <p>{nameUser.name?.charAt(0).toUpperCase()}</p>
      </div>
      <p className="userBarName">{nameUser.name}</p>
    </div>
  );
};

export default UserBar;
