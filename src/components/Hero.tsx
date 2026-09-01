import React from "react";

export function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <p className="hero-eyebrow">
          <svg className="apple-glyph" viewBox="0 0 384 512" aria-hidden="true">
            <path
              fill="currentColor"
              d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
            />
          </svg>
          Workspace manager for your Mac
        </p>
        <h1 className="hero-title">
          The Launchpad replacement
          <br />
          macOS 26 - 27 deserves.
        </h1>
        <p className="hero-sub">
          LaunchMe brings automations, file search, live wallpapers, widgets, and
          deep customization into one beautiful full-screen launcher built for
          macOS 26 &amp; 27.
        </p>
        <div className="cta-group">
          <a className="lp-btn lp-btn--lg" href="#download">
            <svg
              className="apple-glyph"
              viewBox="0 0 384 512"
              aria-hidden="true"
            >
              <path
                fill="currentColor"
                d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
              />
            </svg>
            Download for macOS
          </a>
        </div>
        <p className="hero-facts">
          Customizable &nbsp;·&nbsp; Live wallpapers &nbsp;·&nbsp; Automations
          &nbsp;·&nbsp; Widgets &nbsp;·&nbsp; Spaces
        </p>

        {/* Hero image preview */}
        <div style={{ marginTop: "32px", width: "100%", maxWidth: "1100px" }}>
          <img
            className="hero-image"
            src="/images/topimage.png"
            alt="LaunchMe preview"
          />
        </div>
      </div>
    </section>
  );
}
