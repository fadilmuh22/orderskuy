import { Button, Input, Link } from "@nextui-org/react";
import { AuthGoogleButton } from "@/components/auth/AuthGoogleButton";
import { AuthBaseCard } from "@/components/auth/AuthBaseCard";
import { InputPassword } from "@/components/form/InputPassword";
import { DividerWithChild } from "@/components/common/DividerWithChild";
import { useForm } from "react-hook-form";
import { useSignUp } from "@/api/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { RegisterPayload } from "@/api/auth/types";

export const SignUpPage = () => {
  const navigate = useNavigate();
  const { handleSubmit, register } = useForm<RegisterPayload>();

  const { mutateAsync: signUp, isPending } = useSignUp({
    onSuccess: () => {
      toast.success("Sign up successfully!, please login");
      navigate("/login");
    },
    onError: (error) => {
      toast.error(error.error_message);
    },
  });

  const onSubmit = async (payload: RegisterPayload) => {
    await signUp(payload);
  };

  return (
    <AuthBaseCard title="Create New Account">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
        <Input
          label="Username"
          variant="bordered"
          className="max-w-xs"
          {...register("username", { required: true })}
        />
        <Input
          label="Email"
          variant="bordered"
          className="max-w-xs"
          {...register("email", { required: true })}
        />
        <InputPassword
          label="Password"
          {...register("password", { required: true })}
        />
        <InputPassword
          label="Confirm Password"
          {...register("password_confirmation", { required: true })}
        />
        <Input
          label="Phone Number (optional)"
          variant="bordered"
          className="max-w-xs"
          {...register("phone_number", { required: true })}
        />

        <Button
          isDisabled={isPending}
          color="primary"
          variant="solid"
          fullWidth
          type="submit"
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
