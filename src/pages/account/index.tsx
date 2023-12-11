import { useSignUp } from "@/api/auth";
import { RegisterPayload } from "@/api/types";
import { useUser } from "@/api/users";
import { IconProvider } from "@/components/common/IconProvider";
import { InputPassword } from "@/components/common/InputPassword";
import { Button, Input, Link } from "@nextui-org/react";
import { FunctionComponent } from "react";
import { useForm } from "react-hook-form";
import { FaChevronLeft, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const AccountPage: FunctionComponent = () => {
  const { data: user, isLoading } = useUser();

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
    <div className="flex flex-col gap-6 p-4">
      <div className="flex flex-row">
        <Button
          as={Link}
          href=".."
          color="danger"
          variant="flat"
          startContent={
            <IconProvider className="fill-danger-500">
              <FaChevronLeft />
            </IconProvider>
          }
        >
          Back
        </Button>
      </div>

      <div className="flex flex-col items-center gap-2 text-zinc-500">
        <h1 className="text-2xl">My</h1>
        <p className="text-xs font-bold">Account</p>
      </div>

      {isLoading && <p>Loading...</p>}

      {user && (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
          <Input label="Username" variant="bordered" className="max-w-xs" />
          <Input label="Email" variant="bordered" className="max-w-xs" />
          <Input
            label="Phone Number (optional)"
            variant="bordered"
            className="max-w-xs"
          />

          <Button
            isDisabled={isPending}
            color="primary"
            variant="shadow"
            fullWidth
          >
            Update Profile
          </Button>
        </form>
      )}

      {user && (
        <form className="flex flex-col gap-3">
          <InputPassword label="Password" />
          <InputPassword label="New Password" />
          <InputPassword label="Confirm Password" />

          <Button
            isDisabled={isPending}
            color="primary"
            variant="shadow"
            fullWidth
          >
            Update Password
          </Button>
        </form>
      )}

      <Button
        isDisabled={isPending}
        color="danger"
        variant="shadow"
        startContent={
          <IconProvider color="white" size="24">
            <FaSignOutAlt />
          </IconProvider>
        }
      >
        Logout
      </Button>

      <div></div>
      <div></div>
    </div>
  );
};
