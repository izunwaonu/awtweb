import productImage from "@/assets/product-image.png";
import Image from "next/image";

export const ProductShowcase = () => {
  return(
    <section className="bg-gradient-to-b from-[#ffffff] to-[#d2dcff] py-24">
      <div className="container">
        <div className="max-w-[540px] mx-auto">
        <div className="flex justify-center" >
          <div className="tag">
            Enhance Your Productivity
          </div>
        </div>
        <h2 className="text-center text-3xl font-bold tracking-tighter bg-gradient-to-b from-black to-green-500 text-transparent bg-clip-text mt-5 ">An efficient method to monitor progress</h2>
        <p className="text-center text-[22px] leading-[30px] tracking-tight text-green-950">
          Embrace new technology to grow your business, 
          save time, reach more customers, and stay competitive
        </p>
        </div>
        <Image src={productImage} alt="Product Image" className="" />
      </div>
    </section>
  )
};
