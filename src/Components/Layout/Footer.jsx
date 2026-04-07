<<<<<<< HEAD
import React from "react";
import Container from "../Common/Container";
import Flex from "../Common/Flex";
import { Link } from "react-router-dom";
import Images from "../Common/Images";
import logo from "../../assets/Logo .png";

const Footer = () => {
  return (
    <div>
      <div className="bg-[#F5F5F3]">
        <Container>
          <Flex className={`py-12.5`}>
            <div className="w-[20%] text-left pl-20 ">
              <h3 className="text-[18px] text-textclr font-bold mb-5">Menu</h3>
              <ul className="flex flex-col gap-5 text-left">
                <li>
                  <Link
                    to="/"
                    className="text-[14px] text-secondary font-bold hover:text-mainclr duration-300"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/shop"
                    className="text-[14px] text-secondary font-bold hover:text-mainclr duration-300"
                  >
                    Shop
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-[14px] text-secondary font-bold hover:text-mainclr duration-300"
                  >
                    About
                  </Link>
                </li>

                <li>
                  <Link
                    to="/contact"
                    className="text-[14px] text-secondary font-bold hover:text-mainclr duration-300"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-[14px] text-secondary font-bold hover:text-mainclr duration-300"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="w-[20%] text-left pl-20 ">
              <h3 className="text-[18px] text-textclr font-bold mb-5">SHOP</h3>
              <ul className="flex flex-col gap-5 text-left">
                <li>
                  <Link
                    to="/"
                    className="text-[14px] text-secondary font-bold hover:text-mainclr duration-300"
                  >
                    Category 1
                  </Link>
                </li>
                <li>
                  <Link
                    to="/shop"
                    className="text-[14px] text-secondary font-bold hover:text-mainclr duration-300"
                  >
                    Category 2
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-[14px] text-secondary font-bold hover:text-mainclr duration-300"
                  >
                    Category 3
                  </Link>
                </li>

                <li>
                  <Link
                    to="/contact"
                    className="text-[14px] text-secondary font-bold hover:text-mainclr duration-300"
                  >
                    Category 4
                  </Link>
                </li>

                <li>
                  <Link
                    to="/contact"
                    className="text-[14px] text-secondary font-bold hover:text-mainclr duration-300"
                  >
                    Category 5
                  </Link>
                </li>
              </ul>
            </div>

            <div className="w-[20%] text-left pl-20">
              <h3 className="text-[18px] text-textclr font-bold mb-5">HELP</h3>
              <ul className="flex flex-col gap-5 text-left">
                <li>
                  <Link
                    to="/"
                    className="text-[14px] text-secondary font-bold hover:text-mainclr duration-300"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/shop"
                    className="text-[14px] text-secondary font-bold hover:text-mainclr duration-300"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-[14px] text-secondary font-bold hover:text-mainclr duration-300"
                  >
                    Special E-shop
                  </Link>
                </li>

                <li>
                  <Link
                    to="/contact"
                    className="text-[14px] text-secondary font-bold hover:text-mainclr duration-300"
                  >
                    Shipping
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-[14px] text-secondary font-bold hover:text-mainclr duration-300"
                  >
                    Secure Payments
                  </Link>
                </li>
              </ul>
            </div>

            <div className="w-[20%] text-left">
              <h3 className="text-[18px] text-textclr font-bold mb-5 -mt-30">
                01619523372
              </h3>
              <h4 className="text-[14px] text-mainclr font-bold pb-5">
                abusayeedkawser04@gmail.com
              </h4>
              <p className="text-[12px] text-secondary">
                575 Crescent Ave. Quakertown, PA 18951
              </p>
            </div>

            <div className="w-[20%] ">
              <Link to={"/"}>
                <Images className={` -mt-30`} src={logo} />
              </Link>
            </div>
          </Flex>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
=======
import React from "react";
import Container from "../Common/Container";
import Flex from "../Common/Flex";
import { Link } from "react-router-dom";
import Images from "../Common/Images";
import logo from "../../assets/Logo .png";

const Footer = () => {
  return (
    <div>
      <div className="bg-[#F5F5F3]">
        <Container>
          <Flex className={`py-12.5`}>
            <div className="w-[20%] text-left pl-20 ">
              <h3 className="text-[18px] text-textclr font-bold mb-5">Menu</h3>
              <ul className="flex flex-col gap-5 text-left">
                <li>
                  <Link
                    to="/"
                    className="text-[14px] text-secondary font-bold hover:text-mainclr duration-300"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/shop"
                    className="text-[14px] text-secondary font-bold hover:text-mainclr duration-300"
                  >
                    Shop
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-[14px] text-secondary font-bold hover:text-mainclr duration-300"
                  >
                    About
                  </Link>
                </li>

                <li>
                  <Link
                    to="/contact"
                    className="text-[14px] text-secondary font-bold hover:text-mainclr duration-300"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-[14px] text-secondary font-bold hover:text-mainclr duration-300"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="w-[20%] text-left pl-20 ">
              <h3 className="text-[18px] text-textclr font-bold mb-5">SHOP</h3>
              <ul className="flex flex-col gap-5 text-left">
                <li>
                  <Link
                    to="/"
                    className="text-[14px] text-secondary font-bold hover:text-mainclr duration-300"
                  >
                    Category 1
                  </Link>
                </li>
                <li>
                  <Link
                    to="/shop"
                    className="text-[14px] text-secondary font-bold hover:text-mainclr duration-300"
                  >
                    Category 2
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-[14px] text-secondary font-bold hover:text-mainclr duration-300"
                  >
                    Category 3
                  </Link>
                </li>

                <li>
                  <Link
                    to="/contact"
                    className="text-[14px] text-secondary font-bold hover:text-mainclr duration-300"
                  >
                    Category 4
                  </Link>
                </li>

                <li>
                  <Link
                    to="/contact"
                    className="text-[14px] text-secondary font-bold hover:text-mainclr duration-300"
                  >
                    Category 5
                  </Link>
                </li>
              </ul>
            </div>

            <div className="w-[20%] text-left pl-20">
              <h3 className="text-[18px] text-textclr font-bold mb-5">HELP</h3>
              <ul className="flex flex-col gap-5 text-left">
                <li>
                  <Link
                    to="/"
                    className="text-[14px] text-secondary font-bold hover:text-mainclr duration-300"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/shop"
                    className="text-[14px] text-secondary font-bold hover:text-mainclr duration-300"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-[14px] text-secondary font-bold hover:text-mainclr duration-300"
                  >
                    Special E-shop
                  </Link>
                </li>

                <li>
                  <Link
                    to="/contact"
                    className="text-[14px] text-secondary font-bold hover:text-mainclr duration-300"
                  >
                    Shipping
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-[14px] text-secondary font-bold hover:text-mainclr duration-300"
                  >
                    Secure Payments
                  </Link>
                </li>
              </ul>
            </div>

            <div className="w-[20%] text-left">
              <h3 className="text-[18px] text-textclr font-bold mb-5 -mt-30">
                01619523372
              </h3>
              <h4 className="text-[14px] text-mainclr font-bold pb-5">
                abusayeedkawser04@gmail.com
              </h4>
              <p className="text-[12px] text-secondary">
                575 Crescent Ave. Quakertown, PA 18951
              </p>
            </div>

            <div className="w-[20%] ">
              <Link to={"/"}>
                <Images className={` -mt-30`} src={logo} />
              </Link>
            </div>
          </Flex>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
>>>>>>> f2c0f3bf682d69f5c539a4b7a36953d8361939cb
