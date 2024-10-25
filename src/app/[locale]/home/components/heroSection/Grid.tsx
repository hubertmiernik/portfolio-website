import React from "react";
import { gridItems } from "../../../../../data";
import {
  BentoGrid,
  BentoGridItem,
} from "@/src/app/[locale]/home/components/heroSection/BentoGrid";

const Grid = () => {
  return (
    <section id={"about"}>
      <BentoGrid>
        {gridItems.map(
          ({
            id,
            title,
            description,
            className,
            img,
            imgClassName,
            titleClassName,
            spareImg,
            dataAos,
            dataAosDelay,
          }) => (
            <BentoGridItem
              id={id}
              key={id}
              title={title}
              description={description}
              className={className}
              img={img}
              imgClassName={imgClassName}
              titleClassName={titleClassName}
              spareImg={spareImg}
              dataAos={dataAos}
              dataAosDelay={dataAosDelay}
            />
          ),
        )}
      </BentoGrid>
    </section>
  );
};
export default Grid;
