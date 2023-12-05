import { Button, ButtonProps } from "@nextui-org/react";
import { FunctionComponent } from "react";
import { FcGoogle } from "react-icons/fc";

export const AuthGoogleButton: FunctionComponent<ButtonProps> = (props) => {
  return (
    <Button isIconOnly {...props}>
      <FcGoogle />
    </Button>
  );
};
