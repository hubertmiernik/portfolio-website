"use client";
import EnFlag from "@/public/icons/flags/en-icon.jpeg";
import PlFlag from "@/public/icons/flags/pl-icon.jpeg";

import Image from "next/image";
import { useParams } from "next/navigation";
import { useTransition } from "react";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/src/navigation";

const LocaleSwitcher = () => {
  const locale = useLocale();
  const [_, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  const onImageClick = (locale: string) => {
    startTransition(() => {
      // @ts-ignore
      router.replace({ pathname, params }, { locale });
    });
  };

  return (
    <Image
      src={locale === "en" ? PlFlag : EnFlag}
      alt={"flag icon"}
      className={"w-[2rem] cursor-pointer rounded-sm"}
      onClick={() => onImageClick(locale === "en" ? "pl" : "en")}
    />
  );
};

export default LocaleSwitcher;
