import { BriefcaseViewer } from "@/components/scene/BriefcaseViewer";
import type { ExplorerState } from "@/App";

interface HeroSectionProps {
  explorer: ExplorerState;
}

export function HeroSection({ explorer }: HeroSectionProps) {
  return (
    <section className="relative h-screen w-full lg:pl-64">
      <div className="h-full w-full pt-12">
        <BriefcaseViewer explorer={explorer} />
      </div>
    </section>
  );
}
