"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import Text, { TextProps } from "@/src/components/common/Text";

type TextType = Pick<TextProps, "type">;

type TextGenerateEffectProps = {
  words: string;
  className?: string;
  croppedWord?: number;
} & TextType;

export const TextGenerateEffect = ({
  words,
  className,
  type,
  croppedWord,
}: TextGenerateEffectProps) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      },
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className={`opacity-0 ${croppedWord !== undefined && idx > croppedWord && "text-primary"}`}
            >
              {croppedWord !== undefined && idx > croppedWord ? (
                <span>{word}</span>
              ) : (
                word
              )}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <Text type={type} className={className}>
      {renderWords()}
    </Text>
  );
};
