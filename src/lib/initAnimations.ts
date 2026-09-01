"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

export function initHackFirstAnimations() {
  if (typeof window === "undefined") return () => {};

  const isSmallScreen = window.innerWidth < 1600;
  const isMobile = window.innerWidth < 900;

  gsap.config({ autoSleep: 60, force3D: true, nullTargetWarn: false });

  const ctx = gsap.context(() => {
    // 1. Solution Multi-screen scrub timeline
    const screens = gsap.utils.toArray<HTMLElement>(".solution-screen");
    if (screens.length >= 4) {
      const solutionTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".solution",
          start: "top top",
          end: "bottom bottom",
          scrub: 0.5,
          pin: ".solution-container",
        },
        defaults: { ease: "none" },
      });

      gsap.set(screens[3], { y: 200, filter: "blur(20px)", opacity: 0 });

      screens.forEach((screen) => {
        screen.querySelectorAll<HTMLElement>("[animate-blur-text]").forEach((el) => {
          new SplitType(el, { types: "words", tagName: "el" });
        });
      });

      solutionTl
        .addLabel("show2", 0.1)
        .addLabel("show3", 0.15)
        .addLabel("shrink", 0.25)
        .addLabel("show4", 0.35)
        .to(screens[0], { opacity: 0, duration: 0.01 }, "show2")
        .to(screens[1], { opacity: 1, duration: 0.01 }, "show2")
        .to(screens[1], { opacity: 0, duration: 0.01 }, "show3")
        .to(
          screens[2],
          {
            opacity: 1,
            duration: 0.01,
            onEnter: () => {
              screens[2].querySelectorAll<HTMLElement>("[animate-blur-text]").forEach(animateWordsBlur);
            },
            onEnterBack: () => {
              screens[2].querySelectorAll<HTMLElement>("[animate-blur-text]").forEach(animateWordsBlur);
            },
          },
          "show3"
        )
        .to(
          screens[2],
          {
            scale: 0.8,
            filter: "blur(30px)",
            transformOrigin: "center center",
            opacity: 0,
          },
          "shrink"
        )
        .fromTo(
          screens[3],
          { y: 200, filter: "blur(20px)", opacity: 0 },
          { y: 0, filter: "blur(0px)", opacity: 1 },
          "show4"
        );
    }

    // 2. Issue items scroll toggle
    const issueItems = document.querySelectorAll<HTMLElement>(".issue-item");
    if (issueItems.length) {
      issueItems.forEach((item) => {
        ScrollTrigger.create({
          trigger: item,
          start: "top center",
          end: "bottom center",
          onToggle: (self) => {
            if (self.isActive) {
              issueItems.forEach((el) => el.classList.remove("show"));
              item.classList.add("show");
            } else {
              item.classList.remove("show");
            }
          },
        });
      });
    }

    // 3. Defeat scaling box
    if (document.querySelector(".defeat-wrapper")) {
      const defeatTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".defeat-body",
          start: "top top",
          end: "+=1200",
          pin: true,
          scrub: true,
          anticipatePin: 1,
        },
      });
      defeatTl.to({}, { duration: 0.5 });
      defeatTl.to(".defeat-wrapper", { scale: 0.5, ease: "none", duration: 5 });
    }

    // 4. Smooth Header logo scroll animation
    const logoWidth = isSmallScreen ? "110px" : "140px";

    gsap.to(".header-logo:not(.no-anim)", {
      top: "20px",
      ease: "none",
      scrollTrigger: {
        start: 0,
        end: () => 0.7 * window.innerHeight,
        scrub: 0.5,
      },
    });

    gsap.to(".header-logo:not(.no-anim) img", {
      width: logoWidth,
      ease: "none",
      scrollTrigger: {
        start: 0,
        end: () => 0.7 * window.innerHeight,
        scrub: 0.5,
      },
    });

    ScrollTrigger.create({
      start: 0,
      end: () => 0.7 * window.innerHeight,
      scrub: 0.5,
      onUpdate: (self) => {
        const header = document.querySelector(".header-home");
        if (header) {
          if (self.progress >= 0.98) {
            header.classList.add("difference");
          } else {
            header.classList.remove("difference");
          }
        }
      },
    });

    // 5. Blur text and elements
    function createScrollAnimation(triggerEl: HTMLElement, tl: gsap.core.Timeline) {
      ScrollTrigger.create({
        trigger: triggerEl,
        start: "top bottom",
        onLeaveBack: () => {
          tl.progress(0);
          tl.pause();
        },
      });
      ScrollTrigger.create({
        trigger: triggerEl,
        start: "top 80%",
        onEnter: () => tl.play(),
      });
    }

    function animateWordsBlur(el: HTMLElement) {
      const words = el.querySelectorAll(".word");
      if (words.length) {
        gsap.fromTo(
          words,
          { opacity: 0, y: "1em", filter: "blur(10px)" },
          {
            opacity: 1,
            y: "0em",
            filter: "blur(0px)",
            duration: 0.6,
            ease: "power2.out",
            stagger: { amount: 0.2 },
          }
        );
      }
    }

    document.querySelectorAll<HTMLElement>("[animate-blur-text]").forEach((el) => {
      new SplitType(el, { types: "words", tagName: "el" });
      const tl = gsap.timeline({ paused: true });
      tl.from(el.querySelectorAll(".word"), {
        opacity: 0,
        y: "1em",
        filter: "blur(10px)",
        duration: 0.6,
        ease: "power2.out",
        stagger: { amount: 0.2 },
      });
      if (el.hasAttribute("data-instant")) {
        tl.play();
      } else {
        createScrollAnimation(el, tl);
      }
    });

    document.querySelectorAll<HTMLElement>("[animate-blur-el]").forEach((el) => {
      const tl = gsap.timeline({ paused: true });
      tl.from(el, {
        opacity: 0,
        y: "1em",
        filter: "blur(10px)",
        duration: 0.6,
        ease: "power2.out",
        stagger: { amount: 0.2 },
      });
      if (el.hasAttribute("data-instant")) {
        tl.play();
      } else {
        createScrollAnimation(el, tl);
      }
    });

    // 6. Floating Layout Titles & Counts
    if (!isMobile) {
      document.querySelectorAll<HTMLElement>(".layout-title").forEach((title) => {
        const layoutId = title.getAttribute("data-layout");
        const section = document.querySelector<HTMLElement>(`section[data-layout="${layoutId}"]`);
        const offset = title.offsetHeight;

        if (layoutId !== "01" && section) {
          gsap.set(title, { opacity: 0, y: "-1em", filter: "blur(10px)" });
          ScrollTrigger.create({
            trigger: section,
            start: "top top",
            end: `bottom-=${offset} top`,
            onEnter: () => {
              gsap.to(title, {
                opacity: 1,
                y: "0em",
                filter: "blur(0px)",
                duration: 0.4,
                ease: "power2.out",
                immediateRender: false,
                overwrite: "auto",
              });
            },
            onLeave: () => {
              gsap.to(title, {
                opacity: 0,
                y: "1em",
                filter: "blur(10px)",
                duration: 0.3,
                ease: "power2.in",
                immediateRender: false,
                overwrite: "auto",
              });
            },
            onEnterBack: () => {
              gsap.to(title, {
                opacity: 1,
                y: "0em",
                filter: "blur(0px)",
                duration: 0.4,
                ease: "power2.out",
                immediateRender: false,
                overwrite: "auto",
              });
            },
            onLeaveBack: () => {
              gsap.to(title, {
                opacity: 0,
                y: "-1em",
                filter: "blur(10px)",
                duration: 0.3,
                ease: "power2.in",
                immediateRender: false,
                overwrite: "auto",
              });
            },
          });
        }
      });

      document.querySelectorAll<HTMLElement>(".layout-count").forEach((countEl) => {
        const layoutId = countEl.getAttribute("data-layout");
        const section = document.querySelector<HTMLElement>(`section[data-layout="${layoutId}"]`);
        const offset = countEl.offsetHeight;
        const titleEl = document.querySelector<HTMLElement>(`.layout-title[data-layout="${layoutId}"]`);

        if (section) {
          gsap.set(countEl, { opacity: 0, y: "-1em", filter: "blur(10px)" });
          if (titleEl) gsap.set(titleEl, { opacity: 0, y: "-1em", filter: "blur(10px)" });

          const handleEnter = () => {
            gsap.to(countEl, {
              opacity: 1,
              y: "0em",
              filter: "blur(0px)",
              duration: 0.4,
              ease: "power2.out",
              immediateRender: false,
              overwrite: "auto",
            });
            if (layoutId === "01" && titleEl) {
              gsap.to(titleEl, {
                opacity: 1,
                y: "0em",
                filter: "blur(0px)",
                duration: 0.4,
                ease: "power2.out",
                immediateRender: false,
                overwrite: "auto",
              });
            }
          };

          const handleLeave = () => {
            gsap.to(countEl, {
              opacity: 0,
              y: "1em",
              filter: "blur(10px)",
              duration: 0.3,
              ease: "power2.in",
              immediateRender: false,
              overwrite: "auto",
            });
            if (layoutId === "01" && titleEl) {
              gsap.to(titleEl, {
                opacity: 0,
                y: "-1em",
                filter: "blur(10px)",
                duration: 0.3,
                ease: "power2.in",
                immediateRender: false,
                overwrite: "auto",
              });
            }
          };

          ScrollTrigger.create({
            trigger: section,
            start: () => `top bottom-=${offset}`,
            end: () => `bottom bottom-=${offset}`,
            onEnter: handleEnter,
            onLeave: handleLeave,
            onEnterBack: handleEnter,
            onLeaveBack: handleLeave,
          });
        }
      });
    }

    // 7. Scroll Progress Percent
    const progressPercent = document.querySelector<HTMLElement>(".scroll-progress__percent");
    if (progressPercent) {
      gsap.to(
        {},
        {
          scrollTrigger: {
            start: 0,
            end: document.documentElement.scrollHeight - window.innerHeight,
            scrub: true,
            onUpdate: (self) => {
              const p = Math.round(100 * self.progress);
              progressPercent.textContent = `${p}%`;
            },
          },
        }
      );
    }
  });

  ScrollTrigger.refresh();

  return () => {
    ctx.revert();
  };
}
