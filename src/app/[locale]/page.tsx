import HeroSection from "@/src/app/[locale]/home/components/HeroSection";
import Grid from "@/src/app/[locale]/home/components/heroSection/Grid";
import HowIworkSection from "@/src/app/[locale]/home/components/HowIworkSection";
import UsingTechnologies from "@/src/app/[locale]/home/components/UsingTechnologies";
import MyExperience from "@/src/app/[locale]/home/components/MyExperience";
import BottomContactSection from "@/src/app/[locale]/home/components/BottomContactSection";
import Faq from "@/src/app/[locale]/home/components/Faq";

const Home = () => {
  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto">
      <div className="max-w-[1400px] w-full  md:px-10 px-5">
        <HeroSection />
        <Grid />
        <HowIworkSection />
        <UsingTechnologies />
        <MyExperience />
        <Faq />
        <BottomContactSection />
      </div>
    </main>
  );
};

export default Home;
