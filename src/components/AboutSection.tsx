"use client";

import React from "react";

export default function AboutSection() {
  return (
    <>
      <section className="about-video">
        <video
          preload="auto"
          playsInline
          autoPlay
          loop
          muted
          src="https://hackfirst.io/video/about-video-3.mp4"
        />
      </section>

      <section className="about" data-layout="02">
        <div className="about-line">
          <span>A</span>
          <span>collective</span>
          <span>of</span>
          <span>the</span>
          <span>best</span>
          <span>independent</span>
          <span>premium</span>
          <span>publishers</span>
        </div>
        <div className="layout-head">
          <span>About</span>
          <span>02</span>
        </div>
        <div className="about-content">
          <span className="about-label" animate-blur-text="">
            Architecture & Capabilities
          </span>
          <h2 className="title-md" animate-blur-text="">
            <span>OnPaper turns your actual Git repository into</span> an interactive
            interview simulator inside your IDE
          </h2>
          <p className="about-text" animate-blur-el="">
            Leveraging vendor-neutral IDE adapters (Cursor, Zed, Antigravity, Claude Code),
            local SQLite state engines, and FSRS memory scheduling — private,
            offline-first, and deeply calibrated.
          </p>
        </div>
        <div className="about-list">
          <div className="about-list__item">
            <span>Natural Order Curriculum</span>
          </div>
          <div className="about-list__item">
            <span>Sandbox Coding Exercises</span>
          </div>
          <div className="about-list__item">
            <span>FSRS Spaced Repetition</span>
          </div>
        </div>
      </section>
    </>
  );
}
