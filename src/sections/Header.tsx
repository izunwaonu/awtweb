import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/AWTlogo.png";
import MenuIcon from "@/assets/menu.svg";
import Image from "next/image";
export const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20"> 
      {/* Top Banner  */}
      <div className="flex justify-center items-center py-3 bg-green-950 text-white text-sm gap-3">
      <p className="text-white/60 hidden md:block">Optimize your workflow and enhance your productivity</p>
      <div className="inline-flex gap-1 items-center">
      <p>Get Started for free</p>
      <ArrowRight className="inline-flex h-4 w-4 justify-center items-center" />
      </div>
    </div>

    {/* Header Menu */}
    <div className="py-5">
      <div className="container">
        <div className="flex justify-between items-center">
        <Image src={Logo} alt="African Witch Tech Logo" height={40} width={40} />
        <MenuIcon className="h-5 w-5 md:hidden" />
        <nav className="hidden md:flex gap-6 text-green-950 items-center">
          <a href="#" >About Us</a>
          <a href="#" >Products</a>
          <a href="#" >Solutions</a>
          <a href="#" >Supports</a>
          <a href="#" >Blogs</a>
          <button className="bg-green-950 text-white px-4 py-2 rounded-lg font-medium inline-flex justify-center items-center tracking-tighter" >Download Apps</button>
        </nav>
        </div>
      </div>

    </div>
    </header>
  )
  
};
