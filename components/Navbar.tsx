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
      <div className="flex items-center max-w-7xl lg:mx-auto px-4 md:px-10 xl:px-0">
        <div className="max-w-7xl py-4 lg:mx-auto lg:p-5 lg:px-10 xl:px-0 w-full flex items-center lg: gap-[40px] max-w[594px] ">
          <Link href="/" className="w-16">
            <Icons.logo />
          </Link>

          <nav className="md:flex-between hidden w-full max-w-xs">
            <NavItems />
          </nav>
        </div>
        <div>
          <div className="flex items-center w-32 justify-end gap-3">
            <MobileNav />

            <Button
              asChild
              className="hidden lg:flex rounded-none hover: border-2 border-black p-2 bg-transparent text-[18px] text-black "
              size="lg"
            >
              <Link href="/" className="flex gap-2">
                Product Trailer
                <Icons.playIcon />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
