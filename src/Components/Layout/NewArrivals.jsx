
import React from "react";
import { useEffect, useState, useRef } from "react";
import Product from "../Common/Product";
import Container from "../Common/Container";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const SlickSlider = Slider.default ? Slider.default : Slider;
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

function NewArrivals() {
  // Slick Slider
  const sliderRef = useRef(null);
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000,
    speed: 500,
    pauseOnHover: true,
  };

  // Slick Slider

  let [allData, setAllData] = useState([]);

  useEffect(() => {
    async function alldatas() {
      let data = await axios.get("https://dummyjson.com/products");
      setAllData(data.data.products);
    }
    alldatas();
  }, []);

  return (
    <div className="py-8">
      <Container>
        <div className="px-3 relative">
            <h3 className="text-[24px] text-mainclr font-bold mb-4">New Arrivals</h3>
          <SlickSlider ref={sliderRef} {...settings}>
            {allData.map((item) => (
              <div className="w-[23%]">
                <Product
                  productImg={item.thumbnail}
                  badgeName={`-$${item.discountPercentage}%`}
                  productTitle={item.title}
                  productprice={`$${item.price}`}
                />
              </div>
            ))}
          </SlickSlider>
          <button
            onClick={() => sliderRef.current.slickPrev()}
            className="absolute left-0 top-1/2 -translate-y-1/2 text-[30px] text-red-500 py-1 px-1 rounded-3xl bg-secondary"
          >
            <HiChevronLeft />
          </button>

          <button
            onClick={() => sliderRef.current.slickNext()}
            className="absolute right-0 top-1/2 -translate-y-1/2 text-[30px] text-red-500 py-1 px-1 rounded-3xl bg-secondary"
            id="nextArrow"
          >
            <HiChevronRight />
          </button>
        </div>
      </Container>
    </div>
  );
}

export default NewArrivals;
