import { Form } from "react-hook-form";
import Btn from "../Btn/Btn";

const Filters = () => {
  return (
    <section>
      <form>
        <Btn children="To apply" />
      </form>
    </section>
  );
};
export default Filters;

// const LoginForm = () => {
//   const dispatch = useAppDispatch();
//   const navigate = useNavigate();
//   const backendError = useAppSelector(selectError);

//   const {
//     register: formRegister,
//     handleSubmit,
//     formState: { errors },
//     reset,
//   } = useForm<LoginCredentials>({ resolver: yupResolver(loginSchema) });

//   const onSubmit = async (data: LoginCredentials) => {
//     const resultAction = await dispatch(login(data));
//     if (login.fulfilled.match(resultAction)) {
//       reset();
//       navigate("/recommended");
//     } else toast.error(backendError);
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <div>
//         <label htmlFor="email">Mail:</label>
//         <input id="email" type="email" {...formRegister("email")} />
//         {errors.email && <span>{errors.email.message}</span>}
//       </div>
//       <PasswordInput
//         registration={formRegister("password")}
//         error={errors.password}
//       />

//       <button type="submit">Log In</button>
//       <Link to="/register">Don’t have an account? </Link>
//     </form>
//   );
// };

// export default LoginForm;
