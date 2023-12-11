import { Select, SelectItem, SelectProps } from "@nextui-org/react";
import { FunctionComponent } from "react";
import { Control, Controller, FieldValues } from "react-hook-form";

type Props = SelectProps & {
  control: Control<FieldValues>;
  options: {
    label: string;
    value: string;
  }[];
};

export const InputSelect: FunctionComponent<Props> = ({
  control,
  options,
  ...props
}) => {
  return (
    <Controller
      name={props.name as string}
      control={control}
      rules={{ required: true }} // Add your validation rules here
      render={({ field: { onChange, onBlur, value } }) => (
        <Select
          {...props}
          onBlur={onBlur}
          onChange={onChange}
          selectedKeys={value ? [value] : []}
        >
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </Select>
      )}
    />
  );
};
