import { InputHTMLAttributes } from "react";
import { cn } from "@/src/utils/cn";
import { commonInputStyles } from "@/src/components/common/commonStyles";
import Text from "@/src/components/common/Text";

export type InputProps = {
  label: string;
  placeholder?: string;
  type: "text" | "password" | "email" | "textArea";
  error?: boolean;
  className?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = ({
  label,
  placeholder,
  type,
  error,
  className,
  ...rest
}: InputProps) => (
  <>
    <div className={"flex flex-col"}>
      <Text type={"body"}>
        <label className={`${error && "text-red"}`}>{label}</label>
      </Text>

      <input
        type={type}
        placeholder={placeholder}
        className={cn(
          `${error && "!border-red"} md:w-[30rem] w-auto p-2 ${commonInputStyles}`,
          className,
        )}
        {...rest}
      />
    </div>
  </>
);

export default Input;
