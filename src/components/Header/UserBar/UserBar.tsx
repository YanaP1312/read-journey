import { selectUser } from "../../../redux/auth/selectors";
import { useAppSelector } from "../../../redux/helpers/hooks";

const UserBar = () => {
  const nameUser = useAppSelector(selectUser);

  return (
    <div>
      <div>
        <p>{nameUser.name?.charAt(0).toUpperCase()}</p>
      </div>
      <p>{nameUser.name}</p>
    </div>
  );
};

export default UserBar;
