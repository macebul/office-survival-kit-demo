import { BriefcaseViewer } from "@/components/scene/BriefcaseViewer";
import { SITE_COPY } from "@/data/content";
import type { ViewMode } from "@/App";

interface HeroSectionProps {
  viewMode: ViewMode;
  selectedTray: string | null;
}

export function HeroSection({ viewMode, selectedTray }: HeroSectionProps) {
  const showPanel = viewMode === "interior" && selectedTray !== null;

  return (
    <section
      className={`relative h-screen w-full transition-all duration-300 ease-in-out ${
        showPanel ? "pr-[400px]" : "pr-0"
      }`}
    >
      <div className="h-full w-full pt-24">
        <BriefcaseViewer viewMode={viewMode} selectedTray={selectedTray} />

        <div
          className="absolute bottom-24 left-8 max-w-md"
          style={{ textShadow: "0 2px 8px rgba(0,0,0,0.8)" }}
        >
          <h2 className="text-4xl font-bold mb-3 text-white">
            {SITE_COPY.hero.headline}
          </h2>
          <p className="text-white/70 text-lg">{SITE_COPY.hero.sub}</p>
        </div>
      </div>
    </section>
  );
}
