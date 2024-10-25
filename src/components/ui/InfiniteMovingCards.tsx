"use client";

import { cn } from "@/src/utils/cn";
import React, { useEffect, useState } from "react";
import ReactIcon from "../../../public/icons/technologies/react.svg";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "slow",
  pauseOnHover = true,
  className,
}: {
  items: {
    name: string;
    description: string;
    icon: StaticImport;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards",
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse",
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "180s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "-mx-10 lg:-mx-48 scroller relative z-20 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {items.map((item) => (
          <li
            className="w-[450px] max-w-full relative rounded-2xl border flex-shrink-0 border-slate-700 px-8 py-6"
            style={{
              background: "white",
            }}
            key={item.name}
          >
            <div>
              <div className={"flex items-center gap-2 mb-4"}>
                <Image
                  src={item.icon}
                  alt={"icon"}
                  width={50}
                  height={50}
                  priority
                />
                <h5 className="text-2xl">{item.name}</h5>
              </div>
              <p className="text-sm">{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
