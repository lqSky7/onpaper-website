"use client";

import React, { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import StartedSection from "@/components/StartedSection";
import { initHackFirstAnimations } from "@/lib/initAnimations";

export default function AboutPage() {
  useEffect(() => {
    const timer = setTimeout(() => {
      initHackFirstAnimations();
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="wrapper">
      <Header isHome={false} />
      <section className="about-page">
        <div className="about-head">
          <video
            preload="auto"
            playsInline
            autoPlay
            loop
            muted
            src="https://hackfirst.io/video/about.mp4"
          />
          <div className="badge">
            <span>// Architecture</span>
          </div>
          <h2 className="about-title" animate-blur-text="">
            Architecture
          </h2>
          <p className="about-desc" animate-blur-el="">
            OnPaper: Project-Based Technical Interview Readiness Platform.
            <br />
            At OnPaper, we believe memorizing DSA solutions is not enough. We turn
            any software repository into a structured, stateful curriculum inside your
            agentic IDE with explicit rubric grading, sandbox exercises, and FSRS
            spaced repetition.
          </p>
        </div>
      </section>

      <section className="about-info">
        <div className="about-info__item">
          <b animate-blur-text="">
            Local-First Runtimes.
            <br /> Offline SQLite Durability.
          </b>
          <p animate-blur-el="">
            Your source code never leaves your machine. OnPaper runs locally inside
            your agentic IDE adapter, maintaining exact persistent state in SQLite
            and syncing learning events to AWS asynchronously.
          </p>
        </div>
        <div className="about-info__separator">
          <span></span>
          <i></i>
          <span></span>
          <i></i>
          <span></span>
        </div>
        <div className="about-info__item">
          <b animate-blur-text="">FSRS Spaced Repetition Engine</b>
          <p animate-blur-el="">
            Misconceptions and failure traces are scheduled for revision using the
            state-of-the-art Free Spaced Repetition Scheduler, guaranteeing long-term
            mastery for staff and principal level interviews.
          </p>
        </div>
        <div className="about-info__separator">
          <span></span>
          <i></i>
          <span></span>
          <i></i>
          <span></span>
        </div>
      </section>

      <section className="about-edge">
        <div className="about-edge__head">
          <span className="about-edge__badge" animate-blur-text="">
            Why Engineers Choose OnPaper
          </span>
          <h2 className="about-edge__title" animate-blur-text="">
            Your Edge in Staff Interviews
          </h2>
          <p className="about-edge__desc" animate-blur-el="">
            We don’t just test algorithmic syntax — we train you to defend every
            single architectural decision in your own production projects.
          </p>
        </div>
        <div className="about-edge__grid">
          <div className="about-edge__item" animate-blur-el="">
            <p>Vendor-neutral adapters for Cursor, Zed, Antigravity, and Claude Code</p>
          </div>
          <div className="about-edge__item" animate-blur-el="">
            <p>Automated sandbox coding exercises in .interview-prep/exercises/</p>
          </div>
          <div className="about-edge__item" animate-blur-el="">
            <p>
              Native SwiftUI companion app
              <br /> for streaks & review
            </p>
          </div>
        </div>
      </section>

      <StartedSection />
      <Footer />
      <ScrollProgress />
    </main>
  );
}
