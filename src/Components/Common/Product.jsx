import React from "react";
import Images from "./Images";
import Bedge from "./Bedge";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";

const Product = ({ productImg, badgeName, productTitle, productprice, className }) => {
  return (
    <div className="relative w-75 h-90 rounded-lg shadow-lg overflow-hidden group">
      <Images src={productImg} className={`w-full object-cover ${className}`} />
      <Bedge badgeName={badgeName} className={`absolute top-3 left-3 `} />
      <h3 className={`text-mainclr font-bold text-[18px] pl-2`}>
        {productTitle}
      </h3>
      <p className={`text-[#767676] text-[16px] pl-3`}>{productprice}</p>

      <div className="absolute bottom-15 left-0 w-full bg-white/90 p-4 flex flex-col items-end gap-2 transform translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100">
          <div className="flex items-center gap-3 text-[#767676] hover:text-black cursor-pointer font-normal text-sm">
            Add to Wish List <FaHeart />
          </div>
          <div className="flex items-center gap-3 text-[#767676] hover:text-black cursor-pointer font-normal text-sm">
            Compare <TfiReload />
          </div>
          <div className="flex items-center gap-3 text-black font-bold cursor-pointer text-sm">
            Add to Cart <FaShoppingCart />
          </div>
        </div>
      
    </div>
  );
};

export default Product;
