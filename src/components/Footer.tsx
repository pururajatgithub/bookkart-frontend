"use client"
import React from "react";
import Image from "next/image";
import Bookkartlogo from "../../public/Bookkartlogo.jpg";
import { FaFacebook, FaTwitter, FaLinkedin, FaPinterest, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#424242] text-[#C7C7C7]">
      <div className="grid grid-cols-4 h-6/7">
        {/* First column */}
        <div className="col-span-1 py-4 px-4">
          <Image src={Bookkartlogo} alt="Logo" className="rounded-lg" width={157} height={118} />
          <div style={{ color: "#C7C7C7" }}>
            BookKart is a customer-to-customer platform like Olx for books.
            Our main objective is to bridge the communication gap between book sellers and buyers/renters, reducing the cost of books and sharing knowledge.
          </div>
        </div>
        {/* Second column */}
        <div className="col-span-1 border-l border-white-500 p-8">
          <div style={{ color: "#C7C7C7" }}>
            <ul>
              <li ><b>Company</b> </li><br />
              <li className="hover:text-[#FF6D6D] hover:cursor-pointer">About us</li>
              <li className="hover:text-[#FF6D6D] hover:cursor-pointer"> Contact us</li>
              <li className="hover:text-[#FF6D6D] hover:cursor-pointer">Terms and conditions</li>
              <li className="hover:text-[#FF6D6D] hover:cursor-pointer">Shipping Policy</li>
              <li className="hover:text-[#FF6D6D] hover:cursor-pointer">Privacy Policy</li>
            </ul>
          </div>
        </div>
        {/* Third column */}
        <div className="col-span-1 border-l border-white-500 p-8">
          <div style={{ color: "#C7C7C7" }}>
            <ul>
              <li >Quick links</li><br />
              <li className="hover:text-[#FF6D6D] hover:cursor-pointer">Home</li>
              <li className="hover:text-[#FF6D6D]  hover:cursor-pointer">Events</li>
              <li className="hover:text-[#FF6D6D] hover:cursor-pointer">Book Store</li>
              <li className="hover:text-[#FF6D6D] hover:cursor-pointer">Category</li>
            </ul>
          </div>
        </div>
        {/* Fourth column */}
        <div className="col-span-1 border-l border-white-500 p-8">
          <div>
            <div style={{ color: "#C7C7C7" }}>
              Details<br />
              <br />
              Connect with us<br />
              <br />
            </div>
            <div style={{ color: "#C7C7C7" }}>
              Email: customer@bookkart.com<br />
              Phone: +91 86520 50510 (9AM to 6PM)
            </div>
          </div>
          <div className="flex">
            <a href="https://www.facebook.com">
              <FaFacebook className="text-white mr-2" size={20} />
            </a>
            <a href="https://www.twitter.com">
              <FaTwitter className="text-white mr-2" size={20} />
            </a>
            <a href="https://www.linkedin.com">
              <FaLinkedin className="text-white mr-2" size={20} />
            </a>
            <a href="https://www.pintrest.com">
              <FaPinterest className="text-white mr-2" size={20} />
            </a>
            <a href="https://www.instragram.com">
              <FaInstagram className="text-white" size={20} />
            </a>
          </div>
        </div>
      </div>
      {/* Second row */}
      <div className="h-1/7">
        <div style={{ padding: "10px 0" }}>
          <hr style={{ backgroundColor: "#424242", height: "1px", border: "none" }} />
        </div>
        <div style={{ textAlign: "center", color: "#FFF1F1" }}>
          &copy; 2023 BookKart All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;