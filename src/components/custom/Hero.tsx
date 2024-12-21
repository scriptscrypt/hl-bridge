import DeBridgeWidget from "@/components/custom/BridgeWidget/Debridge";

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-[#001F14] text-white">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="w-full h-full bg-[url('/bgs/Hero.svg')] bg-repeat-x bg-top" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#001F14] to-transparent" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 container mx-auto px-4 py-16 flex flex-col items-center">
        {/* Text Content */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center text-3xl md:text-6xl mb-4">
            <div className="font-redaction">Experience</div>
            <div className="font-redactionItalic ml-4">Hyperliquid</div>
          </div>
          <div className="font-redaction text-3xl md:text-6xl">
            Anytime, Anywhere
          </div>
        </div>

        {/* Widget Container with Fixed Height */}
        <div className="w-full max-w-xl mx-auto bg-[#001F14]/80 rounded-xl backdrop-blur-sm border border-[#044738] shadow-2xl">
          <div className="h-[600px] overflow-hidden">
            <DeBridgeWidget />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
