"use client";

import React from "react";
import PhotographyPageDesc from "@/src/app/[locale]/photography/components/PhotographyPageDesc";
import PhotographyParalax from "@/src/app/[locale]/photography/components/PhotographyParalax";

const PhotographyPage = () => {
  return (
    <main className="mx-auto sm:px-10 px-5 max-w-[1400px] xl:h-screen h-auto">
      <div className={"xl:flex-row flex-col flex gap-10"}>
        <div className={"xl:max-w-[500px] max-w-full"}>
          <PhotographyPageDesc />
        </div>

        <div data-aos={"fade-up"} className={"mt-6"}>
          <PhotographyParalax />
        </div>
      </div>
    </main>
  );
};

export default PhotographyPage;
