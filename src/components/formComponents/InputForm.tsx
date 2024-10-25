import Input, { InputProps } from "@/src/components/common/Input";
import {
  FieldPath,
  FieldValues,
  useController,
  UseControllerProps,
} from "react-hook-form";
import TextArea from "@/src/components/common/TextArea";

export type ControllerProps<
  TInputComponentProps,
  TFieldValues extends FieldValues = FieldValues,
  TFieldName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = UseControllerProps<TFieldValues, TFieldName> & TInputComponentProps;

const InputForm = <
  TFieldValues extends FieldValues = FieldValues,
  TFieldName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  label,
  type,
  name,
  control,
  rules,
  defaultValue,
  required,
  placeholder,
  className,
}: ControllerProps<InputProps, TFieldValues, TFieldName>) => {
  const { field, fieldState, formState } = useController({
    name,
    control,
    rules,
    defaultValue,
  });

  const { error } = fieldState;
  const { value, onChange, onBlur } = field;

  return (
    <div className={className}>
      {type === "textArea" ? (
        <TextArea
          label={label}
          value={value === undefined ? "" : value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          error={!!error}
        />
      ) : (
        <Input
          label={label}
          type={type}
          value={value === undefined ? "" : value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          error={!!error}
        />
      )}

      {error && <p className={"text-xs text-red absolute"}>{error.message}</p>}
    </div>
  );
};

export default InputForm;
