"use client";

import React from "react";

export default function SolutionSection() {
  return (
    <section className="solution">
      <div className="solution-container">
        <div className="solution-screen">
          <video
            preload="auto"
            playsInline
            autoPlay
            loop
            muted
            className="solution-bg"
            src="https://hackfirst.io/video/solution-01.mp4"
          />
          <div className="solution-content">
            <span className="solution-label" animate-blur-text="">
              THE SOLUTION
            </span>
            <h2 className="title" animate-blur-text="">
              Analyze Any Repository Locally
            </h2>
          </div>
        </div>

        <div className="solution-screen">
          <video
            preload="auto"
            playsInline
            autoPlay
            loop
            muted
            className="solution-bg"
            src="https://hackfirst.io/video/solution-02.mp4"
          />
        </div>

        <div className="solution-screen">
          <video
            preload="auto"
            playsInline
            autoPlay
            loop
            muted
            className="solution-bg"
            src="https://hackfirst.io/video/solution-03.mp4"
          />
          <div className="solution-content">
            <span className="solution-label" animate-blur-text="">
              THE SOLUTION
            </span>
            <h2 className="title" animate-blur-text="">
              Autonomous Curriculum In Natural Runtime Order
            </h2>
          </div>
        </div>

        <div className="solution-screen problem">
          <div className="problem-content">
            <span className="problem-label">The problem</span>
            <h2 className="problem-title">
              How do generic mock platforms fall short?
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
