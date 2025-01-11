"use client"
import productImage from "@/assets/product-image.png";
import pyramidImage from "@/assets/pyramid.png";
import Image from "next/image";
import tubeImage from "@/assets/tube.png";
import {motion} from "framer-motion";

export const ProductShowcase = () => {
  return(
    <section className="bg-gradient-to-b from-[#ffffff] to-[#d2dcff] py-24 overflow-x-clip">
      <div className="container">
        <div className="section-heading">
        <div className="flex justify-center" >
          <div className="tag">
            Enhance Your Productivity
          </div>
        </div>
        <h2 className="section-title mt-5 ">An efficient method to monitor progress</h2>
        <p className="text-center text-[22px] leading-[30px] tracking-tight text-green-950">
          Embrace new technology to grow your business, 
          save time, reach more customers, and stay competitive
        </p>
        </div>
        <div className="relative">
        <Image src={productImage} alt="Product Image" className="mt-10" />
        <Image src={pyramidImage} alt="Product Image" height={265} width={262} className="hidden md:block absolute -right-36 -top-32"/>
        <Image src={tubeImage} alt="Product Image" height={248} className="hidden md:block absolute bottom-24 -left-36"/>
        </div>
      </div>
    </section>
  )
};
