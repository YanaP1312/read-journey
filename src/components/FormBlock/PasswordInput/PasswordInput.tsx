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
      <div>
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type={showPassword ? "text" : "password"}
          {...registration}
        />
        <button onClick={togglePassword}>
          <svg width="20" height="20">
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
      {error && <span>{error.message}</span>}
    </div>
  );
};

export default PasswordInput;
