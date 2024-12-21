import DeBridgeWidget from "@/components/custom/BridgeWidget/Debridge";

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-[#001F14] text-white overflow-hidden pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Single full-width background image */}
        <div className="w-full h-full">
          <div 
            className="w-full h-full bg-[url('/bgs/Hero.svg')] bg-no-repeat bg-center bg-cover"
            style={{
              transform: 'scale(1.1)',  // Slightly larger to prevent edge showing during subtle animations
            }}
          />
        </div>
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#001F14]/50 to-[#001F14]" />
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
        <div className="w-full max-w-xl mx-auto">
          <div className="bg-[#001F14]/80 rounded-xl backdrop-blur-sm border border-[#044738] shadow-2xl">
            <div className="h-[600px] overflow-hidden">
              <DeBridgeWidget />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;