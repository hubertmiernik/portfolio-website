"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/src/navigation";
import Drawer from "@/src/components/common/Drawer";
import Text from "@/src/components/common/Text";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const t = useTranslations("header");

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1 && window.innerHeight > 1) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navigationItems = [
    {
      name: t("home"),
      href: "/",
    },
    {
      name: t("aboutMe"),
      href: "/about-me",
    },
    {
      name: t("technologies"),
      href: "/technologies",
    },
    {
      name: t("photography"),
      href: "/photography",
    },
    {
      name: t("blog"),
      href: "/blog",
    },
    {
      name: t("contact"),
      href: "/contact",
    },
  ];

  return (
    <>
      <header
        className={`fixed w-full z-[2000] transition-all duration-300 top-0  border-b border-border ${scrolled ? "backdrop-blur-mobile bg-[#010319] bg-opacity-20 backdrop-blur-[8px] shadow-lg" : "bg-transparent"}`}
      >
        <div className="max-w-[1400px] mx-auto sm:px-10 px-5">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <Link href={"/"}>
                <Text
                  type="header"
                  bold
                  className={`cursor-pointer hover:opacity-80 ${scrolled ? "text-white" : "text-primary"} transition-all duration-300`}
                >
                  Hubert Miernik
                </Text>
              </Link>
            </div>
            <div className={"md:flex hidden items-center gap-4"}>
              <nav className="block">
                <ul className="flex space-x-4">
                  {navigationItems.map(({ name, href }) => (
                    <li key={name}>
                      <Text
                        type={"body"}
                        className="hover:text-primary underline-animation"
                      >
                        <Link href={href} className="ugly-fix-for-header">
                          {name}
                        </Link>
                      </Text>
                    </li>
                  ))}
                </ul>
              </nav>
              {/*<LocaleSwitcher />*/}
            </div>
            <div
              className={"md:hidden flex items-center gap-4 relative z-[200]"}
            >
              {/*<LocaleSwitcher />*/}
              <button
                className="p-4 focus:outline-none"
                onClick={toggleDrawer}
                aria-label="Toggle Menu"
              >
                <div
                  className={`w-7 h-0.5 bg-textPrimary transition-transform duration-300 transform ${isDrawerOpen ? "rotate-45 translate-y-1.5" : "-translate-y-1.5"}`}
                ></div>
                <div
                  className={`w-7 h-0.5 bg-textPrimary ${isDrawerOpen && "my-1"} transition-all duration-300 ${isDrawerOpen ? "opacity-0" : "opacity-100"}`}
                ></div>
                <div
                  className={`w-7 h-0.5 bg-textPrimary transition-transform duration-300 transform ${isDrawerOpen ? "-rotate-45 -translate-y-1.5" : "translate-y-1.5"}`}
                ></div>
              </button>
            </div>
          </div>
        </div>
      </header>
      <Drawer
        isOpen={isDrawerOpen}
        toggleDrawer={toggleDrawer}
        navigationItems={navigationItems}
      />
    </>
  );
};

export default Header;
