import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../redux/helpers/hooks";
import { selectError } from "../../../redux/auth/selectors";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import type { LoginCredentials } from "../../../redux/helpers/types/interfacesAuth";
import { loginSchema } from "../../../redux/helpers/schemas/authSchemas";
import { login } from "../../../redux/auth/operations";
import { toast } from "react-toastify";
import PasswordInput from "../PasswordInput/PasswordInput";

const LoginForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const backendError = useAppSelector(selectError);

  const {
    register: formRegister,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginCredentials>({ resolver: yupResolver(loginSchema) });

  const onSubmit = async (data: LoginCredentials) => {
    const resultAction = await dispatch(login(data));
    if (login.fulfilled.match(resultAction)) {
      reset();
      navigate("/recommended");
    } else toast.error(`⛔ ${backendError}`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="email">Mail:</label>
        <input id="email" type="email" {...formRegister("email")} />
        {errors.email && <span>{errors.email.message}</span>}
      </div>
      <PasswordInput
        registration={formRegister("password")}
        error={errors.password}
      />

      <button type="submit">Log In</button>
      <Link to="/register">Don’t have an account? </Link>
    </form>
  );
};

export default LoginForm;
