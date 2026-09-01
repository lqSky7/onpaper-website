"use client";

import React, { useEffect, useRef } from "react";

export function GallerySection() {
  const scrubContainerRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const videoHostRef = useRef<HTMLDivElement>(null);
  const videoElRef = useRef<HTMLVideoElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    const scrubContainer = scrubContainerRef.current;
    const img = imgRef.current;
    const videoHost = videoHostRef.current;
    const videoEl = videoElRef.current;
    const overlay = overlayRef.current;
    const label = labelRef.current;

    if (!stage || !scrubContainer || !img || !videoHost || !overlay || !label) {
      return;
    }

    const isMobile = () =>
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(max-width: 767px)").matches;

    function applyMobileStatic() {
      if (!img || !videoHost || !overlay || !label) return;
      img.style.transform = "scale(1) translateY(0)";
      img.style.filter = "none";
      videoHost.style.transform = "scale(1) translateY(0)";
      videoHost.style.filter = "none";
      if (videoEl) videoEl.style.filter = "none";
      overlay.style.opacity = "0";
      overlay.style.backdropFilter = "none";
      (overlay.style as unknown as Record<string, string>)["webkitBackdropFilter"] = "none";
      label.style.display = "none";
    }

    if (isMobile()) {
      applyMobileStatic();
      return;
    }

    let rafId: number | null = null;

    function update() {
      if (!stage || !scrubContainer || !img || !videoHost || !overlay || !label) {
        return;
      }
      if (isMobile()) {
        applyMobileStatic();
        return;
      }
      label.style.display = "flex";

      const vh = window.innerHeight || document.documentElement.clientHeight;
      const rect = scrubContainer.getBoundingClientRect();
      const top = rect.top + window.scrollY;
      const pin = stage.offsetHeight;
      const buffer = 0.2 * vh;
      const effectiveRange = scrubContainer.offsetHeight - pin - buffer;
      const end = top + effectiveRange;

      const y = window.scrollY;
      const t = Math.max(0, Math.min(1, (y - top) / (end - top)));

      const wideRef = document.querySelector(".lm-card--wide");
      const wideWidth = wideRef ? wideRef.getBoundingClientRect().width : 1100;
      let targetEndScale = (1.2 * wideWidth) / (window.innerWidth || 1);
      const styleVars = getComputedStyle(stage);
      const boost =
        parseFloat(styleVars.getPropertyValue("--final-scale-boost")) || 1;
      targetEndScale = targetEndScale * boost;
      targetEndScale = Math.min(targetEndScale, 1.8);

      const startScale = 1.89;
      const scale = startScale - (startScale - targetEndScale) * t;
      const blur = 24 * (1 - t);

      const startOvershootRaw =
        styleVars.getPropertyValue("--stage-start-overshoot").trim() || "0";
      let startOvershoot: number;
      if (startOvershootRaw.endsWith("vh")) {
        const num = parseFloat(startOvershootRaw);
        startOvershoot = vh * (num / 100);
      } else if (startOvershootRaw.endsWith("px")) {
        startOvershoot = parseFloat(startOvershootRaw);
      } else {
        startOvershoot = parseFloat(startOvershootRaw) || 0;
      }

      const overshootY = -(1 - t) * startOvershoot;
      const frameWidthPx = img.offsetWidth || 0;
      let imageAspect = 0.62;
      if (img.naturalWidth && img.naturalHeight) {
        imageAspect = img.naturalHeight / img.naturalWidth;
      } else {
        const imgRect = img.getBoundingClientRect();
        imageAspect =
          imgRect.height > 0 && frameWidthPx > 0
            ? imgRect.height / Math.max(scale, 0.0001) / frameWidthPx
            : 0.62;
      }

      const scaledHeight = frameWidthPx * imageAspect * scale;
      const centerY = (vh - scaledHeight) / 2;
      const shiftY = overshootY + centerY * (t * t);

      img.style.transform =
        "translateY(" + shiftY.toFixed(2) + "px) scale(" + scale.toFixed(3) + ")";
      img.style.filter = "blur(" + (blur / 2).toFixed(2) + "px)";

      const videoBoost =
        parseFloat(styleVars.getPropertyValue("--video-start-boost")) || 1.05;
      const boostFactor = 1 + (videoBoost - 1) * (1 - t);
      const videoScale = scale * boostFactor;
      videoHost.style.transform =
        "translateY(" + shiftY.toFixed(2) + "px) scale(" + videoScale.toFixed(3) + ")";
      videoHost.style.filter = "blur(" + blur.toFixed(2) + "px)";

      if (videoEl) {
        videoEl.style.filter = "blur(" + blur.toFixed(2) + "px)";
      }

      const overlayOpacity = 0.4 * (1 - t);
      overlay.style.opacity = overlayOpacity.toFixed(3);
      overlay.style.backdropFilter = "blur(" + blur.toFixed(2) + "px)";
      (overlay.style as unknown as Record<string, string>)["webkitBackdropFilter"] =
        "blur(" + blur.toFixed(2) + "px)";
      label.style.opacity = (1 - t).toFixed(3);
    }

    const onScrollOrResize = () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);

    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, []);

  return (
    <section id="gallery" className="section gallery">
      <div className="container" data-gallery-scrub ref={scrubContainerRef}>
        <div
          className="gallery-stage"
          data-gallery-stage
          ref={stageRef}
          style={
            {
              "--screen-left": "9%",
              "--screen-top": "2%",
              "--screen-width": "82%",
              "--screen-aspect-ratio": "1.54",
              "--screen-radius": "2px",
              "--stage-final-shift-y": "100px",
              "--screen-offset-y": "-12px",
              "--mobile-stage-width": "92vw",
            } as React.CSSProperties
          }
        >
          <img
            ref={imgRef}
            className="gallery-stage__image"
            src="/images/showmacimg.png"
            alt="LaunchMe on Mac"
          />
          <div
            ref={videoHostRef}
            className="gallery-stage__video"
            aria-hidden="true"
          >
            <div className="gallery-stage__video-box">
              <video
                ref={videoElRef}
                src="/images/demo.mp4"
                loop
                muted
                autoPlay
                playsInline
                preload="auto"
              />
            </div>
          </div>
          <div
            ref={overlayRef}
            className="gallery-stage__overlay"
            aria-hidden="true"
          ></div>
          <div
            ref={labelRef}
            className="gallery-stage__label"
            aria-hidden="true"
          >
            Yes, it’s live
          </div>
        </div>
      </div>
      <p className="gallery-caption">
        Set animated live wallpapers to match your mood in the moment. They'll
        make LaunchMe always fit your style and surroundings.
        <br />
        You can use MP4, MOV, AVI, MKV formats.
      </p>
    </section>
  );
}
