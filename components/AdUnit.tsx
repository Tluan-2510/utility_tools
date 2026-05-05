"use client";

import React, { useEffect } from "react";

interface AdUnitProps {
  publisherId?: string;
  slotId: string;
  format?: "auto" | "rectangle" | "vertical" | "horizontal";
  responsive?: "true" | "false";
  style?: React.CSSProperties;
  className?: string;
}

const AdUnit: React.FC<AdUnitProps> = ({
  publisherId = "ca-pub-XXXXXXXXXXXXXXXX", // REPLACE WITH YOUR ACTUAL PUBLISHER ID
  slotId,
  format = "auto",
  responsive = "true",
  style = { display: "block" },
  className = "",
}) => {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      // Ad blocker or script not loaded
      console.warn("AdSense could not be initialized:", err);
    }
  }, [slotId]);

  return (
    <div className={`ad-unit-container overflow-hidden my-6 mx-auto flex justify-center ${className}`}>
      <ins
        className="adsbygoogle"
        style={style}
        data-ad-client={publisherId}
        data-ad-slot={slotId}
        data-ad-format={format}
        data-full-width-responsive={responsive}
      />
    </div>
  );
};

export default AdUnit;
