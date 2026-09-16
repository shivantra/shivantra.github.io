"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import PageLoader from "./PageLoader";

// This lives in app/template.tsx, which Next.js remounts on every
// navigation (unlike layout.tsx, which persists across route changes).
// Without this flag, every single link click would re-trigger the
// full-screen "loading" overlay and hide the new page's content again
// until it resolved - it's meant to be a one-time splash for the
// genuine initial page load only, same as ScrollAnimations' `initialized`.
//
// This flag must NEVER affect the initial render output (the useState
// initializer below always starts at "loading", unconditionally). This
// is a statically-exported site, so every route's HTML is pre-rendered
// independently at build time with this module fresh (flag always
// false) - that static HTML always contains the loader markup. If a
// later page's initial render read the flag directly, a client that
// already completed page 1 would try to render "no loader" against
// pre-built HTML that says "show the loader", a hydration mismatch
// severe enough that React abandons reconciling the subtree entirely.
// The correction below happens in a layout effect instead, which runs
// after that first commit is already reconciled against the server
// output, so it never touches hydration - just prevents a visible
// flash before the browser paints.
let hasShownInitialLoader = false;

export default function PageReadyLoader() {
  const [phase, setPhase] = useState<"loading" | "leaving" | "done">("loading");

  useLayoutEffect(() => {
    if (hasShownInitialLoader) setPhase("done");
  }, []);

  useEffect(() => {
    if (hasShownInitialLoader) return;
    // Set the flag on actual completion, not here at the top - React
    // Strict Mode's dev-only double-invoke (mount, cleanup, mount again)
    // would otherwise flip it during the throwaway first mount, causing
    // both that mount's cancelled race and the real second mount's
    // early-return to skip setPhase entirely and leave the overlay
    // stuck forever in development.
    let cancelled = false;
    let fadeTimer: ReturnType<typeof setTimeout>;
    const cleanups: (() => void)[] = [];
    // Wait only for images in the first screen, not lazy images or analytics.
    const images = Array.from(document.images).filter((image) => {
      if (image.closest(".page-loader") || image.complete || image.loading === "lazy") return false;
      const rect = image.getBoundingClientRect();
      // Images without explicit dimensions can be zero-sized until loaded.
      return image.getClientRects().length > 0 && rect.top < window.innerHeight && rect.bottom >= 0;
    });
    const ready = images.map((image) => new Promise<void>((resolve) => {
      const finish = () => resolve();
      image.addEventListener("load", finish, { once: true });
      image.addEventListener("error", finish, { once: true });
      cleanups.push(() => {
        image.removeEventListener("load", finish);
        image.removeEventListener("error", finish);
      });
      if (image.complete) resolve();
    }));
    let deadline: ReturnType<typeof setTimeout>;
    const timeout = new Promise<void>((resolve) => { deadline = setTimeout(resolve, 6000); });
    // A slow or failed asset must never keep the whole website covered.
    Promise.race([Promise.all([...ready, document.fonts.ready]), timeout]).then(() => {
      if (cancelled) return;
      hasShownInitialLoader = true;
      clearTimeout(deadline);
      cleanups.forEach((cleanup) => cleanup());
      setPhase("leaving");
      fadeTimer = setTimeout(() => setPhase("done"), 200);
    });
    return () => {
      cancelled = true;
      clearTimeout(deadline);
      clearTimeout(fadeTimer);
      cleanups.forEach((cleanup) => cleanup());
    };
  }, []);

  return (
    <>
      {phase !== "done" && <PageLoader initial leaving={phase === "leaving"} />}
      <noscript><style>{'[data-initial-loader] { display: none !important; }'}</style></noscript>
    </>
  );
}
