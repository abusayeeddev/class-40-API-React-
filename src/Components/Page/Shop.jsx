
import React, { useEffect, useState } from "react";

import axios from "axios";
import Flex from "../Common/Flex";
import Product from "../Common/Product";
import Container from "../Common/Container";

const Shop = () => {
  let [allData, setAllData] = useState([]);

  useEffect(() => {
    async function alldatas() {
      let data = await axios.get("https://dummyjson.com/products");
      setAllData(data.data.products);
    }
    alldatas();
  }, []);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    
    const loadings = async () => {
      setLoading(true); 
    
      const response = await axios.get("https://dummyjson.com/products");
      setTimeout(() => {
        setAllData(response.data.products); 
        setLoading(false); 
      }, 1000);
    };

    loadings();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-3xl font-bold">Loading Products...</h1>
      </div>
    );
  }

  return (
    <div className="py-10">
      <Container>
        <Flex className={`gap-6 items-start`}>

          {/* ===== Sidebar ===== */}
          <div className="w-[25%]">

            {/* Category */}
            <div>
              <h3 className="font-bold mb-3">Shop by Category</h3>
              <ul className="space-y-2 text-gray-500 text-sm">
                <li className="hover:text-black cursor-pointer">beauty</li>
                <li className="hover:text-black cursor-pointer">fragrances</li>
                <li className="hover:text-black cursor-pointer">furniture</li>
                <li className="hover:text-black cursor-pointer">groceries</li>
              </ul>
            </div>

            {/* Brand */}
            <div className="mt-6">
              <h3 className="font-bold mb-3">Shop by Brand</h3>
              <ul className="space-y-2 text-gray-500 text-sm">
                <li className="hover:text-black cursor-pointer">Essence</li>
                <li className="hover:text-black cursor-pointer">Glamour Beauty</li>
                <li className="hover:text-black cursor-pointer">Velvet Touch</li>
                <li className="hover:text-black cursor-pointer">Chic Cosmetics</li>
                <li className="hover:text-black cursor-pointer">Calvin Klein</li>
                <li className="hover:text-black cursor-pointer">Chanel</li>
              </ul>
            </div>

            {/* Price */}
            <div className="mt-6">
              <h3 className="font-bold mb-3">Shop by Price</h3>
              <ul className="space-y-2 text-gray-500 text-sm">
                <li className="hover:text-black cursor-pointer ">$0 - $10</li>
                <li className="hover:text-black cursor-pointer">$10 - $50</li>
                <li className="hover:text-black cursor-pointer">$50 - $100</li>
              </ul>
            </div>

          </div>

          {/* ===== Product Grid ===== */}
          <div className="w-[75%]">
            <div className="grid grid-cols-3 gap-3">
              {allData.map((item) => (
                <Product
                  productImg={item.thumbnail}
                  badgeName={`-$${item.discountPercentage}%`}
                  productTitle={item.title}
                  productprice={`$${item.price}`}
                />
              ))}
            </div>
          </div>

        </Flex>
      </Container>
    </div>
  );
};

export default Shop;
