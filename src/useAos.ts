"use client";
import AOS from "aos";
import { useEffect } from "react";

export const AOSInit = () => {
  useEffect(() => {
    AOS.init({ disable: false, offset: 100, once: true });
  }, []);

  return null;
};
