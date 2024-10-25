import { useState, useEffect, RefCallback } from "react";

type Size = {
  width: number;
  height: number;
};

export const useElementSize = (): [RefCallback<HTMLElement>, Size] => {
  const [size, setSize] = useState<Size>({ width: 0, height: 0 });
  const [node, setNode] = useState<HTMLElement | null>(null);

  const ref: RefCallback<HTMLElement> = (node) => {
    setNode(node);
  };

  useEffect(() => {
    if (node) {
      const updateSize = () => {
        const rect = node.getBoundingClientRect();
        setSize({
          width: rect.width,
          height: rect.height,
        });
      };

      updateSize();

      const resizeObserver = new ResizeObserver(() => {
        updateSize();
      });
      resizeObserver.observe(node);

      return () => {
        resizeObserver.disconnect();
      };
    }
  }, [node]);

  return [ref, size];
};
