"use client";
import { cn } from "@/src/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import React, { ReactNode, useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "@/src/hooks/reduxHooks";
import {
  hidePhotographyModal,
  isModalVisible,
} from "@/src/services/modalState/slice";
import { CrossIcon } from "@/src/images/Images";

export const ModalBody = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  const open = useAppSelector(isModalVisible);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  const modalRef = useRef(null);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        dispatch(hidePhotographyModal());
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            backdropFilter: "blur(10px)",
          }}
          exit={{
            opacity: 0,
            backdropFilter: "blur(0px)",
          }}
          className="fixed [perspective:800px] [transform-style:preserve-3d] inset-0 h-full w-full  flex items-center justify-center z-50"
        >
          <Overlay onClick={() => dispatch(hidePhotographyModal())} />

          <motion.div
            ref={modalRef}
            className={cn(
              "card h-auto xl:max-w-[676px] max-w-[90vw] md:max-h-[100%] max-h-[80vh] relative z-50 flex flex-col flex-1 bg-backgroundSecondaryWithoutAlpha",
              className,
            )}
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: {
                duration: 0.25,
                ease: "easeOut",
              },
            }}
            exit={{
              opacity: 0,
              scale: 0.8,
              transition: {
                duration: 0.3,
                ease: "easeIn",
              },
            }}
          >
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => dispatch(hidePhotographyModal())}
              className={"absolute right-0 top-0 cursor-pointer p-4"}
            >
              <CrossIcon />
            </motion.div>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const ModalContent = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "md:overflow-visible overflow-scroll flex flex-col flex-1 p-8 pt-12 md:p-10 no-scrollbar",
        className,
      )}
    >
      {children}
    </div>
  );
};

const Overlay = ({
  className,
  onClick,
}: {
  className?: string;
  onClick: () => void;
}) => {
  return (
    <motion.div
      onClick={onClick}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        backdropFilter: "blur(10px)",
      }}
      exit={{
        opacity: 0,
        backdropFilter: "blur(0px)",
      }}
      className={`fixed inset-0 h-[100svh] w-full bg-black bg-opacity-50 z-50 ${className}`}
    />
  );
};
