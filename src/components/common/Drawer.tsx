"use client";

import { Link } from "@/src/navigation";
import { SwipeableDrawer } from "@mui/material";
import AOS from "aos";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Text from "@/src/components/common/Text";

type DrawerProps = {
  isOpen: boolean;
  toggleDrawer: () => void;
  navigationItems: { name: string; href: string }[];
};

const Drawer = ({ isOpen, toggleDrawer, navigationItems }: DrawerProps) => {
  // useEffect(() => {
  //   AOS.refresh();
  // }, [isOpen]);

  // const { ref, inView } = useInView({
  //   threshold: 1,
  // });
  //
  // console.log("inView", inView);

  return (
    <SwipeableDrawer
      open={isOpen}
      onClose={toggleDrawer}
      onOpen={toggleDrawer}
      // ref={ref}
    >
      <nav>
        <ul className="flex flex-col space-y-4 px-10 py-4 mt-20">
          {navigationItems.map(({ name, href }, index) => (
            <li key={name} data-aos={"fade-up"} data-aos-delay={index * 100}>
              <Link href={href} onClick={toggleDrawer}>
                <Text type={"header"} className={"font-medium"}>
                  {name}
                </Text>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </SwipeableDrawer>
  );
};

export default Drawer;
