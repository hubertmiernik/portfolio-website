"use client";

import React from "react";
import { cn } from "@/src/utils/cn";
import Text from "@/src/components/common/Text";
import { motion } from "framer-motion";

type ButtonProps = {
  text: string;
  onClick?: () => void;
  className?: string;
  loading?: boolean;
  animate?: boolean;
};

const Button = ({ text, onClick, className, loading }: ButtonProps) => (
  <motion.button
    whileHover={{ scale: loading ? 1 : 1.05 }}
    whileTap={{ scale: loading ? 1 : 0.95 }}
    transition={{ duration: 0.05 }}
    className={cn(
      "border-button p-[0.75rem] w-[10rem] flex items-center justify-center",
      className,
      loading ? "opacity-80 cursor-not-allowed" : "",
    )}
    onClick={!loading ? onClick : undefined}
    disabled={loading}
  >
    {loading && (
      <span className="spinner mr-2 w-4 h-4 border-2 border-t-transparent border-black rounded-full animate-spin"></span>
    )}
    <Text
      type={"body"}
      className={"font-bold uppercase text-backgroundPrimary !text-[16px]"}
    >
      {loading ? "Loading..." : text}
    </Text>
  </motion.button>
);

export default Button;
