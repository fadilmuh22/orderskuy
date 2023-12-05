import { Button, Input, Link } from "@nextui-org/react";
import { AuthOptionalDivider } from "@/components/auth/AuthOptionalDivider";
import { AuthGoogleButton } from "@/components/auth/AuthGoogleButton";
import { AuthBaseCard } from "@/components/auth/AuthBaseCard";
import { InputPassword } from "@/components/common/InputPassword";

export const RegisterPage = () => {
  return (
    <AuthBaseCard title="Create New Account">
      <div className="flex flex-col gap-3">
        <Input label="Username" variant="bordered" className="max-w-xs" />
        <Input label="Email" variant="bordered" className="max-w-xs" />
        <InputPassword label="Password" />
        <InputPassword label="Confirm Password" />
        <Input
          label="Phone Number (optional)"
          variant="bordered"
          className="max-w-xs"
        />
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

        <Button as={Link} href="/login" color="primary" variant="light">
          Log In
        </Button>
      </div>
    </AuthBaseCard>
  );
};
