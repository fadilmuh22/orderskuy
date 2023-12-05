import { AuthBaseCard } from "@/components/auth/AuthBaseCard";
import { InputPassword } from "@/components/common/InputPassword";
import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";

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
