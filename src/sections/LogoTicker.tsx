import bvLogo from "@/assets/bvlogo.png";
import chrisLogo from "@/assets/chrislogo.png";
import enaxLogo from "@/assets/enaxlogo.png";
import tcmLogo from "@/assets/tcmlogo.png";
import oliviaLogo from "@/assets/olivalogo.png";
import celestialLogo from "@/assets/logo-celestial.png";
import Image from "next/image";
export const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="container">
       <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,_transparent,_black,_transparent)]">
          <div className="flex gap-14 flex-none">
                <Image src={bvLogo} alt="BV Logo" className="logo-ticker-image" />
                <Image src={enaxLogo} alt="Enax Logo" className="logo-ticker-image" />
                <Image src={tcmLogo} alt="TCM Logo" className="logo-ticker-image" />
                <Image src={oliviaLogo} alt="Olivia Logo" className="logo-ticker-image" />
                <Image src={celestialLogo} alt="Celestial Logo" className="logo-ticker-image" />
                <Image src={chrisLogo} alt="Chris Logo" className="logo-ticker-image" /> 
            </div>
       </div>
      </div>
    </div>
  )
};
