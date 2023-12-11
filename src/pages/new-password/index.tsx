import { AuthBaseCard } from "@/components/auth/AuthBaseCard";
import { InputPassword } from "@/components/form/InputPassword";
import { Button, Link } from "@nextui-org/react";

export const NewPasswordPage = () => {
  return (
    <AuthBaseCard title="">
      <div className="flex flex-col gap-3">
        <div>
          <p className="text-center">Set a New Password</p>
        </div>
        <InputPassword label="Password" />
        <InputPassword label="Confirm Password" />
      </div>

      <div className="flex flex-col gap-3">
        <Button
          as={Link}
          href="/login"
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
