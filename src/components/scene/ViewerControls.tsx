import { useState } from "react";
import type { ExplorerState } from "@/App";
import { CAMERA_GROUPS } from "@/data/cameraPresets";
import { useMediaQuery } from "@/hooks/useMediaQuery";

interface ViewerControlsProps {
  explorer: ExplorerState;
  onUpdate: (partial: Partial<ExplorerState>) => void;
}

function ToggleButton({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left px-3 py-1.5 rounded text-sm transition-colors ${
        active
          ? "bg-[#E87A2A]/20 text-[#E87A2A]"
          : "text-white/60 hover:text-white hover:bg-white/5"
      }`}
    >
      {label}
    </button>
  );
}

function CollapsibleSection({
  label,
  defaultOpen = false,
  children,
}: {
  label: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-white/10">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors"
      >
        <span>{label}</span>
        <span className="text-white/40">{open ? "\u25BE" : "\u25B8"}</span>
      </button>
      {open && <div className="pb-2 px-1">{children}</div>}
    </div>
  );
}

export function ViewerControls({ explorer, onUpdate }: ViewerControlsProps) {
  const [panelOpen, setPanelOpen] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  // Determine which camera is active for highlighting
  const activeCamera = explorer.activeCamera;

  const handleCameraSelect = (cameraId: string) => {
    // Determine lid states based on camera type
    const isInterior = cameraId.startsWith("CAM_Int_");
    const isAmazon = cameraId.startsWith("CAM_Amz_");
    const isDetail = cameraId.startsWith("CAM_Detail_");

    const updates: Partial<ExplorerState> = { activeCamera: cameraId };

    // Auto-open lids for interior views
    if (isInterior) {
      updates.briefcaseLidOpen = true;
      updates.amazonVisible = false;
    } else if (isAmazon) {
      updates.amazonVisible = true;
      updates.briefcaseLidOpen = false;
    } else if (isDetail) {
      updates.briefcaseLidOpen = false;
      updates.amazonVisible = false;
    } else {
      // Exterior
      updates.briefcaseLidOpen = false;
    }

    onUpdate(updates);
  };

  const handleFreeOrbit = () => {
    onUpdate({ activeCamera: null });
  };

  if (!panelOpen) {
    return (
      <button
        onClick={() => setPanelOpen(true)}
        className="fixed top-16 left-2 z-50 px-3 py-2 bg-black/80 backdrop-blur-md rounded-lg border border-white/10 text-white/70 hover:text-white text-sm transition-colors"
      >
        Kit Views
      </button>
    );
  }

  // Mobile: bottom sheet; Desktop: left side panel
  const panelClasses = isDesktop
    ? "fixed top-12 left-0 z-40 h-[calc(100vh-3rem)] w-64 bg-black/90 backdrop-blur-md border-r border-white/10 overflow-y-auto"
    : "fixed bottom-0 left-0 right-0 z-40 max-h-[50vh] bg-black/95 backdrop-blur-md border-t border-white/10 overflow-y-auto rounded-t-xl";

  return (
    <div className={panelClasses}>
      {/* Panel header */}
      <div className="flex items-center justify-between px-3 py-2 border-b border-white/10">
        <span className="text-sm font-semibold text-white/90">Kit Views</span>
        <button
          onClick={() => setPanelOpen(false)}
          className="text-white/40 hover:text-white text-lg leading-none"
        >
          &times;
        </button>
      </div>

      {/* Free orbit */}
      <div className="px-1 py-1 border-b border-white/10">
        <button
          onClick={handleFreeOrbit}
          className={`w-full text-left px-3 py-2 rounded text-sm font-medium transition-colors ${
            activeCamera === null
              ? "bg-[#E87A2A]/20 text-[#E87A2A]"
              : "text-white/70 hover:text-white hover:bg-white/5"
          }`}
        >
          Free Orbit
        </button>
      </div>

      {/* Lids */}
      <CollapsibleSection label="Lids" defaultOpen>
        <ToggleButton
          label={
            explorer.amazonLidOpen ? "Close Amazon Box" : "Open Amazon Box"
          }
          active={explorer.amazonLidOpen}
          onClick={() =>
            onUpdate({ amazonLidOpen: !explorer.amazonLidOpen })
          }
        />
        <ToggleButton
          label={
            explorer.briefcaseLidOpen ? "Close Briefcase" : "Open Briefcase"
          }
          active={explorer.briefcaseLidOpen}
          onClick={() =>
            onUpdate({ briefcaseLidOpen: !explorer.briefcaseLidOpen })
          }
        />
      </CollapsibleSection>

      {/* Visibility */}
      <CollapsibleSection label="Visibility" defaultOpen>
        <ToggleButton
          label={explorer.amazonVisible ? "Hide Amazon Box" : "Show Amazon Box"}
          active={explorer.amazonVisible}
          onClick={() =>
            onUpdate({ amazonVisible: !explorer.amazonVisible })
          }
        />
        <ToggleButton
          label={`Tray 1: ${explorer.tray1Filled ? "Filled" : "Empty"}`}
          active={!explorer.tray1Filled}
          onClick={() =>
            onUpdate({ tray1Filled: !explorer.tray1Filled })
          }
        />
        <ToggleButton
          label={`Tray 2: ${explorer.tray2Filled ? "Filled" : "Empty"}`}
          active={!explorer.tray2Filled}
          onClick={() =>
            onUpdate({ tray2Filled: !explorer.tray2Filled })
          }
        />
      </CollapsibleSection>

      {/* Camera groups */}
      {CAMERA_GROUPS.map((group) => (
        <CollapsibleSection key={group.label} label={group.label}>
          {group.cameras.map((cam) => (
            <button
              key={cam.id}
              onClick={() => handleCameraSelect(cam.id)}
              className={`w-full text-left px-3 py-1.5 rounded text-sm transition-colors ${
                activeCamera === cam.id
                  ? "bg-[#E87A2A] text-white font-medium"
                  : "text-white/60 hover:text-white hover:bg-white/5"
              }`}
            >
              {cam.label}
            </button>
          ))}
        </CollapsibleSection>
      ))}
    </div>
  );
}
