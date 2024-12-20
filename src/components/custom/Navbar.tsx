import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import hlLogo from "@/assets/logos/hlLogowTxt.svg";

const Navbar = () => {
  return (
    <div className="">
      <nav className="w-full bg-[#001F14] bg-black/30 backdrop-blur-md border-b border-gray-800/50 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Image src={hlLogo} alt="Logo" className="w-56" />
            </div>

            {/* Connect Wallet Button */}
            <div>
              <Button className="bg-emerald-400 text-[#07352A] rounded-full hover:bg-emerald-500 transition-colors duration-200">
                Connect Wallet
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
