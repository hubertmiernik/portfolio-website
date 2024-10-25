"use client";

import Button from "@/src/components/common/Button";
import { Sparkles } from "@/src/components/ui/Sparkles";
import { Link } from "@/src/navigation";
import Text from "@/src/components/common/Text";
import { cn } from "@/src/utils/cn";
import { useBreakpoint } from "@/src/hooks/useBreakpoint";

type SparklesSectionProps = {
  title: string;
  description?: string;
  className?: string;
};
const SparklesCTASection = ({
  title,
  description,
  className,
}: SparklesSectionProps) => {
  const { isMd } = useBreakpoint("md");

  return (
    <div
      className={cn(
        "relative h-[20rem] md:bg-backgroundPrimary bg-backgroundSecondaryWithoutAlpha mx-[-1.25rem] flex items-center justify-center",
        className,
      )}
    >
      {isMd && (
        <div className="w-full absolute inset-0">
          <Sparkles
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={550}
            particleColor="#F5F5F5"
          />
          <div className="absolute h-[20rem] inset-0 bg-backgroundPrimary [mask-image:radial-gradient(ellipse_40%_50%_at_50%_50%,transparent_20%,white)]"></div>
        </div>
      )}
      <div className="text-center md:absolute md:left-[50%] md:top-[20%] md:min-w-[35rem] min-w-[20rem]">
        <div className={"relative md:left-[-50%] px-10"}>
          <Text type={"subtitle"} className="relative z-50 font-semibold">
            {title}
          </Text>
          {description && (
            <Text type={"body"} className={"relative z-50"}>
              {description}
            </Text>
          )}
          <Link href={"/contact"} className={"flex justify-center"}>
            <Button text={"Contact me"} className={"mt-6 z-50 relative"} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SparklesCTASection;
