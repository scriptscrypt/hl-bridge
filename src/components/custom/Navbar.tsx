import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import hlLogo from "@/assets/logos/hlLogowTxt.svg";
import chevronRightImg from "@/assets/abstract/chevronRight.svg";
const Navbar = () => {
  return (
    <div className="bg-[#001F14]">
      <nav className="w-full bg-[#001F14] bg-black/30 backdrop-blur-md border-b border-gray-800/50 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Image src={hlLogo} alt="Logo" className="w-56" />
            </div>

            {/* Connect Wallet Button */}
            <div>
              <Button className="bg-[#98FCE4] text-[#07352A] rounded-full hover:bg-emerald-100 transition-colors duration-200">
                Connect Wallet
                <Image src={chevronRightImg} alt="arrow" className="w-4" />
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
