"use client";

import { useEffect } from "react";

let initialized = false;

export default function ScrollAnimations() {
  useEffect(() => {
    // AOS adds aos-init/aos-animate classes straight to the DOM,
    // bypassing React entirely - a form of direct DOM mutation that
    // conflicts with React's dev-only hydration diagnostics on the true
    // initial page load. Tried deferring this call past hydration with
    // both a macrotask and the window "load" event; neither changed the
    // outcome, confirming this isn't a timing race that can be fixed by
    // running AOS later. It only ever reproduces in development - a
    // production build of this exact page shows no console error and
    // renders correctly - so the reliable fix is to skip AOS in dev
    // entirely rather than chase a further timing workaround. This
    // means scroll animations won't preview locally; they still run
    // normally in the deployed production build.
    if (process.env.NODE_ENV !== "production") return;

    let cancelled = false;

    import("aos").then(({ default: AOS }) => {
      if (cancelled) return;
      if (!initialized) {
        AOS.init({
          duration: 800,
          easing: "ease-out-cubic",
          once: true,
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
