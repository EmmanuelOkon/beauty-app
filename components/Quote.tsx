import Image from "next/image";
import React from "react";

const Quote = () => {
  return (
    <div className="wrapper">
      <div className="text-center mx-auto max-w-[1128px] py-10 ">
        <div className="flex justify-end pr-44 ">
          <Image
            src="/assets/images/quoteBall.png"
            width={100}
            height={100}
            alt="quoteBall"
            className="w-[67px] h-auto "
          />
        </div>
        <p className="text-4xl max-w-[896px] mx-auto text-primary leading6 tracking-wider wordspacing ">
          Beauty is part of women&apos;s privileges still do body care to always
          maintain your beautiful features. Let&apos;s join other women to get
          products from the latest Brand.
        </p>
        <div className="flex justify-start pl-56 ">
          <Image
            src="/assets/images/quoteBall.png"
            width={100}
            height={100}
            alt="quoteBall"
            className="w-[67px] h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Quote;
