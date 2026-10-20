"use client";

import { useEffect } from "react";

export default function HomeMotion() {
  useEffect(() => {
    const home = document.querySelector<HTMLElement>(".home-page");
    if (!home || !("IntersectionObserver" in window)) {
      return;
    }

    home.classList.add("motion-ready");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -32px 0px" },
    );

    home.querySelectorAll<HTMLElement>("[data-motion]").forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
      home.classList.remove("motion-ready");
    };
  }, []);

  return null;
}
