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
    let safetyTimer: ReturnType<typeof setTimeout>;

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

      // AOS recalculates each element's position against the current
      // scroll offset to decide what's already "in view" and should be
      // revealed immediately - both on the very first init and on a
      // later refreshHard(). That calculation has turned out to be
      // racy even on a cold first load, not just client-side
      // navigation: confirmed in production, some cold visits reveal
      // every element correctly, others leave the majority of them
      // permanently stuck at opacity:0 (data-aos elements start hidden
      // by AOS's own CSS until .aos-animate is added). Since
      // `once: true` makes re-revealing something already shown a
      // no-op, unconditionally force-revealing anything AOS hasn't
      // marked shortly after is a pure safety net on every mount - it
      // guarantees a page can never get stuck blank, at the cost of a
      // below-the-fold element occasionally appearing without its
      // scroll-in animation.
      safetyTimer = setTimeout(() => {
        if (cancelled) return;
        document.querySelectorAll("[data-aos]:not(.aos-animate)").forEach((el) => {
          el.classList.add("aos-animate");
        });
      }, 400);
    });

    return () => {
      cancelled = true;
      clearTimeout(safetyTimer);
    };
  }, []);

  return null;
}
