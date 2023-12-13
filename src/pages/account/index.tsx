import { UpdateUserPassword, User } from "@/api/users/types";
import {
  useUpdateUser,
  useUpdateUserPassword,
  useUser,
} from "@/api/users/users";
import { IconProvider } from "@/components/common/IconProvider";
import { InputPassword } from "@/components/form/InputPassword";
import { SectionHeader } from "@/components/common/SectionHeader";
import {
  Button,
  Card,
  CircularProgress,
  Divider,
  Link,
} from "@nextui-org/react";
import { FunctionComponent } from "react";
import { useForm } from "react-hook-form";
import { FaChevronLeft, FaSignOutAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import { InputText } from "@/components/form/InputText";
import { useLogout } from "@/api/auth";
import { useNavigate } from "react-router-dom";

export const AccountPage: FunctionComponent = () => {
  const navigate = useNavigate();

  const { data: user, isLoading: isUserLoading } = useUser();
  const { mutateAsync: logout, isPending: isLogoutPending } = useLogout({
    onSuccess: () => {
      toast.success("Logout successfully!");
      navigate("/login");
    },
  });

  const { handleSubmit: handleSubmitUser, control: controlFormUser } =
    useForm<User>({
      values: user,
    });
  const { handleSubmit: handleSubmitPassword, register: registerFormPassword } =
    useForm<UpdateUserPassword>();

  const { mutateAsync: updateUser, isPending: isUpdateUserPending } =
    useUpdateUser({
      onSuccess: () => {
        toast.success("Profile updated successfully");
      },
    });
  const {
    mutateAsync: updateUserPassword,
    isPending: isUpdateUserPasswordPending,
  } = useUpdateUserPassword({
    onSuccess: () => {
      toast.success("Profile updated successfully");
    },
  });

  const onSubmitUpdateUser = async (payload: User) => {
    await updateUser(payload);
  };

  const onSubmitUpdatePassword = async (payload: UpdateUserPassword) => {
    await updateUserPassword(payload);
  };

  const logoutUser = async () => {
    await logout();
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

      <SectionHeader title="My" subtitle="Account" />

      {isUserLoading && (
        <div className="flex flex-row justify-center items-center">
          <CircularProgress />
        </div>
      )}

      <Card className="flex flex-col gap-4 px-4 py-6">
        <div className="flex flex-col gap-2">
          <div className="flex flex-row justify-start">
            <p className="text-sm font-bold">Information</p>
          </div>
          <Divider />
        </div>

        <form
          onSubmit={handleSubmitUser(onSubmitUpdateUser)}
          className="flex flex-col gap-3"
        >
          <InputText
            control={controlFormUser}
            name="username"
            label="Username"
            variant="bordered"
          />
          <InputText
            control={controlFormUser}
            name="email"
            label="Email"
            variant="bordered"
          />
          <InputText
            control={controlFormUser}
            name="phone"
            label="Phone Number (optional)"
            variant="bordered"
          />

          <Button
            isDisabled={isUpdateUserPending || isUserLoading}
            color="primary"
            variant="shadow"
            fullWidth
          >
            Update Profile
          </Button>
        </form>
      </Card>

      <Card className="flex flex-col gap-4 px-4 py-6">
        <div className="flex flex-col gap-2">
          <div className="flex flex-row justify-start">
            <p className="text-sm font-bold">Information</p>
          </div>
          <Divider />
        </div>
        <form
          className="flex flex-col gap-3"
          onSubmit={handleSubmitPassword(onSubmitUpdatePassword)}
        >
          <InputPassword
            label="Password"
            {...registerFormPassword("old_password", { required: true })}
          />
          <InputPassword
            label="New Password"
            {...registerFormPassword("new_password", { required: true })}
          />
          <InputPassword
            label="Confirm Password"
            {...registerFormPassword("new_password_confirmation", {
              required: true,
            })}
          />

          <Button
            isDisabled={isUpdateUserPasswordPending || isUserLoading}
            color="primary"
            variant="shadow"
            fullWidth
          >
            Update Password
          </Button>
        </form>
      </Card>

      <div className="flex flex-row justify-center">
        <Button
          onClick={logoutUser}
          isLoading={isLogoutPending}
          isDisabled={isUpdateUserPending || isUpdateUserPasswordPending}
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
      </div>

      <div></div>
      <div></div>
    </div>
  );
};
