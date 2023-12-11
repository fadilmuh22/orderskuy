import { Button, Input, Link } from "@nextui-org/react";
import { AuthGoogleButton } from "@/components/auth/AuthGoogleButton";
import { AuthBaseCard } from "@/components/auth/AuthBaseCard";
import { InputPassword } from "@/components/common/InputPassword";
import { DividerWithChild } from "@/components/common/DividerWithChild";
import { useForm } from "react-hook-form";
import { RegisterPayload } from "@/api/types";
import { useSignUp } from "@/api/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const SignUpPage = () => {
  const navigate = useNavigate();
  const { handleSubmit } = useForm<RegisterPayload>();

  const { mutateAsync: signUp, isPending } = useSignUp({
    onSuccess: () => {
      toast.success("Sign up successfully!, please login");
      navigate("/login");
    },
  });

  const onSubmit = async (payload: RegisterPayload) => {
    await signUp(payload);
  };

  return (
    <AuthBaseCard title="Create New Account">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
        <Input label="Username" variant="bordered" className="max-w-xs" />
        <Input label="Email" variant="bordered" className="max-w-xs" />
        <InputPassword label="Password" />
        <InputPassword label="Confirm Password" />
        <Input
          label="Phone Number (optional)"
          variant="bordered"
          className="max-w-xs"
        />

        <Button
          isDisabled={isPending}
          color="primary"
          variant="solid"
          fullWidth
        >
          Sign Up
        </Button>
      </form>

      <div className="flex flex-row">
        <DividerWithChild>
          <p>or sign up with</p>
        </DividerWithChild>
      </div>

      <div className="flex flex-row justify-center">
        <AuthGoogleButton />
      </div>

      <div></div>
      <div></div>

      <div className="flex flex-row items-center justify-center ">
        <p>Already have an account?</p>

        <Button as={Link} href="/login" color="primary" variant="light">
          Log In
        </Button>
      </div>
    </AuthBaseCard>
  );
};
