"use client";

import React from "react";

const awardsData = [
  { rank: "Ranked #1", category: "TypeScript & Next.js", winner: true, num: "01" },
  { rank: "Ranked #1", category: "Go & Distributed Systems", winner: true, num: "02" },
  { rank: "Ranked #1", category: "Rust & Systems Core", winner: true, num: "03" },
  { rank: "Ranked #1", category: "Python & AI Backends", winner: true, num: "04" },
  { rank: "Ranked #1", category: "Swift & iOS Runtime", winner: true, num: "05" },
  { rank: "Ranked #2", category: "Java & Microservices", winner: false, num: "06" },
  { rank: "Ranked #1", category: "C++ & Low Latency", winner: true, num: "07" },
  { rank: "Ranked #2", category: "SQL & Data Modeling", winner: false, num: "08" },
  { rank: "Ranked #1", category: "AWS Cloud Architecture", winner: true, num: "09" },
];

export default function AwardsSection() {
  return (
    <section className="awards" data-layout="04">
      <div className="layout-head">
        <span>Supported Stacks</span>
        <span>04</span>
      </div>
      <p className="awards-text" animate-blur-text="">
        Compatible across modern agentic IDEs, languages, runtime frameworks, and distributed system architectures
      </p>
      <div className="awards-grid">
        {awardsData.map((item, idx) => (
          <div
            key={idx}
            className={`awards-item ${item.winner ? "awards-item-winner" : ""}`}
            animate-blur-el=""
          >
            <div className="awards-item__logo">
              <img
                src={`https://hackfirst.io/img/awards-${item.num}.png`}
                alt=""
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = "none";
                }}
              />
            </div>
            <div className="awards-item__text">
              <span>{item.rank}</span>
              <p>{item.category}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="awards-separator">
        <span></span>
        <i></i>
        <span></span>
        <i></i>
        <span></span>
      </div>
    </section>
  );
}
