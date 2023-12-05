import { Input, InputProps } from "@nextui-org/react";
import { FunctionComponent, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { IconProvider } from "./IconProvider";

type Props = InputProps;

export const InputPassword: FunctionComponent<Props> = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <Input
      variant="bordered"
      endContent={
        <button
          className="flex items-center h-full focus:outline-none"
          type="button"
          onClick={() => {
            setIsVisible((prev) => !prev);
          }}
        >
          <IconProvider className="fill-zinc-300" size="24">
            {isVisible ? <FaEye /> : <FaEyeSlash />}
          </IconProvider>
        </button>
      }
      type={isVisible ? "text" : "password"}
      className="max-w-xs"
      {...props}
    />
  );
};
