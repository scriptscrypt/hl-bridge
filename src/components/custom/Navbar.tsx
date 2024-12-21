import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import hlLogo from "@/assets/logos/hlLogowTxt.svg";
import chevronRightImg from "@/assets/abstract/chevronRight.svg";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50">
      {/* Background Container */}
      <div className="absolute inset-0 bg-[#001F14]/80 backdrop-blur-md">
        {/* Glass Overlay */}
        <div className="absolute inset-0 bg-[#001F14]/20 backdrop-blur-sm" />
        
        {/* Pattern Overlay */}
        <div className="absolute inset-0">
          {/* <div className="w-full h-full bg-[url('/bgs/footerHL.svg')] bg-repeat-x bg-top opacity-30" /> */}
        </div>
      </div>

      {/* Content Container */}
      <div className="relative border-b border-[#285F50]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Image src={hlLogo} alt="Logo" className="w-56" />
            </div>

            {/* Connect Wallet Button */}
            {/* <div>
              <Button className="bg-[#98FCE4] text-[#07352A] rounded-full hover:bg-emerald-100 transition-colors duration-200">
                Connect Wallet
                <Image src={chevronRightImg} alt="arrow" className="w-4 ml-2" />
              </Button>
            </div> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;