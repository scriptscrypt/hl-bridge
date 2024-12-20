import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import absDots from "@/assets/abstract/dots.svg";

const StatsCard = ({ title, value }: { title: string; value: string }) => (
  <>
    <div className="relative">
      <div className="absolute inset-0 z-10 opacity-50">
        <div className="w-full h-full bg-[url('/bgs/dots.svg')] z-20 bg-repeat-x bg-top m-0.5"></div>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col  bg-[#535555]/2 rounded-2xl backdrop-blur-sm border border-emerald-950">
          <div className="flex flex-col gap-16 p-6">
            <h3 className="text-[#98FCE4] bg-[#022A1F] border-[#285F50] p-2 rounded-full w-fit">
              {title}
            </h3>
            <p className="text-[#98FCE4] text-5xl font-medium">{value}</p>
          </div>
        </div>
      </div>
    </div>
  </>
);

const StatsSection = () => {
  return (
    <div className="w-full bg-[#001F14] min-h-screen flex items-center">
      <div className="max-w-7xl h-full mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="h-full flex flex-col gap-16 lg:flex-row items-center justify-between">
          {/* Left Column - Text Content */}
          <div className="flex flex-col gap-8 flex-1">
            <h1 className="text-5xl lg:text-6xl text-white font-serif">
              Trusted by <span className="font-redactionItalic">Millions</span>.
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
              The high-performance chain redefining crypto trading. Experience
              lightning -fast transactions
              <br />
              —all on a single, hyper-efficient platform. Build, trade, and
              create value without limits.
            </p>
            <div className="flex justify-between">
              <Button className="flex items-center justify-center bg-transparent border-[#285F50] bg-[#022A1F] text-[#98FCE4] border rounded-full hover:bg-emerald-400/10 transition-colors duration-200">
                <div className="">Learn More</div>
                <div className="font-redaction mt-1">&gt;</div>
              </Button>
            </div>
          </div>

          {/* Right Column - Stats Grid */}
          {/* <div className="flex-1"> */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex-1 min-w-[240px] max-w-[240px]">
                <StatsCard title="All time volume" value="$2.2T" />
              </div>
              <div className="flex-1 min-w-[240px] max-w-[240px]">
                <StatsCard title="Total Deposits" value="$2.2T" />
              </div>
              <div className="flex-1 min-w-[240px] max-w-[240px]">
                <StatsCard title="Total Users" value="$2.2T" />
              </div>
              <div className="flex-1 min-w-[240px] max-w-[240px]">
                <StatsCard title="Volume Bridged" value="$2.2T" />
              </div>
            </div>
          </div>
        </div>
      {/* </div> */}
    </div>
  );
};

export default StatsSection;