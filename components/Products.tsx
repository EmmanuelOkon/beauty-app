import Image from "next/image";
import Link from "next/link";
import { products } from "@/constants";
import { Icons } from "@/public/assets/icons";

const Products = () => {
  return (
    <div className="pt- md:mt- bg-[#F7F9FC]">
      <div className="px-[20px] pb-6 lg:px-[45px] xl:px-[100px] lg:py-10 bg- mx-auto">
        <div className="py-6">
          <h2 className="text-2xl lg:text-4xl font-bold text-greyBlack text-center py-3 header">
            Featured Products
          </h2>
          <div className="flex justify-center mx-auto w-[120px] text-center">
            <span className="border-2 border-primary w-full"></span>
          </div>
        </div>
        <div className="lg:max-w-7xl 2xl:max-w-[1560px] mx-auto px-2 pb-10">
          <div className="flex overflow-x-scroll md:overflow-hidden lg:grid lgrid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols4">
            {products.map((product) => (
              <Link
                href={`/product/${product.name
                  .replace(/\s+/g, "-")
                  .toLowerCase()}`}
                key={product.name}
                className=" pb-2 lg:pb-8 text-left w-[375px] h-[471px] bg-white hover:bg-lemonGreen hover:bg-opacity-40 cursor-pointer "
              >
                <div className="flex justify-center">
                  <div className="w-[373px] h-[373px] flex justify-center">
                    <Image
                      width={1000}
                      height={1000}
                      src={`/assets/images/${product.image}.png`}
                      className="w-full h-full text-green"
                      alt={product.name}
                    />
                  </div>
                </div>
                <div className="px-4">
                  <div className="pt-4 lg:pt-6 flex items-center justify-between">
                    <h3 className=" text-primary text-[18px] md:text-[20px] font-semibold tracking-tighter header">
                      {product.name}
                    </h3>
                    <div className="flex gap-1 items-center">
                      <Icons.Star />
                      <span>{product.star}</span>
                    </div>
                  </div>
                  <div className="flex gap-1 items-end pt-2">
                    <div className="flex justifybetween w-full items-center gap-3">
                      <span className="text-black text-[14px] line-through">
                        {product.discount}
                      </span>
                      <span className="text-[#FF0000] text-[16px] bg-red-200 px-2 py-1 rounded-[8px] font-medium ">
                        {product.percent}
                      </span>
                    </div>
                    <p className="text[#475367] text[20px] font-semibold text-lemonGreen fontmedium text-[16px]">
                      <span className="text-[#FF7A00] pr-1">$</span>
                      {product.price}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="flex justify-center">
          <Link
            href="#"
            className="bg-[#221E42] hover:bg-primary-500   text-white py-3 px-8 rounded-none"
          >
            Browse all products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Products;
