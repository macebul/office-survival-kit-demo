import { SITE_COPY } from "@/data/content";
import type { ViewMode } from "@/App";
import { useMediaQuery } from "@/hooks/useMediaQuery";

import { useState } from "react";

function TrayImage({ src, label }: { src: string; label: string }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="w-full aspect-[3/2] rounded-lg border-2 border-dashed border-[#E87A2A]/40 bg-white/5 flex flex-col items-center justify-center gap-2">
        <span className="text-xs uppercase tracking-widest text-white/30">
          Photo coming soon
        </span>
        <span className="text-sm font-medium text-[#E87A2A]/60">{label}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={label}
      onError={() => setFailed(true)}
      className="w-full aspect-[3/2] rounded-lg object-cover"
    />
  );
}

interface InfoPanelProps {
  viewMode: ViewMode;
  selectedTray: string | null;
  onClose: () => void;
}

export function InfoPanel({
  viewMode,
  selectedTray,
  onClose,
}: InfoPanelProps) {
  const isVisible = viewMode === "interior" && selectedTray !== null;
  const tray = selectedTray ? SITE_COPY.trays[selectedTray] : null;
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  // Mobile/tablet: no panel — tray tabs are enough, 3D model stays fully visible
  if (!isDesktop) return null;

  // Desktop: full side panel
  return (
    <div
      className={`fixed top-0 right-0 h-full w-[400px] bg-background/95 backdrop-blur-md border-l border-border z-40 transform transition-all duration-300 ease-in-out ${
        isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      }`}
    >
      <div className="flex flex-col h-full pt-28 px-8 pb-8 overflow-y-auto">
        {tray && (
          <>
            <span className="text-xs uppercase tracking-widest text-[#E87A2A] mb-2">
              {tray.trayLabel}
            </span>
            <h2 className="text-2xl font-bold mb-1 text-white">{tray.name}</h2>
            <p className="text-white/50 italic mb-6">{tray.subheader}</p>

            <TrayImage src={tray.image} label={tray.shortLabel} />

            <div className="text-white/60 leading-relaxed mt-6 mb-8 space-y-1">
              {tray.body.split("\n").map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
            <div className="mt-auto">
              <button
                onClick={onClose}
                className="w-full px-6 py-3 rounded-full text-white font-semibold transition-colors"
                style={{ backgroundColor: "#E87A2A" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#d06a1f")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#E87A2A")
                }
              >
                Close
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
