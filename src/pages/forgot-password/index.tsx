import { AuthBaseCard } from "@/components/auth/AuthBaseCard";
import { Button, Input, Link } from "@nextui-org/react";

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
        <p className="text-center text-red-500">60 Second(s) left</p>
      </div>

      <div className="flex flex-col gap-3">
        <Input label="OTP" variant="bordered" />
        <Button
          as={Link}
          href="/new-password"
          color="primary"
          variant="solid"
          fullWidth
        >
          Reset Password
        </Button>
      </div>

      <div className="flex flex-row justify-center">
        <Button as={Link} href="/login" color="primary" variant="light">
          I Remember My Password
        </Button>
      </div>
    </AuthBaseCard>
  );
};
