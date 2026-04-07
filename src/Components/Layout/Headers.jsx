
import React, { useState } from "react";
import Container from "/src/Components/Common/Container";
import Images from "../Common/Images";
import logo from "/src/assets/Logo .png";
import Flex from "../Common/Flex";
import { Link } from "react-router-dom";
import { HiMenuAlt1 } from "react-icons/hi";
import { CiSearch } from "react-icons/ci";
import { FaCaretDown, FaShoppingCart, FaUser } from "react-icons/fa";

const Headers = () => {
    const [show, setShow ]= useState(false);
    const handleShow = () => {
        setShow(!show);
    } 

  return (
    <>
      <div className="py-5">
        <Container>
          <Flex>
            <div className="w-[40%]">
              <Images src={logo} />
            </div>
            <div className="w-[60%]">
              <ul className="flex gap-5 items-center font-DMsans text-mainclr ">
                <li>
                  <Link
                    to="/"
                    className="text-secondary font-DMsans font-bold duration-200 hover:text-mainclr "
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/shop"
                    className="text-secondary font-DMsans font-bold duration-200 hover:text-mainclr "
                  >
                    Shop
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-secondary font-DMsans font-bold duration-200 hover:text-mainclr "
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-secondary font-DMsans font-bold duration-200 hover:text-mainclr "
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </Flex>
        </Container>
      </div>

      <div className="py-5 border-y border-2 border-[#979797] bg-[#F5F5F3]">
        <Container>
          <Flex className={`justify-between`}>
            <div className="">
              <Link onClick={handleShow} className="text-secondary font-bold text-[14px] hover:text-mainclr duration-200 flex items-center ">
                {" "}
                <span className="text-mainclr text-[20px] pr-2">
                  <HiMenuAlt1 />
                </span>
                Shop by Category
              </Link>
            </div>
            <div className="relative ">
              <input
                className="w-120 py-2 px-3 bg-white rounded-md focus:outline-none"
                placeholder="Search By Category"
              />
              <CiSearch className="text-2xl absolute right-5 top-1/2 -translate-y-1/2" />
            </div>
            <div className="flex items-center gap-x-4">
              <div className="flex items-center">
                <FaUser />
                <FaCaretDown />
              </div>
              <FaShoppingCart />
            </div>
          </Flex>

        {show && (
          <div className="w-70 z-1 bg-mainclr/80 py-5 px-4 text-center absolute "> 
            <ul className=" items-center font-DMsans text-mainclr ">
              <li>
                <Link
                  to="/"
                  className="text-txt font-DMsans font-bold duration-200  relative before:content-[''] before:w-0 before:h-0.5 before:bg-txt  before:absolute before:left-0 before:bottom-0 before:duration-300 hover:before:w-full "
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  className="text-txt font-DMsans font-bold duration-200  relative before:content-[''] before:w-0 before:h-0.5 before:bg-txt  before:absolute before:left-0 before:bottom-0 before:duration-300 hover:before:w-full "
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-txt font-DMsans font-bold duration-200  relative before:content-[''] before:w-0 before:h-0.5 before:bg-txt  before:absolute before:left-0 before:bottom-0 before:duration-300 hover:before:w-full "
                >
                  About
                </Link>
              </li>
              <li >
                <Link
                  to="/contact" className="text-txt font-DMsans font-bold duration-200  relative before:content-[''] before:w-0 before:h-0.5 before:bg-txt  before:absolute before:left-0 before:bottom-0 before:duration-300 hover:before:w-full">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
           )}
        </Container>
      </div>
    </>
  );
};

export default Headers;
