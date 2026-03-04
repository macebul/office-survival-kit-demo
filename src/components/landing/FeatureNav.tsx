import type { ViewMode } from "@/App";

const TRAYS = [
  { id: "shank", label: "Shank" },
  { id: "switch", label: "Switch" },
  { id: "ink", label: "Ink" },
  { id: "tags", label: "Tags" },
  { id: "rags", label: "Rags" },
];

interface FeatureNavProps {
  viewMode: ViewMode;
  selectedTray: string | null;
  onOpenInterior: () => void;
  onSelectTray: (id: string | null) => void;
  onClose: () => void;
}

export function FeatureNav({
  viewMode,
  selectedTray,
  onOpenInterior,
  onSelectTray,
  onClose,
}: FeatureNavProps) {
  if (viewMode === "exterior") {
    return (
      <div className="fixed bottom-8 sm:bottom-16 lg:bottom-20 left-1/2 -translate-x-1/2 z-50">
        <button
          onClick={onOpenInterior}
          className="px-8 sm:px-14 lg:px-20 py-4 sm:py-6 lg:py-8 rounded-full text-white font-semibold text-base sm:text-xl lg:text-2xl tracking-wide transition-colors"
          style={{ backgroundColor: "#E87A2A" }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#d06a1f")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "#E87A2A")
          }
        >
          Open Case
        </button>
      </div>
    );
  }

  return (
    <div
      className="fixed bottom-12 sm:bottom-16 lg:bottom-24 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 bg-black/80 backdrop-blur-md rounded-full px-2 py-1.5 border border-[#E87A2A]/30 max-w-[calc(100vw-2rem)] overflow-x-auto"
    >
      <button
        onClick={onClose}
        className="px-3 py-2 sm:py-1.5 rounded-full text-[#E87A2A] hover:text-white text-sm font-medium transition-colors whitespace-nowrap"
      >
        &larr; Close
      </button>
      <div className="w-px h-5 bg-[#E87A2A]/30 mx-1" />
      {TRAYS.map((tray) => {
        const isActive = selectedTray === tray.id;
        return (
          <button
            key={tray.id}
            onClick={() => onSelectTray(isActive ? null : tray.id)}
            className={`px-3 sm:px-4 py-2 sm:py-1.5 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
              isActive ? "text-white" : "text-white/70 hover:text-[#E87A2A]"
            }`}
            style={isActive ? { backgroundColor: "#E87A2A" } : undefined}
          >
            {tray.label}
          </button>
        );
      })}
    </div>
  );
}
