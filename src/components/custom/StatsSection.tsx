"use client";

import { Button } from "@/components/ui/button";

const StatsCard = ({ title, value }: { title: string; value: string }) => (
  <div className="relative w-full">
    <div className="absolute inset-0 z-10 opacity-50">
      <div className="w-full h-full bg-[url('/bgs/dots.svg')] z-20 bg-repeat-x bg-top m-0.5"></div>
    </div>
    <div className="flex flex-col w-full">
      <div className="flex flex-col bg-[#535555]/2 rounded-2xl backdrop-blur-sm border border-emerald-950 w-full">
        <div className="flex flex-col gap-16 p-6">
          <h3 className="text-[#98FCE4] bg-[#022A1F] border-[#285F50] p-2 rounded-full w-fit">
            {title}
          </h3>
          <p className="text-[#98FCE4] text-5xl font-medium">{value}</p>
        </div>
      </div>
    </div>
  </div>
);

const StatsSection = () => {
  return (
    <div className="w-full bg-[#001F14] min-h-screen flex items-center relative">
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-[url('/bgs/hlTilted.svg')] z-10 bg-repeat-x bg-top"></div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t z-30 from-[#001F14] to-transparent" />
      </div>
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="w-full flex flex-col gap-16 lg:flex-row items-center justify-between">
          {/* Left Column - Text Content */}
          <div className="flex flex-col gap-8 flex-1 text-center items-center md:items-start md:text-left">
            <h1 className="text-4xl lg:text-6xl text-white font-serif">
              Enter the{" "}
              <span className="font-redactionItalic">people&apos;s L1 </span>.
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
              Bridge your assets to the Hyperliquid L1
              <br />— in a trustless, safe and transparent manner
            </p>
            <Button
              onClick={() => window?.open("https://stats.hyperliquid.xyz")}
              className="flex items-center justify-center bg-transparent border-[#285F50] bg-[#022A1F] text-[#98FCE4] border rounded-full hover:bg-emerald-400/10 transition-colors duration-200"
            >
              <span>Learn More</span>
              <span className="font-redaction mt-1 ml-2">&gt;</span>
            </Button>
          </div>

          {/* Right Column - Stats Grid */}
          <div className="w-full lg:w-auto lg:flex-1 px-0 md:px-4 lg:px-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full max-w-3xl md:mx-auto lg:mx-0">
              <StatsCard title="All time volume" value="$2.2T" />
              <StatsCard title="Total Deposits" value="$2.2T" />
              <StatsCard title="Total Users" value="$2.2T" />
              <StatsCard title="Volume Bridged" value="$2.2T" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;