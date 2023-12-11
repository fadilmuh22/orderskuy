import { Button, Input, Link } from "@nextui-org/react";
import { AuthGoogleButton } from "@/components/auth/AuthGoogleButton";
import { AuthBaseCard } from "@/components/auth/AuthBaseCard";
import { InputPassword } from "@/components/common/InputPassword";
import { DividerWithChild } from "@/components/common/DividerWithChild";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useLogin } from "@/api/auth";
import { LoginPayload } from "@/api/types";
import { toast } from "react-toastify";

export const LoginPage = () => {
  const navigate = useNavigate();
  const { handleSubmit } = useForm<LoginPayload>();

  const { mutateAsync: login, isPending } = useLogin({
    onSuccess: () => {
      toast.success("Login successfully!");
      navigate("/");
    },
  });

  const onSubmit = async (payload: LoginPayload) => {
    await login(payload);
  };

  return (
    <AuthBaseCard title="Log In to Your Account">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
        <Input
          label="Username or email"
          variant="bordered"
          className="max-w-xs"
        />
        <InputPassword label="Password" />

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
        <Button
          isDisabled={isPending}
          color="primary"
          variant="solid"
          fullWidth
        >
          Login
        </Button>
      </form>

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

      <div className="flex flex-row items-center justify-center ">
        <p>Don't Have Any Acoount?</p>

        <Button as={Link} href="/signup" color="primary" variant="light">
          Sign Up
        </Button>
      </div>
    </AuthBaseCard>
  );
};
