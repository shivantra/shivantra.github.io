"use client";

import { useEffect } from "react";

let initialized = false;

export default function ScrollAnimations() {
  useEffect(() => {
    let cancelled = false;

    import("aos").then(({ default: AOS }) => {
      if (cancelled) return;
      if (!initialized) {
        AOS.init({
          duration: 800,
          easing: "ease-out-cubic",
          once: true,
          // Route markup must hydrate before AOS adds classes to it.
          // Refresh from this template's effect, not a DOM mutation observer.
          disableMutationObserver: true,
        });
        initialized = true;
      } else {
        AOS.refreshHard();
      }
    });

    return () => { cancelled = true; };
  }, []);

  return null;
}
