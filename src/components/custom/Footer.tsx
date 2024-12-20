import hlLogo from "@/assets/logos/hlLogowTxt.svg";
import { MessageSquare, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="h-[104px] bg-[#001F14] relative">
      <div className="absolute inset-0 z-10 opacity-60 backdrop:blur-lg">
        <div className="w-full h-full bg-[url('/bgs/footerHL.svg')] z-50 bg-repeat-x bg-top "></div>
      </div>
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="">
          <Image src={hlLogo} alt="Logo" className="w-56" />
        </div>
        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <Link
            href="#"
            className="text-gray-400 hover:text-emerald-400 transition-colors"
            aria-label="Telegram"
          >
            <MessageSquare size={20} />
          </Link>
          <Link
            href="#"
            className="text-gray-400 hover:text-emerald-400 transition-colors"
            aria-label="Discord"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
            </svg>
          </Link>
          <Link
            href="#"
            className="text-gray-400 hover:text-emerald-400 transition-colors"
            aria-label="Twitter"
          >
            <Twitter size={20} />
          </Link>
        </div>
      </div>
      <footer className="w-full bg-[#001F14] z-50">
        {/* Background Pattern - You might want to use an actual SVG or image here */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © 2024 Hyperliquid Bridge. All right reserved.
            </div>

            {/* Center Links */}
            <div className="flex gap-6 text-gray-400 text-sm">
              <Link
                href="/privacy"
                className="hover:text-emerald-400 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-emerald-400 transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;