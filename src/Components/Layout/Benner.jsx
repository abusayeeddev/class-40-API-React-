<<<<<<< HEAD
import React, { useRef } from "react";
import Container from "/src/Components/Common/Container";
import Images from "../Common/Images";
import bennerimg from "/src/assets/bennerImg.png";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import Flex from "../Common/Flex";
import { RiNumber2 } from "react-icons/ri";
import { Link } from "react-router-dom";
import { FaCarSide, FaUndo } from "react-icons/fa";

const SlickSlider = Slider.default ? Slider.default : Slider;
function Benner() {
  const sliderRef = useRef(null);
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1500,
    speed: 1000,
    pauseOnHover: true,
  };

  return (
    <>
      <div>
      <SlickSlider ref={sliderRef} {...settings}>
        <div className="w-full outline-none">
          <Images src={bennerimg} className={`w-full block`} />
        </div>
        <div className="w-full outline-none">
          <Images src={bennerimg} className={`w-full block`} />
        </div>
        <div className="w-full outline-none">
          <Images src={bennerimg} className={`w-full block`} />
        </div>
        <div className="w-full outline-none ">
          <Images src={bennerimg} className={`w-full block`} />
        </div>
        <div className="w-full outline-none">
          <Images src={bennerimg} className={`w-full block`} />
        </div>
      </SlickSlider>
      <button
        onClick={() => sliderRef.current.slickPrev()}
        className="absolute left-0 top-1/2 -translate-y-1/2 text-[30px] text-mainclr py-1 px-1 rounded-3xl bg-secondary"
      >
        <HiChevronLeft />
      </button>

      <button
        onClick={() => sliderRef.current.slickNext()}
        className="absolute right-0 top-1/2 -translate-y-1/2 text-[30px] text-mainclr py-1 px-1 rounded-3xl bg-secondary"
        id="nextArrow"
      >
        <HiChevronRight />
      </button>
    </div>


    <div className=" py-7.5  border-b border-textclr">
        <Container>
          <Flex className={`justify-between px-5 `}>
            <Link className="flex items-center gap-1 text-[18px] font-bold text-backcolor">
              <RiNumber2 />
              <span className="text-textclr text-[16px] font-medium">
                Two years warranty
              </span>
            </Link>
            <Link className="flex items-center gap-1 text-[18px] font-bold text-backcolor">
              <FaCarSide />
              <span className="text-textclr text-[16px] font-medium">
                Free shipping
              </span>
            </Link>
            <Link className="flex items-center gap-1 text-[18px] font-bold text-backcolor">
              <FaUndo />
              <span className="text-textclr text-[16px] font-medium">
                Return policy in 30 days
              </span>
            </Link>
          </Flex>
        </Container>
      </div>
    </>
  );
}

export default Benner;
=======
import React, { useRef } from "react";
import Container from "/src/Components/Common/Container";
import Images from "../Common/Images";
import bennerimg from "/src/assets/bennerImg.png";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import Flex from "../Common/Flex";
import { RiNumber2 } from "react-icons/ri";
import { Link } from "react-router-dom";
import { FaCarSide, FaUndo } from "react-icons/fa";

const SlickSlider = Slider.default ? Slider.default : Slider;
function Benner() {
  const sliderRef = useRef(null);
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1500,
    speed: 1000,
    pauseOnHover: true,
  };

  return (
    <>
      <div>
      <SlickSlider ref={sliderRef} {...settings}>
        <div className="w-full outline-none">
          <Images src={bennerimg} className={`w-full block`} />
        </div>
        <div className="w-full outline-none">
          <Images src={bennerimg} className={`w-full block`} />
        </div>
        <div className="w-full outline-none">
          <Images src={bennerimg} className={`w-full block`} />
        </div>
        <div className="w-full outline-none ">
          <Images src={bennerimg} className={`w-full block`} />
        </div>
        <div className="w-full outline-none">
          <Images src={bennerimg} className={`w-full block`} />
        </div>
      </SlickSlider>
      <button
        onClick={() => sliderRef.current.slickPrev()}
        className="absolute left-0 top-1/2 -translate-y-1/2 text-[30px] text-mainclr py-1 px-1 rounded-3xl bg-secondary"
      >
        <HiChevronLeft />
      </button>

      <button
        onClick={() => sliderRef.current.slickNext()}
        className="absolute right-0 top-1/2 -translate-y-1/2 text-[30px] text-mainclr py-1 px-1 rounded-3xl bg-secondary"
        id="nextArrow"
      >
        <HiChevronRight />
      </button>
    </div>


    <div className=" py-7.5  border-b border-textclr">
        <Container>
          <Flex className={`justify-between px-5 `}>
            <Link className="flex items-center gap-1 text-[18px] font-bold text-backcolor">
              <RiNumber2 />
              <span className="text-textclr text-[16px] font-medium">
                Two years warranty
              </span>
            </Link>
            <Link className="flex items-center gap-1 text-[18px] font-bold text-backcolor">
              <FaCarSide />
              <span className="text-textclr text-[16px] font-medium">
                Free shipping
              </span>
            </Link>
            <Link className="flex items-center gap-1 text-[18px] font-bold text-backcolor">
              <FaUndo />
              <span className="text-textclr text-[16px] font-medium">
                Return policy in 30 days
              </span>
            </Link>
          </Flex>
        </Container>
      </div>
    </>
  );
}

export default Benner;
>>>>>>> f2c0f3bf682d69f5c539a4b7a36953d8361939cb
