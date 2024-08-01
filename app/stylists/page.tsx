import Image from "next/image";
import Link from "next/link";
import { stylists } from "@/constants";
import { Icons } from "@/public/assets/icons";

const Stylists = () => {
  return (
    <div className=" bg-[#F7F9FC]">
      <div className="px-[20px] pb-6 lg:px-[45px] xl:px-[100px] lg:py-10 mx-auto">
        <div className="py-6">
          <h2 className="text-2xl lg:text-4xl font-bold text-greyBlack text-center py-3 header">
            Our Stylists
          </h2>
          <div className="flex justify-center mx-auto w-[120px] text-center">
            <span className="border-2 border-primary w-full"></span>
          </div>
        </div>
        <div className="hidde grid grid-cols-1 lg:max-w7xl 2xl:max-w-[1560px] mx-auto px-2 pb-10">
          <div className="w-full w[375px] h[471px] grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {stylists.map((stylist) => (
              <Link
                href="/"
                // href={`/product/${product.name
                //   .replace(/\s+/g, "-")
                //   .toLowerCase()}`}
                key={stylist.name}
                className=" pb-2 lg:pb-8 text-left md:w-[375px] md:h-[471px] bg-white hover:bg-lemonGreen hover:bg-opacity-40 cursor-pointer "
              >
                <div className="flex justify-center">
                  <div className="w-[373px] h-[373px] flex justify-center">
                    <Image
                      width={1000}
                      height={1000}
                      src={`/assets/images/${stylist.image}.png`}
                      className="w-full h-full text-green"
                      alt={stylist.name}
                    />
                  </div>
                </div>
                <div className="px-4">
                  <div className="pt-4 lg:pt-6 flex items-center justify-between">
                    <h3 className=" text-primary text-[18px] md:text-[20px] font-semibold tracking-tighter header">
                      {stylist.name}
                    </h3>
                    
                  </div>
                  <div className="flex gap-1 items-end pt-2">
                    <div className="flex justifybetween w-full items-center gap-3">
                      <span className="text-black text-[14px]">
                        {stylist.role}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stylists;
