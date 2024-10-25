import { ParallaxScroll } from "@/src/components/ui/ParalaxScroll";
import { useBreakpoint } from "@/src/hooks/useBreakpoint";
import MobilePhotos from "@/src/components/ui/MobilePhotos";

const images = Array.from(
  { length: 74 },
  (_, i) => `/photos/${i + 1}.jpeg`,
).sort(() => Math.random() - 0.5);

const PhotographyParallax = () => {
  const { isMd } = useBreakpoint("md");

  return (
    <>
      {isMd ? (
        <ParallaxScroll images={images} />
      ) : (
        <MobilePhotos images={images} />
      )}
    </>
  );
};

export default PhotographyParallax;
