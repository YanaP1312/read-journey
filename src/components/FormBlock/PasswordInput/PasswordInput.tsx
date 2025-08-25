import { useState } from "react";
import type { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface PasswordInputProps {
  registration: UseFormRegisterReturn;
  error?: FieldError;
}

const PasswordInput = ({ registration, error }: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => setShowPassword((prev) => !prev);

  return (
    <div>
      <div className="input-wrap">
        <label htmlFor="password" className="input-wrap-label">Password:</label>
        <input
          id="password"
          placeholder="Yourpasswordhere"
          type={showPassword ? "text" : "password"}
          {...registration}
          className="input-wrap-password"/>
        <button onClick={togglePassword} className="input-wrap-passwordIcon">
          <svg width="18" height="18">
            <use
              href={
                showPassword
                  ? "../../../../public/sprite.svg#icon-eye"
                  : "../../../../public/sprite.svg#icon-eye-off"
              }
            />
          </svg>
        </button>
      </div>
      {error && <span className="input-wrap-error">{error.message}</span>}
    </div>
  );
};

export default PasswordInput;
