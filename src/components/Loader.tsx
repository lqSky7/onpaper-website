"use client";

import React, { useEffect, useState } from "react";

export default function Loader() {
  const [percent, setPercent] = useState(0);
  const [utcTime, setUtcTime] = useState("UTC +00:00");
  const [localTime, setLocalTime] = useState("00:00:00");
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString("en-GB", {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      const offset = now.getTimezoneOffset();
      const absOffset = Math.abs(offset);
      const hours = String(Math.floor(absOffset / 60)).padStart(2, "0");
      const minutes = String(absOffset % 60).padStart(2, "0");
      const sign = offset <= 0 ? "+" : "-";
      setUtcTime(`UTC ${sign}${hours}:${minutes}`);
      setLocalTime(timeStr);
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);

    const t1 = setTimeout(() => setPercent(30), 400);
    const t2 = setTimeout(() => setPercent(65), 1100);
    const t3 = setTimeout(() => setPercent(99), 1800);
    const t4 = setTimeout(() => setPercent(100), 2300);
    const t5 = setTimeout(() => setHidden(true), 3500);

    return () => {
      clearInterval(timer);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
    };
  }, []);

  if (hidden) return null;

  return (
    <div className="loader">
      <video
        preload="auto"
        playsInline
        autoPlay
        loop
        muted
        className="loader-bg"
      >
        <source src="https://hackfirst.io/video/loader.mp4" type="video/mp4" />
      </video>
      <div className="loader-dots">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <img
        src="/img/svg/loader-circle-1.svg"
        alt=""
        className="loader-circle-1"
      />
      <img
        src="/img/svg/loader-circle-2.svg"
        alt=""
        className="loader-circle-2"
      />
      <div className="loader-count">
        <div id="i" className="odometer">
          {percent < 10 ? `0${percent}` : percent}
        </div>
        <div className="loader-percent">%</div>
      </div>
      <div className="loader-utc">{utcTime}</div>
      <div className="loader-time">{localTime}</div>
      <div className="loader-text" data-instant>
        OnPaper: Turning any codebase into structured, stateful interview readiness. Defend your architecture with canonical precision.
      </div>
    </div>
  );
}
