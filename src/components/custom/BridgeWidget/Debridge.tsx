"use client";

import { useEffect, useRef } from "react";

const DeBridgeWidget = () => {
  const scriptRef = useRef<HTMLScriptElement | null>(null);
  const widgetInitialized = useRef(false);

  useEffect(() => {
    if (widgetInitialized.current) return;

    const script = document.createElement("script");
    scriptRef.current = script;
    script.src = "https://app.debridge.finance/assets/scripts/widget.js";
    script.async = true;

    script.onload = () => {
      if ((window as any).deBridge && !widgetInitialized.current) {
        widgetInitialized.current = true;
        (window as any).deBridge.widget({
          v: "1",
          element: "debridgeWidget",
          title: "",
          description: "",
          width: "100%", // Changed to 100%
          height: "600", // Match container height
          // ... rest of your configuration
          styles:
            "eyJhcHBCYWNrZ3JvdW5kIjoicmdiYSgyMTcsMTcsNDIsMCkiLCJtb2RhbEJnIjoiIzBmODNkZSIsImNoYXJ0QmciOiIjNzhmMDAwIiwiYm9yZGVyUmFkaXVzIjoxNiwiYm9yZGVyQ29sb3IiOiIjMDQ0NzM4IiwidG9vbHRpcENvbG9yIjoiIzk4ZmNlNCIsImZvcm1Db250cm9sQmciOiJyZ2JhKDI2LDMwLDI5LDApIiwiY29udHJvbEJvcmRlciI6InJnYmEoNCw3MSw1NiwwLjUpIiwicHJpbWFyeSI6IiM5OGZjZTQiLCJzZWNvbmRhcnkiOiIjMDczNTJhIiwiZm9ybUhlYWRCdG5TaXplIjoiNDgiLCJkZXNjcmlwdGlvbkZvbnRTaXplIjoiMTgifQ==",
          theme: "dark",
        });
      }
    };

    document.body.appendChild(script);

    return () => {
      if (scriptRef.current && document.body.contains(scriptRef.current)) {
        document.body.removeChild(scriptRef.current);
      }
      widgetInitialized.current = false;

      const widgetElement = document.getElementById("debridgeWidget");
      if (widgetElement) {
        widgetElement.innerHTML = "";
      }
    };
  }, []);

  return <div id="debridgeWidget" className="h-full w-full" />;
};

export default DeBridgeWidget;
