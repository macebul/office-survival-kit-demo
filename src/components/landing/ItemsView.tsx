import { useState, useEffect, useCallback, useRef } from "react";
import { SITE_COPY } from "@/data/content";

const TRAY_KEYS = Object.keys(SITE_COPY.trays);
const ITEM_COUNT = TRAY_KEYS.length;

export function ItemsView() {
  const [activeIndex, setActiveIndex] = useState(0);
  const tray = SITE_COPY.trays[TRAY_KEYS[activeIndex]];
  const touchStartX = useRef(0);

  const navigate = useCallback((dir: -1 | 1) => {
    setActiveIndex((i) => {
      const next = i + dir;
      if (next < 0) return ITEM_COUNT - 1;
      if (next >= ITEM_COUNT) return 0;
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

  // Calculate circular position for each item
  const getItemStyle = (index: number) => {
    // Signed distance around the ring (-2, -1, 0, 1, 2 for 5 items)
    let offset = index - activeIndex;
    // Wrap around the shortest path
    if (offset > ITEM_COUNT / 2) offset -= ITEM_COUNT;
    if (offset < -ITEM_COUNT / 2) offset += ITEM_COUNT;

    const isActive = offset === 0;
    const absOffset = Math.abs(offset);

    // Horizontal spread: each step moves further out
    const xSpread = 52; // percent of container width per step
    const translateX = offset * xSpread;

    // Depth: items recede as they move from center
    const translateZ = -absOffset * 200;

    // Scale: front is full size, others shrink
    const scale = isActive ? 1 : Math.max(0.45, 1 - absOffset * 0.25);

    // Opacity: fade as they recede
    const opacity = isActive ? 1 : Math.max(0.25, 1 - absOffset * 0.3);

    // Z-index: front item on top
    const zIndex = ITEM_COUNT - absOffset;

    return {
      transform: `translateX(${translateX}%) translateZ(${translateZ}px) scale(${scale})`,
      opacity,
      zIndex,
      isActive,
      absOffset,
    };
  };

  return (
    <div
      className="h-screen pt-24 flex flex-col items-center justify-center"
      onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX; }}
      onTouchEnd={(e) => {
        const delta = e.changedTouches[0].clientX - touchStartX.current;
        if (Math.abs(delta) > 50) navigate(delta > 0 ? -1 : 1);
      }}
    >
      {/* 3D Orbital Carousel */}
      <div
        className="relative w-full flex-shrink-0 flex items-center justify-center"
        style={{ perspective: "1000px", height: "clamp(200px, 35vh, 400px)" }}
      >
        {/* Left / Right nav arrows */}
        <button
          onClick={() => navigate(-1)}
          className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-20 text-white/40 hover:text-white text-4xl transition-colors"
        >
          &lsaquo;
        </button>
        <button
          onClick={() => navigate(1)}
          className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-20 text-white/40 hover:text-white text-4xl transition-colors"
        >
          &rsaquo;
        </button>

        {/* Carousel ring */}
        <div
          className="relative w-full h-full"
          style={{ transformStyle: "preserve-3d" }}
        >
          {TRAY_KEYS.map((key, i) => {
            const item = SITE_COPY.trays[key];
            const { transform, opacity, zIndex, isActive, absOffset } = getItemStyle(i);

            return (
              <button
                key={key}
                onClick={() => setActiveIndex(i)}
                className={`absolute left-1/2 top-1/2 transition-all duration-500 ease-out rounded-lg overflow-hidden border-2 ${
                  isActive ? "border-[#E87A2A]" : "border-white/10"
                }`}
                style={{
                  width: "clamp(200px, 40vw, 380px)",
                  aspectRatio: "3/2",
                  transform: `translate(-50%, -50%) ${transform}`,
                  opacity,
                  zIndex,
                  // Hide items that are "behind" the visible arc
                  visibility: absOffset > 2 ? "hidden" : "visible",
                }}
              >
                <div className="w-full h-full bg-white/5 flex items-center justify-center overflow-hidden">
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
              </button>
            );
          })}
        </div>
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
      <div className="w-full max-w-lg sm:max-w-2xl px-4 sm:px-8 mt-6 text-center flex-shrink-0">
        <span className="text-xs uppercase tracking-widest text-[#E87A2A]">
          {tray.trayLabel} &mdash; {tray.realItem}
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2 mb-1">
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
