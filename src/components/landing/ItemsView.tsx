import { useState, useEffect, useCallback } from "react";
import { SITE_COPY } from "@/data/content";

const TRAY_KEYS = Object.keys(SITE_COPY.trays);

export function ItemsView() {
  const [activeIndex, setActiveIndex] = useState(0);
  const tray = SITE_COPY.trays[TRAY_KEYS[activeIndex]];

  const navigate = useCallback((dir: -1 | 1) => {
    setActiveIndex((i) => {
      const next = i + dir;
      if (next < 0) return TRAY_KEYS.length - 1;
      if (next >= TRAY_KEYS.length) return 0;
      return next;
    });
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") navigate(-1);
      if (e.key === "ArrowRight") navigate(1);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [navigate]);

  return (
    <div className="h-screen pt-24 flex flex-col items-center justify-center">
      {/* Carousel */}
      <div className="flex items-center justify-center gap-4 w-full px-8 flex-shrink-0">
        <button
          onClick={() => navigate(-1)}
          className="text-white/40 hover:text-white text-4xl transition-colors flex-shrink-0 w-12 text-center"
        >
          &lsaquo;
        </button>

        <div className="flex items-center justify-center gap-3 overflow-hidden">
          {TRAY_KEYS.map((key, i) => {
            const item = SITE_COPY.trays[key];
            const isCenter = i === activeIndex;
            const distance = Math.abs(i - activeIndex);
            const wrapDist = Math.min(distance, TRAY_KEYS.length - distance);
            const isVisible = wrapDist <= 2;

            if (!isVisible) return null;

            return (
              <button
                key={key}
                onClick={() => setActiveIndex(i)}
                className="transition-all duration-300 ease-out rounded-lg overflow-hidden border-2 flex-shrink-0"
                style={{
                  width: isCenter ? 480 : wrapDist === 1 ? 320 : 200,
                  opacity: isCenter ? 1 : wrapDist === 1 ? 0.6 : 0.3,
                  borderColor: isCenter
                    ? "#E87A2A"
                    : "rgba(255,255,255,0.1)",
                  transform: `scale(${isCenter ? 1 : wrapDist === 1 ? 0.9 : 0.8})`,
                }}
              >
                <div
                  className="bg-white/5 flex items-center justify-center overflow-hidden"
                  style={{ aspectRatio: "3/2" }}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      e.currentTarget.nextElementSibling?.classList.remove("hidden");
                    }}
                  />
                  <span className="text-xs uppercase tracking-widest text-white/30 hidden">
                    {item.trayLabel}
                  </span>
                </div>
                {isCenter && (
                  <div className="p-3 text-left">
                    <p className="text-sm font-semibold text-white">
                      {item.name}
                    </p>
                    <p className="text-xs text-white/40">{item.realItem}</p>
                  </div>
                )}
              </button>
            );
          })}
        </div>

        <button
          onClick={() => navigate(1)}
          className="text-white/40 hover:text-white text-4xl transition-colors flex-shrink-0 w-12 text-center"
        >
          &rsaquo;
        </button>
      </div>

      {/* Dots */}
      <div className="flex gap-2 mt-4 flex-shrink-0">
        {TRAY_KEYS.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`w-2 h-2 rounded-full transition-colors ${
              i === activeIndex ? "bg-[#E87A2A]" : "bg-white/20"
            }`}
          />
        ))}
      </div>

      {/* Item details */}
      <div className="w-full max-w-2xl px-8 mt-8 text-center flex-shrink-0">
        <span className="text-xs uppercase tracking-widest text-[#E87A2A]">
          {tray.trayLabel} &mdash; {tray.realItem}
        </span>
        <h2 className="text-3xl font-bold text-white mt-2 mb-1">
          {tray.name}
        </h2>
        <p className="text-white/50 italic mb-4 text-lg">{tray.subheader}</p>
        <div className="text-white/60 leading-relaxed space-y-1">
          {tray.body.split("\n").map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
