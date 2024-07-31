import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";

import NavItems from "./NavItems";

import { Separator } from "./ui/separator";
import { Icons } from "@/public/assets/icons";
import { X } from "lucide-react";

const MobileNav = () => {
  return (
    <nav className="md:hidden">
      <Sheet>
        <SheetTrigger className="align-middle">
          <Icons.Menu />
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-6 bg-white lg:hidden">
          <div className="flex justify-between items-center w-full">
            <Image
              src="/assets/images/logo.svg"
              alt="logo"
              width={128}
              height={38}
            />

            <SheetClose>
              <X className="h-8 w-8" />
            </SheetClose>
          </div>
          <Separator className="border border-gray-50" />
          <NavItems />
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
