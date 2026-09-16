import { basePath } from "@/lib/basePath";
import "./PageLoader.css";

export default function PageLoader({ leaving = false, initial = false }: { leaving?: boolean; initial?: boolean }) {
  return (
    <div
      className={`page-loader${leaving ? " page-loader--leaving" : ""}`}
      data-initial-loader={initial || undefined}
      role="status"
      aria-live="polite"
      aria-label="Loading page"
    >
      <div className="page-loader__content">
        <div className="page-loader__brand">
          <img src={`${basePath}/assets/images/logo-dark.svg`} width="218" height="80" alt="Shivantra" fetchPriority="high" />
        </div>
        <div className="page-loader__track" aria-hidden="true"><span /></div>
        <p className="page-loader__caption">A little moment. A world of possibilities.</p>
        <span className="page-loader__label">Loading your page<span aria-hidden="true">…</span></span>
      </div>
      <span className="page-loader__footer" aria-hidden="true">IDEAS INTO IMPACT</span>
    </div>
  );
}
