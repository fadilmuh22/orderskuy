import { Button, Input, Link } from "@nextui-org/react";
import { AuthGoogleButton } from "@/components/auth/AuthGoogleButton";
import { AuthBaseCard } from "@/components/auth/AuthBaseCard";
import { InputPassword } from "@/components/form/InputPassword";
import { DividerWithChild } from "@/components/common/DividerWithChild";
import { useForm } from "react-hook-form";
import { useGoogleCallback, useSignUp } from "@/api/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { RegisterPayload } from "@/api/auth/types";

export const SignUpPage = () => {
  const navigate = useNavigate();
  const { handleSubmit, register } = useForm<RegisterPayload>();

  const { mutateAsync: signUp, isPending: isSingUpPending } = useSignUp({
    onSuccess: () => {
      toast.success("Sign up successfully!, please login");
      navigate("/login");
    },
    onError: (error) => {
      toast.error(error.error_message);
    },
  });

  const { mutateAsync: googleCallback, isPending: isGoogleCallbackPending } =
    useGoogleCallback({
      onSuccess: () => {
        toast.success("Login with Google successfully!");
        navigate("/");
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
          {...register("username", { required: true })}
        />
        <Input
          label="Email"
          variant="bordered"
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
          {...register("phone", { required: true })}
        />

        <Button
          isLoading={isSingUpPending || isGoogleCallbackPending}
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
        <AuthGoogleButton
          googleCallback={(payload) => googleCallback(payload)}
        />
      </div>

      <div></div>
      <div></div>

      <div className="flex flex-row items-center justify-center ">
        <p>Already have an account?</p>

        <Button
          disabled={isSingUpPending || isGoogleCallbackPending}
          as={Link}
          href="/login"
          color="primary"
          variant="light"
        >
          Log In
        </Button>
      </div>
    </AuthBaseCard>
  );
};
