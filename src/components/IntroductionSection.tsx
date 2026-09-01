"use client";

import React, { useEffect, useRef } from "react";

export default function IntroductionSection() {
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!listRef.current) return;
      const items = listRef.current.querySelectorAll("[data-counter]");
      items.forEach((item) => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.85) {
          item.classList.add("is-inview");
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="introduction">
      <div className="introduction-title">
        <span className="introduction-label" animate-blur-text="">
          Introduction
        </span>
        <h2 className="title" animate-blur-text="">
          LeetCode alone won’t prove you built the system.{" "}
          <span>
            Interviewers drill into architecture, failure paths, and design tradeoffs
          </span>
        </h2>
      </div>
      <div className="introduction-text" animate-blur-el="">
        Standard interview prep tests trivial algorithmic tricks. It fails to
        prepare engineers for real-world project defense, system architecture
        grilling, execution tracing, and deep engineering tradeoffs such as{" "}
        <span>concurrency models</span>, <span>error propagation</span>,{" "}
        <span>state encapsulation</span> and <span>distributed consistency</span>.
      </div>
      <div className="introduction-list" ref={listRef}>
        <div className="introduction-list__item">
          <div className="introduction-list__count">
            <p>Doc.</p>
          </div>
          <div className="introduction-list__value">
            <b data-counter="">
              <span className="idle">
                <span className="char">8</span>
                <span className="char">8</span>
                <span className="char">%</span>
              </span>
              <span className="hover">
                <span className="char">8</span>
                <span className="char">8</span>
                <span className="char">%</span>
              </span>
            </b>
            <p>{`. of hiring managers }`}</p>
          </div>
          <div className="introduction-list__text">
            drill into actual project architecture
          </div>
        </div>

        <div className="introduction-list__item">
          <div className="introduction-list__count">
            <p>Doc.</p>
          </div>
          <div className="introduction-list__value">
            <b data-counter="">
              <span className="idle">
                <span className="char">6</span>
                <span className="char">4</span>
                <span className="char">%</span>
              </span>
              <span className="hover">
                <span className="char">6</span>
                <span className="char">4</span>
                <span className="char">%</span>
              </span>
            </b>
            <p>{`. of candidates }`}</p>
          </div>
          <div className="introduction-list__text">
            stumble tracing failure & error paths
          </div>
        </div>

        <div className="introduction-list__item">
          <div className="introduction-list__count">
            <p>Doc.</p>
          </div>
          <div className="introduction-list__value">
            <b data-counter="">
              <span className="idle">
                <span className="char">3</span>
                <span className="char">.</span>
                <span className="char">5</span>
                <span className="char">x</span>
              </span>
              <span className="hover">
                <span className="char">3</span>
                <span className="char">.</span>
                <span className="char">5</span>
                <span className="char">x</span>
              </span>
            </b>
          </div>
          <div className="introduction-list__text">
            higher interview pass rate with FSRS
          </div>
        </div>
      </div>
    </section>
  );
}
