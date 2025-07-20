import { useLocation } from "react-router-dom";
import RegisterForm from "../RegisterForm/RegisterForm";
import LoginForm from "../LoginForm/LoginForm";

const FormBlock = () => {
  const location = useLocation();

  const isRegister = location.pathname === "/register";

  return (
    <div>
      <div>
        <svg width="42" height="17">
          <use href="../../../../public/sprite.svg#icon-favicon"></use>
        </svg>
        <span>READ JOURNEY</span>
      </div>
      <h1>
        Expand your mind, reading&nbsp;<span>a book</span>
      </h1>
      {isRegister ? <RegisterForm /> : <LoginForm />}
    </div>
  );
};

export default FormBlock;
