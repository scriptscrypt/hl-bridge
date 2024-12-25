"use client";

import { useEffect } from "react";

const DeBridgeWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://app.debridge.finance/assets/scripts/widget.js";
    script.async = true;

    const initializeWidget = () => {
      if (!(window as any).deBridge) return;
      
      (window as any).deBridge.widget({
        v: "1",
        element: "debridgeWidget",
        title: " ",
        description: "",
        width: "100%",
        height: "100%",
        r: "30912",
        affiliateFeePercent : 1,
        affiliateFeeRecipient: "0x0CF97e9C28C5b45C9Dc20Dd8c9d683E0265190CB",
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
            "998": "all"
          }
        },
        inputChain: 7565164,
        outputChain: 998,
        inputCurrency: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
        outputCurrency: "0xaf88d065e77c8cc2239327c5edb3a432268e5831",
        address: "",
        showSwapTransfer: true,
        amount: "",
        outputAmount: "",
        isAmountFromNotModifiable: false,
        isAmountToNotModifiable: false,
        lang: "en",
        mode: "deswap",
        isEnableCalldata: false,
        styles: "eyJhcHBCYWNrZ3JvdW5kIjoicmdiYSg3LDUzLDQyLDApIiwidG9vbHRpcEJnIjoiIzA3MzUyYSIsInRvb2x0aXBDb2xvciI6IiM5OGZjZTQiLCJmb3JtQ29udHJvbEJnIjoicmdiYSgyMiwyNywzOCwwLjAxKSIsImNvbnRyb2xCb3JkZXIiOiIjOThmY2U0IiwiZm9udEZhbWlseSI6IkludGVyIiwicHJpbWFyeUJ0bkJnIjoiIzk4RkNFNCIsInByaW1hcnlCdG5CZ0hvdmVyIjoiIzUxRDJDMSIsInByaW1hcnlCdG5UZXh0IjoiIzA3MzUyYSIsInNlY29uZGFyeUJ0bkJnIjoiIzFEMkUyQSIsImRlc2NyaXB0aW9uRm9udFNpemUiOiIxOCJ9",
        theme: "dark",
        isHideLogo: false,
        logo: "",
        disabledWallets: [],
        disabledElements: []
      });
    };

    script.onload = initializeWidget;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
      const widgetElement = document.getElementById("debridgeWidget");
      if (widgetElement) {
        widgetElement.innerHTML = "";
      }
    };
  }, []);

  return <div id="debridgeWidget" className="h-full w-full" />;
};

export default DeBridgeWidget;
