import Footer from "@/components/custom/Footer";
import Hero from "@/components/custom/Hero";
import Navbar from "@/components/custom/Navbar";
import StatsSection from "@/components/custom/StatsSection";

export default function Home() {
  return (
    <>
      <div className="flex flex-col">
        <Navbar />
        <Hero />
        <StatsSection />
        <Footer />
      </div>
    </>
  );
}
