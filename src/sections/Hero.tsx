import ArrowIcon from "@/assets/arrow-right.svg";
import Image from "next/image";
import cogImage from "@/assets/cog.png";
import cogMain from "@/assets/cogmain.png";

export const Hero = () => {
  return (
    <section className="pr-5 pt-8 pb-20 md:p-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip">
      <div className="container">
        <div className="md:flex items-center">
          <div className="w-[320px] md:w-[486px]"> 
              <div className="tag">Sefora: Now Available</div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#48CAE4] text-transparent bg-clip-text mt-6">Safety, Connection, Empowerment</h1>
              <p className="text-xl sm:text-sm md:text-sm text-[#010D3E] tracking-tight mt-6">
              Celebrate Safora App, a safe space for family security, 
              social interaction, and guidance. 
              Stay connected, protected, and guided—all in one app.
              </p>
              <div className="flex gap-1 items-center mt-[30px]">
              <button className="btn btn-primary" > Get Started</button>
              <button className="btn btn-text gap-1">
                <span>Learn more </span>
                <ArrowIcon className="w-5 h-5" />
              </button>
              </div>
          </div>
      
        <div className="mt-20 md:mt-0 md:ml-10 md:h-[648px] md:flex-1 relative">
          <Image src={cogMain} alt="cog" className=" opacity-100 md:absolute md:mt-[70px] md:width-auto md:max-w-none md:-left-6 lg:left-0" />
          <Image src={cogImage} alt="Img" width={220} height={220} className="hidden md:block top-16 -left-32 md:absolute"/>
          <Image src={cogImage} alt="Img" width={220} className="lg:block absolute top-[524px] left-[448px] rotate-[30deg]"/>
        </div>
        </div>
      </div>
    </section>
  );
};
