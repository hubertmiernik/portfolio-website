import { cn } from "@/src/utils/cn";

export type TextProps = {
  children: React.ReactNode;
  type:
    | "hero"
    | "title"
    | "subtitle"
    | "header"
    | "bigBody"
    | "body"
    | "smallBody"
    | "caption";
  bold?: boolean;
  className?: string;
};

const Text = ({ type = "body", children, bold, className }: TextProps) => {
  const baseStyles = "text-textPrimary";
  const boldStyle = bold && "font-bold";

  const typeStyles: Record<TextProps["type"], string> = {
    hero: `md:text-[3.75rem] text-[2rem] leading-tight tracking-wide font-bold `,
    title: `md:text-[3rem] text-[1.875rem] font-semibold leading-tight`,
    subtitle: `md:text-[2rem] text-[1.5rem]`,
    header: `md:text-[1.5rem] text-[1.25rem]`,
    bigBody: `md:text-[1.25rem] text-[1rem]`,
    body: `md:text-[1rem] text-[0.875rem]`,
    smallBody: `text-[0.875rem]`,
    caption: `text-[0.75rem] uppercase tracking-widest`,
  };

  const Tag =
    type === "hero"
      ? "h1"
      : type === "title"
        ? "h2"
        : type === "subtitle"
          ? "h3"
          : type === "header"
            ? "h4"
            : "p";

  return (
    <Tag
      className={cn(
        `${baseStyles} ${typeStyles[type]} ${boldStyle}`,
        className,
      )}
    >
      {children}
    </Tag>
  );
};

export default Text;
