"use client";

import React, { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        const progress = Math.round((window.scrollY / scrollHeight) * 100);
        setPercent(Math.min(Math.max(progress, 0), 100));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="scroll-progress">
      <div className="scroll-progress__animate">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="scroll-progress__percent">{percent}%</div>
    </div>
  );
}
