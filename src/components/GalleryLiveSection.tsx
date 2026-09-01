"use client";

import React, { useEffect, useRef, useState } from "react";

export function GalleryLiveSection() {
  const scrubContainerRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const videoHostRef = useRef<HTMLDivElement>(null);
  const videoElRef = useRef<HTMLVideoElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const scrubContainer = scrubContainerRef.current;
    const stage = stageRef.current;
    const img = imgRef.current;
    const videoHost = videoHostRef.current;
    const videoEl = videoElRef.current;
    const overlay = overlayRef.current;
    const label = labelRef.current;

    if (!scrubContainer || !stage || !img || !videoHost || !overlay || !label) {
      return;
    }

    let rafId: number | null = null;

    const applyMobileStatic = () => {
      img.style.transform = "scale(1) translateY(0)";
      img.style.filter = "none";
      videoHost.style.transform = "scale(1) translateY(0)";
      videoHost.style.filter = "none";
      if (videoEl) videoEl.style.filter = "none";
      overlay.style.opacity = "0";
      overlay.style.backdropFilter = "none";
      label.style.opacity = "0";
      label.style.display = "none";
    };

    const update = () => {
      const isMobile = window.innerWidth <= 767;
      if (isMobile) {
        applyMobileStatic();
        return;
      } else {
        label.style.display = "flex";
      }

      const vh = window.innerHeight || document.documentElement.clientHeight;
      const top = scrubContainer.offsetTop;
      const pin = stage.offsetHeight;
      const buffer = 0.2 * vh;
      const effectiveRange = scrubContainer.offsetHeight - pin - buffer;
      const end = top + Math.max(100, effectiveRange);

      const y = window.scrollY;
      const t = Math.max(0, Math.min(1, (y - top) / (end - top)));

      // Reference width from wide card or standard layout
      const wideWidth = 1100;
      let targetEndScale = (1.2 * wideWidth) / (window.innerWidth || 1);
      const boost = 1.15;
      targetEndScale = Math.min(1.8, targetEndScale * boost);

      const startScale = 1.89;
      const scale = startScale - (startScale - targetEndScale) * t;
      const blur = 24 * (1 - t);

      const startOvershoot = vh * 0.05;
      const overshootY = -(1 - t) * startOvershoot;

      const frameWidthPx = img.offsetWidth || Math.min(1400, window.innerWidth * 0.98);
      let imageAspect = 0.62;
      if (img.naturalWidth && img.naturalHeight) {
        imageAspect = img.naturalHeight / img.naturalWidth;
      }

      const scaledHeight = frameWidthPx * imageAspect * scale;
      const centerY = (vh - scaledHeight) / 2;
      const shiftY = overshootY + centerY * (t * t);

      // Apply transformations to MacBook image
      img.style.transform = `translateY(${shiftY.toFixed(2)}px) scale(${scale.toFixed(3)})`;
      img.style.filter = `blur(${(blur / 2).toFixed(2)}px)`;

      // Video host transform with slight boost at start to prevent gap
      const videoBoost = 1.05;
      const boostFactor = 1 + (videoBoost - 1) * (1 - t);
      const videoScale = scale * boostFactor;
      videoHost.style.transform = `translateY(${shiftY.toFixed(2)}px) scale(${videoScale.toFixed(3)})`;
      videoHost.style.filter = `blur(${blur.toFixed(2)}px)`;

      if (videoEl) {
        videoEl.style.filter = `blur(${blur.toFixed(2)}px)`;
      }

      // Overlay & label fading
      const overlayOpacity = 0.4 * (1 - t);
      overlay.style.opacity = overlayOpacity.toFixed(3);
      overlay.style.backdropFilter = `blur(${blur.toFixed(2)}px)`;
      (overlay.style as unknown as Record<string, string>)["webkitBackdropFilter"] = `blur(${blur.toFixed(2)}px)`;
      label.style.opacity = (1 - t).toFixed(3);
    };

    const onScrollOrResize = () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(update);
    };

    // Auto-play video on mount
    if (videoEl) {
      videoEl.play().catch(() => {});
    }

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
    <section id="gallery" className="gallery">
      <div
        className="gallery-container"
        ref={scrubContainerRef}
        data-gallery-scrub
      >
        <div
          className="gallery-stage"
          ref={stageRef}
          data-gallery-stage
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
          {/* Hardware Frame: MacBook */}
          <img
            ref={imgRef}
            className="gallery-stage__image"
            src="/images/showmacimg.png"
            alt="LaunchMe on Mac"
          />

          {/* Embedded Screen Video */}
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

          {/* Frosted Dark Overlay */}
          <div
            ref={overlayRef}
            className="gallery-stage__overlay"
            aria-hidden="true"
          />

          {/* Reactive Title: "Yes, it’s live" */}
          <div
            ref={labelRef}
            className="gallery-stage__label"
            aria-hidden="true"
          >
            Yes, it’s live
          </div>
        </div>
      </div>

      {/* Caption Below Sticky Stage */}
      <p className="gallery-caption">
        Set animated live wallpapers to match your mood in the moment. They'll
        make LaunchMe always fit your style and surroundings.
        <br />
        You can use MP4, MOV, AVI, MKV formats.
      </p>
    </section>
  );
}
