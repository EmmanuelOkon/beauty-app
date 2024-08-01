import Image from "next/image";
import React from "react";
import { LayoutGrid } from "./LayoutGrid";
import { Icons } from "@/public/assets/icons";



const Makeup = () => {
  return (
    <section className="mt-40">
      <div>
        <Image
          src="/assets/images/makeup.png"
          width={1000}
          height={1000}
          alt="makeup"
          className="lg:w-[818px] h-auto "
        />
      </div>
    </section>
  );
};

export default Makeup;
