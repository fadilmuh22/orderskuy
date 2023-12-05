import { Button, ButtonProps } from "@nextui-org/react";
import { FunctionComponent } from "react";
import { FcGoogle } from "react-icons/fc";
import { IconProvider } from "../common/IconProvider";

export const AuthGoogleButton: FunctionComponent<ButtonProps> = (props) => {
  return (
    <Button
      {...props}
      isIconOnly
      className="p-2 bg-white rounded-full shadow-lg"
    >
      <IconProvider>
        <FcGoogle />
      </IconProvider>
    </Button>
  );
};
