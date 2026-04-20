import { CardTitle, Description } from "./Typography";

export function FeatureCard({
  icon,
  title,
  description,
  delay,
}: {
  icon: string;
  title: string;
  description: string;
  delay: string;
}) {
  return (
    <div className="col-sm-6" data-aos="fade-up" data-aos-delay={delay}>
      <div className="icon text-center mb-4">
        <i className={`bi ${icon} fs-4`}></i>
      </div>
      <CardTitle className="fs-6 fw-bold mb-3">{title}</CardTitle>
      <Description>{description}</Description>
    </div>
  );
}
