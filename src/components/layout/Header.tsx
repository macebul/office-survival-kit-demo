import type { ActiveView } from "@/App";

const TABS: { id: ActiveView; label: string }[] = [
  { id: "kit", label: "The Kit" },
  { id: "items", label: "The Items" },
  { id: "explorer", label: "3D Explorer" },
];

interface HeaderProps {
  activeView: ActiveView;
  onViewChange: (view: ActiveView) => void;
}

export function Header({ activeView, onViewChange }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center px-3 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 bg-background/95 backdrop-blur-md border-b border-border/50">
      <nav className="flex gap-1 sm:gap-3 lg:gap-6">
        {TABS.map((tab) => {
          const isActive = activeView === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onViewChange(tab.id)}
              className={`px-3 sm:px-5 lg:px-8 py-2 sm:py-2.5 lg:py-3 rounded-full text-sm sm:text-base lg:text-lg font-medium transition-colors ${
                isActive
                  ? "text-white bg-[#E87A2A]"
                  : "text-white/60 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </nav>
    </header>
  );
}
