import { AuthBaseCard } from "@/components/auth/AuthBaseCard";
import { Button, Input } from "@nextui-org/react";
import { Link } from "react-router-dom";

export const ForgotPasswordPage = () => {
  return (
    <AuthBaseCard title="Forgot Password">
      <div className="flex flex-col gap-3">
        <div>
          <p className="text-center">
            Enter your email and we'll send OTP code to get back to your account
          </p>
        </div>
        <Input label="Username or email" variant="bordered" />
        <Button color="primary" variant="flat">
          Send OTP
        </Button>
      </div>

      <div className="flex flex-row justify-center">
        <p className="text-red-500 text-center">60 Second(s) left</p>
      </div>

      <div className="flex flex-col gap-3">
        <Input label="OTP" variant="bordered" />
        <Link to="/new-password">
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
