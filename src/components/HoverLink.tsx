"use client";

import React, { useState } from "react";
import Link from "next/link";

const lettersAndSymbols = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
  "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
  "!", "@", "#", "$", "%", "^", "&", "*", "-", "_", "+", "=", ";", ":", "<", ">", ","
];

export function HoverLink({
  href,
  children,
  className = "",
  target,
}: {
  href: string;
  children: string;
  className?: string;
  target?: string;
}) {
  const [displayText, setDisplayText] = useState(children);

  const handleMouseEnter = () => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(
        children
          .split("")
          .map((char, index) => {
            if (index < iteration) {
              return children[index];
            }
            if (char === " ") return " ";
            return lettersAndSymbols[
              Math.floor(Math.random() * lettersAndSymbols.length)
            ];
          })
          .join("")
      );

      if (iteration >= children.length) {
        clearInterval(interval);
      }
      iteration += 1 / 2;
    }, 30);
  };

  const handleMouseLeave = () => {
    setDisplayText(children);
  };

  return (
    <Link
      href={href}
      target={target}
      className={`hover-effect hover-effect--bg ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {displayText}
    </Link>
  );
}
