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
    <form onSubmit={handleSubmit(onSubmit)} className="form-com">
      <div className="inputs-block">
      <div>
        <div className="input-wrap">
        <label htmlFor="name" className="input-wrap-label">Name:</label>
        <input id="name" type="text" {...formRegister("name")} placeholder="Ilona Ratushniak" className="input-wrap-name"/>
        </div>
        {errors.name && <span className="input-wrap-error">{errors.name.message}</span>}
      </div>
      <div>
        <div className="input-wrap">
        <label htmlFor="email" className="input-wrap-label">Mail:</label>
        <input id="email" type="email" {...formRegister("email")} placeholder="Your@email.com" className="input-wrap-mail"/>
        </div>
        {errors.email && <span className="input-wrap-error">{errors.email.message}</span>}
      </div>
      <PasswordInput
        registration={formRegister("password")}
        error={errors.password}
      />
      </div>
<div className="btms-block">
      <button className="btms-block-btn" type="submit">Registration</button>
      <Link to="/login" className="btms-block-link">Already have an account?</Link>
      </div>
    </form>
  );
};

export default RegisterForm;
