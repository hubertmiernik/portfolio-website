import React from "react";
import dayjs from "dayjs";
import LinkedinIcon from "@/public/icons/socials/linkedin.svg";
import InstagramIcon from "@/public/icons/socials/instagram.svg";
import GithubIcon from "@/public/icons/socials/github.svg";
import Image from "next/image";
import Text from "@/src/components/common/Text";
import { FloatingDock } from "@/src/components/ui/FloatingDock";

const Footer = () => {
  const footerLinks = [
    {
      name: "linkedin",
      url: "https://pl.linkedin.com/in/hubert-miernik",
      icon: LinkedinIcon,
    },
    {
      name: "github",
      url: "https://github.com/hubertmiernik",
      icon: GithubIcon,
    },
    {
      name: "instagram",
      url: "https://www.instagram.com/hubertmiernik/",
      icon: InstagramIcon,
    },
  ];

  const footerLinks2 = [
    {
      title: "linkedin",
      href: "https://pl.linkedin.com/in/hubert-miernik",
      icon: LinkedinIcon,
    },
    {
      title: "github",
      href: "https://github.com/hubertmiernik",
      icon: GithubIcon,
    },
    {
      title: "instagram",
      href: "https://www.instagram.com/hubertmiernik/",
      icon: InstagramIcon,
    },
  ];

  return (
    <div
      className={
        "h-28 border-t border-border md:mt-28 mt-16 relative z-100 bg-backgroundSecondary"
      }
    >
      <div
        className={
          "max-w-[1400px] mx-auto mt-8 flex justify-between items-center sm:px-10 px-5"
        }
      >
        <Text type={"body"} className={"md:max-w-full max-w-[10rem]"}>
          Copyright ©{dayjs().year()} Hubert Miernik
        </Text>
        <div>
          <div className={"flex gap-4"}>
            {footerLinks.map(({ name, url, icon }) => (
              <a href={url} key={name} target={"_blank"}>
                <div
                  className={
                    "border-element p-2 cursor-pointer hover:opacity-80 bg-backgroundPrimary"
                  }
                >
                  <Image src={icon} alt={"linkedin icon"} width={30} />
                </div>
              </a>
            ))}
          </div>

          {/*<div>*/}
          {/*  <FloatingDock items={footerLinks2} />*/}
          {/*</div>*/}
        </div>
      </div>
    </div>
  );
};
export default Footer;
