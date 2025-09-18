import { useLocation } from "react-router-dom";
import RegisterForm from "../RegisterForm/RegisterForm";
import LoginForm from "../LoginForm/LoginForm";

const FormBlock = () => {
  const location = useLocation();

  const isRegister = location.pathname === "/register";

  return (
    <div className="wrapFormBlock">
      <div className="logo-wrap">
        <svg width="42" height="17">
          <use href="/sprite.svg#icon-favicon"></use>
        </svg>
        <span className="logoName">READ JOURNEY</span>
      </div>
      <h1 className="main-title">
        Expand your mind, reading&nbsp; <span className="main-title-span">a book</span>
      </h1>
      {isRegister ? <RegisterForm /> : <LoginForm />}
    </div>
  );
};

export default FormBlock;
