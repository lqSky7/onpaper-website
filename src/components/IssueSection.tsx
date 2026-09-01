"use client";

import React, { useEffect, useRef } from "react";

const issues = [
  {
    title: "Algorithms ≠ System Mastery",
    text: "Memorizing DSA solutions does not translate into defending real-world software architectures.",
    video: "https://hackfirst.io/video/issue-01.mp4",
  },
  {
    title: "Superficial mock interviews",
    text: "Generic mock sessions lack real codebase context and cannot trace deep execution failure paths.",
    video: "https://hackfirst.io/video/issue-02.mp4",
  },
  {
    title: "Rapid memory decay",
    text: "Without active FSRS spaced repetition, structural design knowledge fades within weeks.",
    video: "https://hackfirst.io/video/issue-03.mp4",
  },
];

export default function IssueSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const items = containerRef.current.querySelectorAll(".issue-item");
      items.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const middle = window.innerHeight / 2;
        if (rect.top <= middle && rect.bottom >= middle) {
          item.classList.add("show");
        } else {
          item.classList.remove("show");
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="issue" ref={containerRef}>
      {issues.map((issue, idx) => (
        <div className="issue-item" key={idx}>
          <video
            preload="auto"
            playsInline
            autoPlay
            loop
            muted
            className="issue-item__bg"
            src={issue.video}
          />
          <div className="issue-item__content">
            <h2 className="issue-item__title">{issue.title}</h2>
            <p className="issue-item__text">{issue.text}</p>
          </div>
          <div className="issue-item__label">{issue.title}</div>
        </div>
      ))}
    </section>
  );
}
