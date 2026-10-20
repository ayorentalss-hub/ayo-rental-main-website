"use client";

import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <div className="mobile-menu">
      <button
        aria-controls="mobile-navigation"
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        className="mobile-menu-button"
        onClick={() => setIsOpen((open) => !open)}
        type="button"
      >
        {isOpen ? <X size={19} /> : <Menu size={19} />}
        <span>Menu</span>
      </button>
      {isOpen ? (
        <nav aria-label="Mobile navigation" className="mobile-menu-panel" id="mobile-navigation">
          <Link href="/#app-preview" onClick={closeMenu}>The app</Link>
          <Link href="/about" onClick={closeMenu}>About</Link>
          <Link href="/contact" onClick={closeMenu}>Contact</Link>
          <Link className="mobile-menu-cta" href="/#coming-soon" onClick={closeMenu}>
            App coming soon <ArrowRight size={15} />
          </Link>
        </nav>
      ) : null}
    </div>
  );
}
