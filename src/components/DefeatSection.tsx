"use client";

import React from "react";

export default function DefeatSection() {
  return (
    <section className="defeat">
      <div className="defeat-body">
        <div className="defeat-wrapper">
          <video
            preload="auto"
            playsInline
            autoPlay
            loop
            muted
            className="defeat-bg"
            src="https://hackfirst.io/video/defeat.mp4"
          />
          <div className="defeat-content">
            <div className="defeat-access" animate-blur-text="">
              SYSTEM DEFENSE:
            </div>
            <h2 className="defeat-title" animate-blur-text="">
              They asked how your system handles scale. Don’t freeze.
            </h2>
            <p className="defeat-text" animate-blur-text="">
              To pass staff-level interviews, defend your codebase with canonical precision.
            </p>
          </div>
          <div className="defeat-notify">
            ▶ onpaper restore --unit 04<br />
            ✓ State loaded from local SQLite<br />
            ✓ FSRS Review: 2 overdue concept cards<br />
            ✓ Sandbox scaffolded in .interview-prep/exercises/
          </div>
        </div>
      </div>
    </section>
  );
}
