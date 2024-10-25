import { InputHTMLAttributes } from "react";
import { cn } from "@/src/utils/cn";
import { commonInputStyles } from "@/src/components/common/commonStyles";
import Text from "@/src/components/common/Text";

export type InputProps = {
  label: string;
  placeholder?: string;
  error?: boolean;
  className?: string;
} & InputHTMLAttributes<HTMLTextAreaElement>;

const TextArea = ({
  label,
  placeholder,
  error,
  className,
  ...rest
}: InputProps) => (
  <>
    <div className={cn("flex flex-col")}>
      <Text type={"body"}>
        <label className={`${error && "text-red"}`}>{label}</label>
      </Text>

      <textarea
        placeholder={placeholder}
        className={cn(
          `${error && "!border-red"} md:w-[30rem] w-auto h-[15rem] p-2 resize-none ${commonInputStyles}`,
        )}
        {...rest}
      />
    </div>
  </>
);

export default TextArea;
