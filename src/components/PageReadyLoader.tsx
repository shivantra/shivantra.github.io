"use client";

import { useEffect, useState } from "react";
import PageLoader from "./PageLoader";

export default function PageReadyLoader() {
  const [phase, setPhase] = useState<"loading" | "leaving" | "done">("loading");

  useEffect(() => {
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
