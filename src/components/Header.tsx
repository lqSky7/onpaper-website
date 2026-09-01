"use client";

import React, { useState } from "react";
import Link from "next/link";
import { HoverLink } from "./HoverLink";
import Menu from "./Menu";

export default function Header({ isHome = true }: { isHome?: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className={`header ${isHome ? "header-home" : ""}`}>
        <div className={`header-logo ${!isHome ? "no-anim" : ""}`}>
          <Link href="/">
            <img src="/img/svg/logo-new.svg" alt="OnPaper" />
          </Link>
        </div>
        <ul className="header-nav">
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
        <div
          className="header-burger js-open-menu"
          onClick={() => setMenuOpen(true)}
        ></div>
      </header>

      <Menu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
