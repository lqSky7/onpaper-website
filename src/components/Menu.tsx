"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { HoverLink } from "./HoverLink";

const navItems = [
  { title: "Home", href: "/", video: "https://hackfirst.io/video/menu-01.mp4", num: "01" },
  { title: "Curriculum", href: "/services", video: "https://hackfirst.io/video/menu-02.mp4", num: "02" },
  { title: "Architecture", href: "/about", video: "https://hackfirst.io/video/menu-03.mp4", num: "03" },
  { title: "Contact", href: "/contacts", video: "https://hackfirst.io/video/menu-04.mp4", num: "04" },
];

export default function Menu({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [activeVideo, setActiveVideo] = useState("https://hackfirst.io/video/menu-01.mp4");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  return (
    <div className={`menu ${isOpen ? "show" : ""}`}>
      <div className="menu-head">
        <img src="/img/svg/logo-new.svg" alt="OnPaper" className="menu-logo" />
        <div className="menu-close js-open-menu" onClick={onClose}>
          close
        </div>
      </div>
      <div className="menu-main">
        <div className="menu-row">
          <div className="menu-side">
            <div className="menu-label">Discover</div>
          </div>
          <div className="menu-content">
            <ul className="menu-nav">
              {navItems.map((item) => (
                <li
                  key={item.href}
                  onMouseEnter={() => setActiveVideo(item.video)}
                >
                  <Link href={item.href} onClick={onClose}>
                    <span style={{ fontSize: "8px", textTransform: "uppercase", lineHeight: 1.4, letterSpacing: "0.04em", display: "block" }}>
                      [ 00 - {item.num} ]
                    </span>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="menu-bottom">
        <div className="menu-row">
          <div className="menu-side">
            <div className="menu-label">Community</div>
          </div>
          <div className="menu-content">
            <ul className="menu-socials">
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
      </div>
      <div className="menu-video__wrapper">
        <video
          key={activeVideo}
          preload="auto"
          playsInline
          autoPlay
          loop
          muted
          className="menu-video"
          src={activeVideo}
        />
      </div>
    </div>
  );
}
