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
      <div className="md:flex gap-6 md:justify-between">
        <ul className="md:flex-between flex w-full flex-col items-start gap-4 md:flex-row">
          {headerLinks.map((link) => {
            const isActive = pathname === link.route;

            return (
              <li
                key={link.route}
                className={`${
                  isActive && "text-primary font-bold border-b-2 border-primary"
                } flex-center p-medium-16 whitespace-nowrap hover:border-b-2 hover:border-primary `}
              >
                <Link href={link.route}>{link.label}</Link>
              </li>
            );
          })}
        </ul>
        <Button
          asChild
          className="mt-6 md:mt-0 flex lghidden rounded-none border-2 hover:text-white border-black p-2 bg-transparent text-[18px] text-black "
          size="lg"
        >
          <Link href="/" className="flex gap-2">
            Product Trailer
            <Icons.playIcon />
          </Link>
        </Button>
      </div>
    </>
  );
};

export default NavItems;
