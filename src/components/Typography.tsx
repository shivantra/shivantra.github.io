import React from "react";

export function SubTitle({
  children,
  marginBottom,
  hero,
}: {
  children: React.ReactNode;
  marginBottom?: boolean;
  hero?: boolean;
}) {
  return (
    <span
      className={`${hero ? "hero-subtitle" : "subtitle"} text-uppercase${marginBottom ? " mb-3" : ""}`}
      data-aos="fade-up"
      data-aos-delay="0"
    >
      {children}
    </span>
  );
}

export function MainTitle({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="hero-title mb-3" data-aos="fade-up" data-aos-delay="100">
      {children}
    </h1>
  );
}

export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-3" data-aos="fade-up" data-aos-delay="100">
      {children}
    </h2>
  );
}

export function ThirdTitle({ children, className }: { children: React.ReactNode, className?: string }) {
  const combined = [className].filter(Boolean).join(" ") || undefined;
  return (
    <h3 className={combined}>{children}</h3>
  );
}

export function ForthTitle({ children, className }: { children: React.ReactNode, className?: string; }) {
  const combined = [className].filter(Boolean).join(" ") || undefined;
  return (
    <h4 className={combined} data-aos="fade-up" data-aos-delay="300">
      {children}
    </h4>
  );
}

export function FifthTitle({ children, className, noAnimation }: { children: React.ReactNode; className?: string; noAnimation?: boolean }) {
  const combined = [className].filter(Boolean).join(" ") || undefined;
  return (
    <h5 className={combined} {...(!noAnimation && { "data-aos": "fade-up", "data-aos-delay": "300" })}>
      {children}
    </h5>
  );
}

export function SixthTitle({ children, className, noAnimation }: { children: React.ReactNode; className?: string; noAnimation?: boolean }) {
  const combined = [className].filter(Boolean).join(" ") || undefined;
  return (
    <h6 className={combined} {...(!noAnimation && { "data-aos": "fade-up", "data-aos-delay": "300" })}>
      {children}
    </h6>
  );
}

export function Button({
  children,
  href,
  className,
  onClick,
  type = "button",
  disabled,
  target,
  rel,
  referrerPolicy,
  id,
  ariaLabel,
}: {
  children: React.ReactNode;
  href?: string;
  className?: string;
  onClick?: React.MouseEventHandler;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  target?: string;
  rel?: string;
  referrerPolicy?: React.HTMLAttributeReferrerPolicy;
  id?: string;
  ariaLabel?: string;
}) {
  const combined = ["btn", className].filter(Boolean).join(" ");
  if (href) {
    return (
      <a
        href={href}
        className={combined}
        onClick={onClick}
        target={target}
        rel={rel}
        referrerPolicy={referrerPolicy}
        id={id}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  }
  return (
    <button
      className={combined}
      onClick={onClick}
      type={type}
      disabled={disabled}
      id={id}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}

export function FeatureItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="d-flex align-items-center gap-2">
      <span className="icon rounded-circle text-center">
        <i className="bi bi-check" aria-hidden="true"></i>
      </span>
      <span className="text">{children}</span>
    </li>
  );
}

export function SocialLink({
  href,
  icon,
  alt,
  label,
}: {
  href: string;
  icon: string;
  alt: string;
  label: string;
}) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="social-link">
      <img src={`/assets/images/${icon}.svg`} alt={alt} className="social-icon" />
      {label}
    </a>
  );
}

export function Description({
  children,
  hero,
  aos,
  delay,
  className,
}: {
  children: React.ReactNode;
  hero?: boolean;
  aos?: string;
  delay?: number;
  className?: string;
}) {
  const base = hero ? "hero-description mb-4 mb-lg-5" : undefined;
  const combined = [base, className].filter(Boolean).join(" ") || undefined;
  return (
    <p
      className={combined}
      {...(aos && { "data-aos": aos })}
      {...(delay !== undefined && { "data-aos-delay": String(delay) })}
    >
      {children}
    </p>
  );
}
