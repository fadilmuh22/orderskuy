import { Button, Input } from "@nextui-org/react";
import { useState } from "react";
import { AuthOptionalDivider } from "@/components/auth/AuthOptionalDivider";
import { AuthGoogleButton } from "@/components/auth/AuthGoogleButton";
import { Link } from "react-router-dom";
import { AuthBaseCard } from "@/components/auth/AuthBaseCard";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export const RegisterPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleConfirm, setIsVisibleConfirm] = useState(false);

  return (
    <AuthBaseCard title="Create New Account">
      <div className="flex flex-col gap-3">
        <Input label="Username" variant="bordered" />
        <Input label="Email" variant="bordered" />
        <Input
          label="Password"
          variant="bordered"
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

        <Input label="Phone Number (optional)" variant="bordered" />
      </div>

      <div className="flex flex-col gap-3">
        <Button color="primary" variant="solid" fullWidth>
          Sign Up
        </Button>
      </div>

      <div className="flex flex-row">
        <AuthOptionalDivider text="or sign up with" />
      </div>

      <div className="flex flex-row justify-center">
        <AuthGoogleButton />
      </div>

      <div></div>
      <div></div>

      <div className="flex flex-row justify-center items-center ">
        <p>Already have an account?</p>

        <Link to="/login">
          <Button color="primary" variant="light">
            Log In
          </Button>
        </Link>
      </div>
    </AuthBaseCard>
  );
};
