import { AuthBaseCard } from "@/components/auth/AuthBaseCard";
import { Button, Input } from "@nextui-org/react";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

export const NewPasswordPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleConfirm, setIsVisibleConfirm] = useState(false);

  return (
    <AuthBaseCard title="">
      <div className="flex flex-col gap-3">
        <div>
          <p className="text-center">Set a New Password</p>
        </div>
        <Input
          label="Password"
          variant="bordered"
          placeholder="Enter your password"
          endContent={
            <button
              className="focus:outline-none"
              type="button"
              onClick={() => {
                setIsVisible((prev) => !prev);
              }}
            >
              {isVisible ? <FaEye /> : <FaEyeSlash />}
            </button>
          }
          type={isVisible ? "text" : "password"}
          className="max-w-xs"
        />
        <Input
          label="Confirm Password"
          variant="bordered"
          endContent={
            <button
              className="focus:outline-none"
              type="button"
              onClick={() => {
                setIsVisibleConfirm((prev) => !prev);
              }}
            >
              {isVisible ? <FaEye /> : <FaEyeSlash />}
            </button>
          }
          type={isVisibleConfirm ? "text" : "password"}
          className="max-w-xs"
        />
      </div>

      <div className="flex flex-col gap-3">
        <Link to="/login">
          <Button color="primary" variant="solid" fullWidth>
            Reset Password
          </Button>
        </Link>
      </div>

      <div className="flex flex-row justify-center">
        <Link to="/login">
          <Button color="primary" variant="light">
            I Remember My Password
          </Button>
        </Link>
      </div>
    </AuthBaseCard>
  );
};
