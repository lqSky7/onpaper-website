"use client";

import React, { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import Link from "next/link";
import { initHackFirstAnimations } from "@/lib/initAnimations";

const curriculumModules = [
  {
    title: "Syntax & Concept Mastery",
    text: "Provides an exhaustive syntax inventory for every language construct in your project before presenting questions.",
    video: "https://hackfirst.io/video/service-01.mp4",
  },
  {
    title: "Explicit Rubric Assessment",
    text: "Presents 3-dimensional technical interview questions: structural mechanics, execution tracing, and architectural tradeoffs.",
    video: "https://hackfirst.io/video/service-02.mp4",
  },
  {
    title: "Sandbox Coding Exercises",
    text: "Scaffolds temporary exercises in .interview-prep/exercises/ with progressive hints and durable local SQLite grading.",
  },
];

export default function ServicesPage() {
  useEffect(() => {
    const timer = setTimeout(() => {
      initHackFirstAnimations();
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="wrapper">
      <Header isHome={false} />
      <section className="services">
        <div className="back">
          <Link href="/">To home</Link>
        </div>
        <h2 className="services-title" animate-blur-text="">
          Curriculum
        </h2>
        <div className="services-grid">
          {curriculumModules.map((item, idx) => (
            <div className="services-item" key={idx} animate-blur-el="">
              <div className="services-item__poster">
                <video
                  preload="auto"
                  playsInline
                  autoPlay
                  loop
                  muted
                  src={item.video || "https://hackfirst.io/video/service-03.mp4"}
                />
              </div>
              <div className="services-item__content">
                <div className="services-item__title">{item.title}</div>
                <div className="services-item__text">{item.text}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
      <ScrollProgress />
    </main>
  );
}
