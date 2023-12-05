import { Button, Input } from "@nextui-org/react";
import { AuthOptionalDivider } from "@/components/auth/AuthOptionalDivider";
import { AuthGoogleButton } from "@/components/auth/AuthGoogleButton";
import { Link } from "react-router-dom";
import { AuthBaseCard } from "@/components/auth/AuthBaseCard";
import { InputPassword } from "@/components/common/InputPassword";

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
          <Link to="/forgot-password">
            <Button color="primary" variant="light">
              Forgot Password?
            </Button>
          </Link>
        </div>
        <Button color="primary" variant="solid" fullWidth>
          Login
        </Button>
      </div>

      <div className="flex flex-row">
        <AuthOptionalDivider text="or log in with" />
      </div>

      <div className="flex flex-row justify-center">
        <AuthGoogleButton />
      </div>

      <div></div>
      <div></div>

      <div className="flex flex-row justify-center items-center ">
        <p>Don't Have Any Acoount?</p>

        <Link to="/register">
          <Button color="primary" variant="light">
            Sign Up
          </Button>
        </Link>
      </div>
    </AuthBaseCard>
  );
};
