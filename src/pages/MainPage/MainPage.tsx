import { useLocation, useNavigate } from "react-router-dom";

const MainPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isRegister = location.pathname === "/register";

  return (
    <div>
      <h3>Main page</h3>
    </div>
  );
};
export default MainPage;
