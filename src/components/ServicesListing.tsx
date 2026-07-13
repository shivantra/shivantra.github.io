import React from "react";
import { CardTitle, Description } from "./Typography";

export function ServiceCard({
  icon,
  title,
  description,
  delay,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: string;
}) {
  return (
    <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay={delay}>
      <div className="service-card p-4 rounded-4 h-100 d-flex flex-column gap-5">
        <div>
          <span className="icon mb-4">{icon}</span>
          <CardTitle className="fs-5 mb-3">{title}</CardTitle>
          <Description>{description}</Description>
        </div>
      </div>
    </div>
  );
}
