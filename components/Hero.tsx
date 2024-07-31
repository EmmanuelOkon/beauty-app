import React from "react";
import Navbar from "./Navbar";
import { Icons } from "../public/assets/icons";
import Image from "next/image";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="bg-[#FEF3E2] relativ sm:h-screen bg-none lg:h-[1024px]  md:bg-[url('/assets/images/heroBg.png')] bg-no-repeat bg-right bg-contain">
      <Navbar />
      <section className="flex wrappe  ">
        <section className=" max-w-[636px] max-h-[1024px] md:p-10  ">
          <span className="text-[18px]  ">We can help your problem</span>
          <h1 className="text-primary header font-bold text-[46px] lg:text-[85px] leading-none tracking-normal relative ">
            Maximize your bright&nbsp;face&nbsp;with clean skin{" "}
            <span className="absolute bottom-0 w-10 ">
              <Icons.sun />
            </span>{" "}
          </h1>
          <p className="pt-5 text-[18px]  text-[#565656] ">
            Get a skinseed product right away to make your skin bright again.
            suitable for those of you who often go out in the sun using a cream
            that doesn&apos;t fade easily
          </p>
        </section>

        {/* <Image
          src="/assets/images/heroBg.png"
          height={1000}
          width={1000}
          alt="patient"
          className=" bottom-0 side-img max-w-[50%]"
        /> */}
      </section>
    </div>
  );
};

export default Hero;
