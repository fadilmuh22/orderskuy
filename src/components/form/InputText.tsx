import { Input, InputProps } from "@nextui-org/react";
import { forwardRef } from "react";
import { Controller, Control } from "react-hook-form";

type Props = InputProps & {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  name: string;
};

export const InputText = forwardRef<HTMLInputElement, Props>((props, ref) => {
  return (
    <Controller
      name={props.name}
      control={props.control}
      render={({ field }) => (
        <Input
          ref={ref}
          variant="bordered"
          type="text"
          className="max-w-xs"
          {...props}
          value={field.value}
          onChange={field.onChange}
          onBlur={field.onBlur}
        />
      )}
    />
  );
});
