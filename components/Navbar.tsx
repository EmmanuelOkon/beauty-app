// import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

import NavItems from "./NavItems";
import MobileNav from "./MobileNav";

import { Button } from "./ui/button";
import { Icons } from "../public/assets/icons";

const Navbar = () => {
  return (
    <header className="w-full">
      <div className="flex items-center justify-between max-w-7xl p-4 lg:mx-auto px-4 md:px-10 xl:px-0 lg:px10 lg:py10 ">
        <div className="max-w-7xl py4  lg:mx-auto lg:p5 lg:px10 xl:px-0 w-full flex items-center lg:gap[20px] max-w[594px] ">
          <Link href="/">
            <Image
              src="/assets/images/beautyGreyLogo.png"
              width={60}
              height={60}
              alt=""
              className="md:w-16 w-10"
            />
          </Link>
        </div>
        <div className="hidden md:flex items-center justify-end">
          <NavItems />
        </div>
        <MobileNav />
      </div>
    </header>
  );
};

export default Navbar;
