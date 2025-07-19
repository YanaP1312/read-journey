import { useLocation } from "react-router-dom";
import RegisterForm from "../RegisterForm/RegisterForm";
import LoginForm from "../LoginForm/LoginForm";

const FormBlock = () => {
  const location = useLocation();
  // const navigate = useNavigate();
  const isRegister = location.pathname === "/register";

  // const handleSwitch = () => navigate(isRegister ? "/login" : "/register");

  return (
    <div>
      <div>
        <svg width="42" height="17">
          <use href="../../../../public/sprite.svg#icon-favicon"></use>
        </svg>
        <p>READ JOURNEY</p>
      </div>
      <h1>
        Expand your mind, reading&nbsp;<span>a book</span>
      </h1>
      {isRegister ? <RegisterForm /> : <LoginForm />}
    </div>
  );
};

export default FormBlock;
