import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { KitView } from "@/components/landing/KitView";
import { ItemsView } from "@/components/landing/ItemsView";
import { HeroSection } from "@/components/landing/HeroSection";
import { FeatureNav } from "@/components/landing/FeatureNav";
import { InfoPanel } from "@/components/layout/InfoPanel";

export type ViewMode = "exterior" | "interior";
export type ActiveView = "kit" | "items" | "explorer";

function App() {
  const [viewMode, setViewMode] = useState<ViewMode>("exterior");
  const [selectedTray, setSelectedTray] = useState<string | null>(null);
  const [activeView, setActiveView] = useState<ActiveView>("kit");

  const handleOpenInterior = () => setViewMode("interior");

  const handleClose = () => {
    setViewMode("exterior");
    setSelectedTray(null);
  };

  const handleViewChange = (view: ActiveView) => {
    setActiveView(view);
    if (view !== "explorer") {
      setViewMode("exterior");
      setSelectedTray(null);
    }
  };

  return (
    <div className="relative h-screen overflow-hidden bg-background dark">
      <Header activeView={activeView} onViewChange={handleViewChange} />

      {activeView === "kit" && <KitView />}

      {activeView === "items" && <ItemsView />}

      {activeView === "explorer" && (
        <>
          <HeroSection viewMode={viewMode} selectedTray={selectedTray} />
          <FeatureNav
            viewMode={viewMode}
            selectedTray={selectedTray}
            onOpenInterior={handleOpenInterior}
            onSelectTray={setSelectedTray}
            onClose={handleClose}
          />
          <InfoPanel
            viewMode={viewMode}
            selectedTray={selectedTray}
            onClose={() => setSelectedTray(null)}
          />
        </>
      )}
    </div>
  );
}

export default App;
