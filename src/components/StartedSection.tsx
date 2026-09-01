"use client";

import React from "react";
import Link from "next/link";

export default function StartedSection() {
  return (
    <section className="started">
      <video
        preload="auto"
        playsInline
        autoPlay
        loop
        muted
        className="started-bg"
        src="https://hackfirst.io/video/started.mp4"
      />
      <div className="started-content">
        <span className="started-label" animate-blur-text="">
          OnPaper is offline-first & vendor-neutral
        </span>
        <h2 className="title-md" animate-blur-text="">
          Are you truly ready to defend your project in a staff-level interview?
        </h2>
        <p className="started-text" animate-blur-text="">
          With OnPaper™ Interview Readiness, you don’t just memorize answers — you own the architecture
        </p>
        <Link href="/contacts" className="started-btn" animate-blur-el="">
          Get started
        </Link>
      </div>
    </section>
  );
}
