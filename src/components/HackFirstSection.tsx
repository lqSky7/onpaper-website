"use client";

import React from "react";

export default function HackFirstSection() {
  return (
    <section className="hackfirst" data-layout="01">
      <div className="layout-head">
        <span>Solution</span>
        <span>01</span>
      </div>
      <img
        src="/img/svg/logo-black-new.svg"
        alt="OnPaper"
        loading="lazy"
        animate-blur-el=""
      />
      <p className="hackfirst-text" animate-blur-text="">
        The canonical project-based interview readiness platform
      </p>
    </section>
  );
}
