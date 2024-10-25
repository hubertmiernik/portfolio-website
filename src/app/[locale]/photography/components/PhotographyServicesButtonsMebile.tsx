import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Text from "@/src/components/common/Text";
import { EContent } from "@/src/services/modalState/slice";
import { getContent } from "@/src/app/[locale]/photography/utils";

const PhotographyServicesButtonsMobile = ({
  services,
}: {
  services: { title: string; content: EContent }[];
}) => {
  return (
    <div>
      {services.map((service) => (
        <ServiceTile
          key={service.title}
          title={service.title}
          content={service.content}
        />
      ))}
    </div>
  );
};

const ServiceTile = ({
  title,
  content,
}: {
  title: string;
  content: EContent;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full mb-4" onClick={handleClick}>
      <motion.button
        className={`border-element text-center w-full p-4 cursor-pointer ${
          isOpen && "rounded-b-none hover:border-b-border"
        } transition-all duration-300`}
      >
        <Text type={"bigBody"} className={"font-medium"}>
          {title}
        </Text>
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className={`overflow-hidden border-border border rounded-b-xl mt-[-1px]`}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="p-4"
            >
              <Text type={"body"}>{getContent(content)}</Text>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PhotographyServicesButtonsMobile;
