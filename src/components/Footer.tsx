"use client";

import React from "react";
import { HoverLink } from "./HoverLink";

export default function Footer() {
  return (
    <footer className="footer">
      <video
        preload="auto"
        playsInline
        autoPlay
        loop
        muted
        className="footer-bg"
        src="https://hackfirst.io/video/footer.mp4"
      />
      <div className="footer-row">
        <div className="footer-col">
          <img
            src="/img/svg/logo-new.svg"
            alt="OnPaper"
            className="footer-logo"
            loading="lazy"
          />
        </div>
        <div className="footer-col">
          <div className="footer-about">
            <span>about</span>
            <p>
              OnPaper: Project-Based Interview Readiness. Master your codebase from
              architecture to execution tradeoffs.
            </p>
          </div>
        </div>
      </div>
      <div className="footer-row">
        <div className="footer-col">
          <div className="footer-nav">
            <p>Community</p>
            <ul>
              <li>
                <HoverLink href="https://github.com/lqSky7/onpaper" target="_blank">
                  GitHub
                </HoverLink>
              </li>
              <li>
                <HoverLink href="#" target="_blank">
                  Documentation
                </HoverLink>
              </li>
              <li>
                <HoverLink href="#" target="_blank">
                  Discord
                </HoverLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-col">
          <div className="footer-nav">
            <p>Navigation</p>
            <ul>
              <li>
                <HoverLink href="/">Home</HoverLink>
              </li>
              <li>
                <HoverLink href="/services">Curriculum</HoverLink>
              </li>
              <li>
                <HoverLink href="/about">Architecture</HoverLink>
              </li>
              <li>
                <HoverLink href="/contacts">Contact</HoverLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-copyright">
          designed for engineers by{" "}
          <HoverLink
            href="https://github.com/lqSky7/onpaper"
            target="_blank"
          >
            .onpaper
          </HoverLink>
        </div>
      </div>
    </footer>
  );
}
