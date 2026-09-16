import ScrollAnimations from "@/components/ScrollAnimations";
import PageReadyLoader from "@/components/PageReadyLoader";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <PageReadyLoader />
      <ScrollAnimations />
    </>
  );
}
