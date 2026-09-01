"use client";

import React from "react";

const techItems = [
  {
    title: "AST & Dependency Analysis",
    desc: "Analyzes full project architecture, maps file dependency trees and execution order without uploading private source code.",
  },
  {
    title: "Explicit Rubric Calibration",
    desc: "Evaluates answers across 3 real-world dimensions: struct/type mechanics, execution failure tracing, and architectural tradeoffs.",
  },
  {
    title: "Temporary Sandbox Exercises",
    desc: "Scaffolds focused exercises inside .interview-prep/exercises/ with progressive hints and durable local SQLite grading.",
  },
  {
    title: "FSRS Spaced Repetition",
    desc: "Schedules reviews using the Free Spaced Repetition Scheduler to ensure deep long-term retention of core system tradeoffs.",
  },
];

export default function TechnologiesSection() {
  return (
    <section className="technologies" data-layout="03">
      <div className="technologies-wrapper">
        <div className="technologies-separator">
          <span></span>
          <i></i>
          <span></span>
          <i></i>
          <span></span>
        </div>
        <div className="layout-head">
          <span>Technologies</span>
          <span>03</span>
        </div>
        <div className="technologies-image">
          <span>
            <video
              preload="auto"
              playsInline
              autoPlay
              loop
              muted
              src="https://hackfirst.io/video/technologies.mp4"
            />
          </span>
        </div>
        <div className="technologies-separator">
          <span></span>
          <i></i>
          <span></span>
          <i></i>
          <span></span>
        </div>
      </div>
      <div className="technologies-content">
        {techItems.map((item, idx) => (
          <div className="technologies-item" key={idx} animate-blur-el="">
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
