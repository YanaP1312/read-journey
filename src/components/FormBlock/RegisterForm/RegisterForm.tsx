import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../redux/helpers/hooks";
import { selectError } from "../../../redux/auth/selectors";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import type { RegisterCredentials } from "../../../redux/helpers/types/interfacesAuth";
import { registerSchema } from "../../../redux/helpers/schemas/authSchemas";
import { register } from "../../../redux/auth/operations";
import { toast } from "react-toastify";
import PasswordInput from "../PasswordInput/PasswordInput";

const RegisterForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const backendError = useAppSelector(selectError);

  const {
    register: formRegister,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RegisterCredentials>({ resolver: yupResolver(registerSchema) });

  const onSubmit = async (data: RegisterCredentials) => {
    const resultAction = await dispatch(register(data));
    if (register.fulfilled.match(resultAction)) {
      reset();
      navigate("/recommended");
    } else toast.error(backendError);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Name:</label>
        <input id="name" type="text" {...formRegister("name")} />
        {errors.name && <span>{errors.name.message}</span>}
      </div>
      <div>
        <label htmlFor="email">Mail:</label>
        <input id="email" type="email" {...formRegister("email")} />
        {errors.email && <span>{errors.email.message}</span>}
      </div>
      <PasswordInput
        registration={formRegister("password")}
        error={errors.password}
      />

      <button type="submit">Registration</button>
      <Link to="/login">Already have an account?</Link>
    </form>
  );
};

export default RegisterForm;
