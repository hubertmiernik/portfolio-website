"use client";

import { cn } from "@/src/utils/cn";
import Text from "@/src/components/common/Text";
import Globe from "@/src/app/[locale]/home/components/heroSection/Globe";
import GridImages from "@/src/app/[locale]/home/components/heroSection/GridImages";
import { Link } from "@/src/navigation";
import { useBreakpoint } from "@/src/hooks/useBreakpoint";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => (
  <div
    className={cn(
      "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
      className,
    )}
  >
    {children}
  </div>
);

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  titleClassName,
  dataAos,
  dataAosDelay,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
  dataAos?: string;
  dataAosDelay?: number;
}) => {
  const { isMd } = useBreakpoint("md");

  const renderTitle = () => {
    switch (id) {
      case 6:
        return (
          <Link href="/contact">
            <Text
              type="subtitle"
              bold
              className="max-w-[400px] z-10 text-primary hover:opacity-80"
            >
              {title}
            </Text>
          </Link>
        );
      case 5:
        return (
          <Link href="/photography">
            <Text
              type="subtitle"
              bold
              className="max-w-[400px] z-10 hover:opacity-80"
            >
              {isMd ? title : "Photography services"}
            </Text>
          </Link>
        );
      case 1:
        return (
          <Link href="/about-me">
            <Text
              type="subtitle"
              bold
              className="max-w-[400px] z-10 hover:opacity-80"
            >
              {title}
            </Text>
          </Link>
        );
      case 3:
        return (
          <Link href="/technologies">
            <Text
              type="subtitle"
              bold
              className="max-w-[400px] z-10 hover:opacity-80"
            >
              {title}
            </Text>
          </Link>
        );
      default:
        return (
          <Text type="subtitle" bold className="max-w-[400px] z-10">
            {title}
          </Text>
        );
    }
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden card group/bento transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className,
      )}
      data-aos={dataAos}
      data-aos-delay={dataAosDelay}
    >
      <div className="h-full">
        <div
          className={cn(
            titleClassName,
            "md:group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10 leading-tight",
          )}
        >
          <Text type="body" className="md:max-w-72 z-10 font-extralight">
            {description}
          </Text>
          {renderTitle()}
        </div>
      </div>
      {id === 1 && (
        <div className="absolute lg:right-[-14rem] lg:top-[-7rem] top-[-22rem] right-[-18rem] lg:scale-100 scale-50">
          <Globe />
        </div>
      )}
      <div className="relative">{id === 5 && <GridImages />}</div>
    </div>
  );
};
