// components/DeBridgeWidget.js
"use client"

import { useEffect } from 'react';

const DeBridgeWidget = () => {
  useEffect(() => {
    // Create script element
    const script = document.createElement('script');
    script.src = 'https://app.debridge.finance/assets/scripts/widget.js';
    script.async = true;
    
    // Add script to document
    document.body.appendChild(script);

    // Initialize widget after script loads
    script.onload = () => {
      if ((window as any).deBridge) {
        (window as any).deBridge.widget({
          v: "1", 
          element: "debridgeWidget",
          title: "",
          description: "",
          width: "600",
          height: "800",
          r: null,
          supportedChains: {
            inputChains: {
              "1": "all",
              "10": "all",
              "56": "all",
              "100": "all",
              "137": "all",
              "250": "all",
              "1088": "all",
              "7171": "all",
              "8453": "all",
              "42161": "all",
              "43114": "all",
              "59144": "all",
              "7565164": "all",
              "245022934": "all"
            },
            outputChains: {
              "1": "all",
              "10": "all",
              "56": "all",
              "100": "all",
              "137": "all",
              "250": "all",
              "998": "all",
              "1088": "all",
              "7171": "all",
              "8453": "all",
              "42161": "all",
              "43114": "all",
              "59144": "all",
              "7565164": "all",
              "245022934": "all"
            }
          },
          inputChain: 56,
          outputChain: 1,
          inputCurrency: "",
          outputCurrency: "",
          address: "",
          showSwapTransfer: true,
          amount: "",
          outputAmount: "",
          isAmountFromNotModifiable: false,
          isAmountToNotModifiable: false,
          lang: "en",
          mode: "deswap",
          isEnableCalldata: false,
          styles: "e30=",
          theme: "dark",
          isHideLogo: false,
          logo: "",
          disabledWallets: [],
          disabledElements: []
        });
      }
    };

    // Cleanup function
    return () => {
      document.body.removeChild(script);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return <div id="debridgeWidget" />;
};

export default DeBridgeWidget;