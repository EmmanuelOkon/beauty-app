"use client";

import React from "react";
import { headerLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { Icons } from "@/public/assets/icons";

const NavItems = () => {
  const pathname = usePathname();

  return (
    <>
      <ul className="md:flex-between flex w-full flex-col items-start gap-4 md:flex-row">
        {headerLinks.map((link) => {
          const isActive = pathname === link.route;

          return (
            <li
              key={link.route}
              className={`${
                isActive && "text-primary -500"
              } flex-center p-medium-16 whitespace-nowrap`}
            >
              <Link href={link.route}>{link.label}</Link>
            </li>
          );
        })}
      </ul>
      <Button
        asChild
        className="flex lg:hidden rounded-none hover: border-2 border-black p-2 bg-transparent text-[18px] text-black "
        size="lg"
      >
        <Link href="/" className="flex gap-2">
          Product Trailer
          <Icons.playIcon />
        </Link>
      </Button>
    </>
  );
};

export default NavItems;
