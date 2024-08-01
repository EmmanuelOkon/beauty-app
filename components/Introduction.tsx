import Image from "next/image";
import React from "react";

const Introduction = () => {
  return (
    <div className="wrapper">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between p-4 px-4 md:px-10 xl:px-0 md:p20 ">
        <div className="w-full md:w-1/2  ">
          <Image
            src="/assets/images/femaleGettingLaser.png"
            width={1000}
            height={1000}
            alt="femaleGettingLaser"
            className="w-full pt-6 md:pt-0 md:w-[510px] md:h-[310px] "
          />
        </div>
        <div className="w-full md:w-1/2">
          <span className="text-[16px] text-black ">We Provide</span>
          <h1 className="text-primary header text-[32px] font-bold ">
            Welcome to Spa Center
          </h1>
          <p className="text-primary text-[16px] pb-10">
            Spread over two floors, our beautiful spa offer a soothing
            environment in which you can rest, relax and feel completely
            rejuvenated.
          </p>
          <p className="text-primary text-[16px] ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. remaining
            essentially unchanged. It was popularized in the with theLorem Ipsum
            is simply dummy text of the printing and eentially unchanged.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
