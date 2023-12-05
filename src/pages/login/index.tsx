import { Button, Input, Link } from "@nextui-org/react";
import { AuthGoogleButton } from "@/components/auth/AuthGoogleButton";
import { AuthBaseCard } from "@/components/auth/AuthBaseCard";
import { InputPassword } from "@/components/common/InputPassword";
import { DividerWithChild } from "@/components/common/DividerWithChild";

export const LoginPage = () => {
  return (
    <AuthBaseCard title="Log In to Your Account">
      <div className="flex flex-col gap-3">
        <Input
          label="Username or email"
          variant="bordered"
          className="max-w-xs"
        />
        <InputPassword label="Password" />
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex flex-row justify-end">
          <Button
            as={Link}
            href="/forgot-password"
            color="primary"
            variant="light"
          >
            Forgot Password?
          </Button>
        </div>
        <Button color="primary" variant="solid" fullWidth>
          Login
        </Button>
      </div>

      <div className="flex flex-row">
        <DividerWithChild>
          <p>or log in with</p>
        </DividerWithChild>
      </div>

      <div className="flex flex-row justify-center">
        <AuthGoogleButton />
      </div>

      <div></div>
      <div></div>

      <div className="flex flex-row justify-center items-center ">
        <p>Don't Have Any Acoount?</p>

        <Button as={Link} href="/signup" color="primary" variant="light">
          Sign Up
        </Button>
      </div>
    </AuthBaseCard>
  );
};
