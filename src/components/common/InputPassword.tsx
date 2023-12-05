import { Input, InputProps } from "@nextui-org/react";
import { FunctionComponent, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

type Props = InputProps;

export const InputPassword: FunctionComponent<Props> = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <Input
      variant="bordered"
      endContent={
        <button
          className="focus:outline-none"
          type="button"
          onClick={() => {
            setIsVisible((prev) => !prev);
          }}
        >
          {isVisible ? <FaEye /> : <FaEyeSlash />}
        </button>
      }
      type={isVisible ? "text" : "password"}
      className="max-w-xs"
      {...props}
    />
  );
};
