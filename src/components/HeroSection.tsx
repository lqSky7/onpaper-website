"use client";

import React from "react";

export default function HeroSection() {
  return (
    <section className="hero">
      <video
        preload="auto"
        playsInline
        autoPlay
        loop
        muted
        className="hero-tornado"
      >
        <source
          src="https://hackfirst.io/video/tornado-home.mp4"
          type="video/mp4"
        />
      </video>
      <div className="hero-content">
        <span className="hero-label" animate-blur-text="" data-instant="">
          Project-Based Interview Readiness
        </span>
        <h1 className="hero-title" animate-blur-text="" data-instant="">
          Master your own codebase for technical interviews: OnPaper™
        </h1>
      </div>
    </section>
  );
}
