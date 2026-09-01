"use client";

import { useEffect } from "react";

export function ClientInteractions() {
  useEffect(() => {
    // 1) Ensure card sizes: square cards keep 1:1; wide card matches square height
    function applyHeights() {
      document.querySelectorAll(".section").forEach((section) => {
        const container = section.querySelector(".container") || section;
        const squares = Array.from(
          container.querySelectorAll<HTMLElement>(".lm-card--square")
        );
        if (squares.length === 0) return;
        const size = squares[0].getBoundingClientRect().width;
        const isMobileCards = window.matchMedia("(max-width: 767px)").matches;
        squares.forEach((sq) => {
          sq.style.height = size + "px";
        });
        container
          .querySelectorAll<HTMLElement>(".lm-card--wide")
          .forEach((wide) => {
            wide.style.height = isMobileCards ? "" : size + "px";
          });
      });
    }

    applyHeights();
    window.addEventListener("resize", applyHeights);

    // 2) Apple-style scroll reveal: fade + slide up on enter
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const sel =
      ".hero-eyebrow, .hero-title, .hero-sub, .cta-group, .section-kicker, .section-title, .section-sub, .lm-card, .ai-vi__eyebrow, .ai-vi__title, .ai-vi__sub, .vi-card";
    const els = Array.from(document.querySelectorAll<HTMLElement>(sel));

    if (els.length > 0) {
      const groups = new Map<HTMLElement, HTMLElement[]>();
      els.forEach((el) => {
        el.classList.add("reveal");
        const p = el.parentElement as HTMLElement;
        if (p) {
          const arr = groups.get(p) || [];
          arr.push(el);
          groups.set(p, arr);
        }
      });

      groups.forEach((arr) => {
        if (arr.length > 1) {
          arr.forEach((el, i) => {
            el.style.transitionDelay = Math.min(i * 70, 350) + "ms";
          });
        }
      });

      if (reduce || !("IntersectionObserver" in window)) {
        els.forEach((el) => el.classList.add("is-in"));
      } else {
        const io = new IntersectionObserver(
          (entries) => {
            entries.forEach((e) => {
              if (e.isIntersecting) {
                e.target.classList.add("is-in");
                io.unobserve(e.target);
              }
            });
          },
          { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
        );
        els.forEach((el) => io.observe(el));
      }
    }

    return () => {
      window.removeEventListener("resize", applyHeights);
    };
  }, []);

  return null;
}
