import { useState, useCallback } from "react";
import { Header } from "@/components/layout/Header";
import { KitView } from "@/components/landing/KitView";
import { ItemsView } from "@/components/landing/ItemsView";
import { HeroSection } from "@/components/landing/HeroSection";
import { ViewerControls } from "@/components/scene/ViewerControls";
import { BookletView } from "@/components/landing/BookletView";
import { CoffeePouchView } from "@/components/landing/CoffeePouchView";

export type ActiveView = "kit" | "items" | "explorer" | "booklet" | "coffee";

export interface ExplorerState {
  activeCamera: string | null;
  briefcaseLidOpen: boolean;
  amazonLidOpen: boolean;
  amazonVisible: boolean;
  tray1Filled: boolean;
  tray2Filled: boolean;
  activeItemViewer: string | null;
  itemCamera: string | null;
  sleeveOpen: boolean;
}

const DEFAULT_EXPLORER_STATE: ExplorerState = {
  activeCamera: "Camera_Main",
  briefcaseLidOpen: false,
  amazonLidOpen: false,
  amazonVisible: false,
  tray1Filled: true,
  tray2Filled: true,
  activeItemViewer: null,
  itemCamera: null,
  sleeveOpen: false,
};

function App() {
  const [activeView, setActiveView] = useState<ActiveView>("explorer");
  const [explorer, setExplorer] = useState<ExplorerState>(DEFAULT_EXPLORER_STATE);

  const handleViewChange = (view: ActiveView) => {
    setActiveView(view);
  };

  const updateExplorer = useCallback(
    (partial: Partial<ExplorerState>) => {
      setExplorer((prev) => ({ ...prev, ...partial }));
    },
    [],
  );

  return (
    <div className="relative h-screen overflow-hidden bg-background dark">
      <Header activeView={activeView} onViewChange={handleViewChange} />

      {activeView === "kit" && <KitView />}

      {activeView === "items" && <ItemsView />}

      {activeView === "booklet" && <BookletView />}

      {activeView === "explorer" && (
        <>
          <HeroSection explorer={explorer} />
          <ViewerControls explorer={explorer} onUpdate={updateExplorer} />
        </>
      )}

      {activeView === "coffee" && <CoffeePouchView />}
    </div>
  );
}

export default App;
