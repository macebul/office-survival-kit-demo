import { useState, useCallback, useEffect, useRef } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import {
  ChevronLeft,
  ChevronRight,
  X,
  ZoomIn,
  Columns2,
  FileText,
} from "lucide-react";

const TOTAL_PAGES = 30;

interface SpreadInfo {
  label: string;
  startPage: number;
}

const SPREAD_LABELS: SpreadInfo[] = [
  { label: "Cover", startPage: 1 },
  { label: "Pages 2\u20133: Day One", startPage: 2 },
  { label: "Pages 4\u20135: Your Cell", startPage: 4 },
  { label: "Pages 6\u20137: The Block", startPage: 6 },
  { label: "Pages 8\u20139: The Instincts", startPage: 8 },
  { label: "Pages 10\u201311: Conference Room B", startPage: 10 },
  { label: "Pages 12\u201313: The Cubicle Shank", startPage: 12 },
  { label: "Pages 14\u201315: The Morning Ritual", startPage: 14 },
  { label: "Pages 16\u201317: The Loadout", startPage: 16 },
  { label: "Pages 18\u201319: The Dress-Up", startPage: 18 },
  { label: "Pages 20\u201321: Brad\u2019s Self-Reveal", startPage: 20 },
  { label: "Pages 22\u201323: The Code (Part 1)", startPage: 22 },
  { label: "Pages 24\u201325: The Code (Part 2)", startPage: 24 },
  { label: "Pages 26\u201327: Phase 3 \u2014 Intervention", startPage: 26 },
  { label: "Pages 28\u201329: The Turn", startPage: 28 },
  { label: "Back Cover", startPage: 30 },
];

function pageSrc(pageNum: number): string {
  return `/images/booklet/page-${String(pageNum).padStart(2, "0")}.png`;
}

function getLabelForPage(page: number): string {
  for (let i = SPREAD_LABELS.length - 1; i >= 0; i--) {
    if (page >= SPREAD_LABELS[i].startPage) {
      return SPREAD_LABELS[i].label;
    }
  }
  return "";
}

function getLabelForSpread(spreadIndex: number): string {
  return SPREAD_LABELS[spreadIndex]?.label ?? "";
}

// Spread indices: 0=cover(1), 1=(2-3), 2=(4-5), ... 14=(28-29), 15=back(30)
function getSpreadPages(spreadIndex: number): number[] {
  if (spreadIndex === 0) return [1];
  if (spreadIndex === 15) return [30];
  const left = spreadIndex * 2;
  return [left, left + 1];
}

const TOTAL_SPREADS = 16;

// --- Zoom Modal ---

function ZoomModal({
  src,
  alt,
  onClose,
}: {
  src: string;
  alt: string;
  onClose: () => void;
}) {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const posStart = useRef({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  const handleWheel = useCallback((e: React.WheelEvent) => {
    e.preventDefault();
    setScale((prev) => {
      const next = prev - e.deltaY * 0.002;
      return Math.min(Math.max(next, 1), 5);
    });
  }, []);

  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      if (scale <= 1) return;
      e.preventDefault();
      setIsDragging(true);
      dragStart.current = { x: e.clientX, y: e.clientY };
      posStart.current = { ...position };
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
    },
    [scale, position],
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!isDragging) return;
      const dx = e.clientX - dragStart.current.x;
      const dy = e.clientY - dragStart.current.y;
      setPosition({
        x: posStart.current.x + dx,
        y: posStart.current.y + dy,
      });
    },
    [isDragging],
  );

  const handlePointerUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const toggleZoom = useCallback(() => {
    if (scale > 1) {
      setScale(1);
      setPosition({ x: 0, y: 0 });
    } else {
      setScale(2.5);
    }
  }, [scale]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-[101] p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
        aria-label="Close"
      >
        <X size={24} />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-[101] flex items-center gap-3">
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleZoom();
          }}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white text-sm"
        >
          <ZoomIn size={16} />
          {scale > 1 ? "Reset" : "Zoom In"}
        </button>
        {scale > 1 && (
          <span className="text-white/40 text-xs">Drag to pan</span>
        )}
      </div>

      <div
        ref={containerRef}
        className="w-full h-full flex items-center justify-center overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        onWheel={handleWheel}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onDoubleClick={(e) => {
          e.stopPropagation();
          toggleZoom();
        }}
        style={{ cursor: scale > 1 ? (isDragging ? "grabbing" : "grab") : "zoom-in", touchAction: "none" }}
      >
        <img
          src={src}
          alt={alt}
          className="max-h-[85vh] max-w-[90vw] object-contain select-none"
          style={{
            transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
            transition: isDragging ? "none" : "transform 0.3s ease-out",
          }}
          draggable={false}
        />
      </div>
    </div>
  );
}

// --- Main Component ---

export function BookletView() {
  const canShowSpreads = useMediaQuery("(min-width: 1024px)");
  const [currentPage, setCurrentPage] = useState(1);
  const [spreadMode, setSpreadMode] = useState(false);
  const [currentSpread, setCurrentSpread] = useState(0);
  const [zoomSrc, setZoomSrc] = useState<string | null>(null);
  const [zoomAlt, setZoomAlt] = useState("");
  const touchStart = useRef<number | null>(null);

  const showSpreads = spreadMode && canShowSpreads;

  // Navigation - single page mode
  const goToPage = useCallback(
    (page: number) => {
      if (page >= 1 && page <= TOTAL_PAGES) setCurrentPage(page);
    },
    [],
  );

  // Navigation - spread mode
  const goToSpread = useCallback(
    (spread: number) => {
      if (spread >= 0 && spread < TOTAL_SPREADS) setCurrentSpread(spread);
    },
    [],
  );

  const goNext = useCallback(() => {
    if (showSpreads) {
      goToSpread(currentSpread + 1);
    } else {
      goToPage(currentPage + 1);
    }
  }, [showSpreads, currentSpread, currentPage, goToSpread, goToPage]);

  const goPrev = useCallback(() => {
    if (showSpreads) {
      goToSpread(currentSpread - 1);
    } else {
      goToPage(currentPage - 1);
    }
  }, [showSpreads, currentSpread, currentPage, goToSpread, goToPage]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (zoomSrc) return;
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        goNext();
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        goPrev();
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [goNext, goPrev, zoomSrc]);

  // Touch/swipe navigation
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStart.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      if (touchStart.current === null) return;
      const diff = touchStart.current - e.changedTouches[0].clientX;
      const threshold = 50;
      if (diff > threshold) goNext();
      else if (diff < -threshold) goPrev();
      touchStart.current = null;
    },
    [goNext, goPrev],
  );

  // Sync spread/page when toggling modes
  useEffect(() => {
    if (showSpreads) {
      // Find which spread contains the current page
      for (let i = TOTAL_SPREADS - 1; i >= 0; i--) {
        const pages = getSpreadPages(i);
        if (currentPage >= pages[0]) {
          setCurrentSpread(i);
          break;
        }
      }
    } else {
      // Set current page to first page of current spread
      const pages = getSpreadPages(currentSpread);
      setCurrentPage(pages[0]);
    }
  }, [showSpreads]); // eslint-disable-line react-hooks/exhaustive-deps

  const openZoom = useCallback((src: string, alt: string) => {
    setZoomSrc(src);
    setZoomAlt(alt);
  }, []);

  const closeZoom = useCallback(() => {
    setZoomSrc(null);
  }, []);

  // Current display info
  const currentLabel = showSpreads
    ? getLabelForSpread(currentSpread)
    : getLabelForPage(currentPage);

  const canGoPrev = showSpreads ? currentSpread > 0 : currentPage > 1;
  const canGoNext = showSpreads
    ? currentSpread < TOTAL_SPREADS - 1
    : currentPage < TOTAL_PAGES;

  const pageIndicator = showSpreads
    ? `${currentSpread + 1} / ${TOTAL_SPREADS}`
    : `${currentPage} / ${TOTAL_PAGES}`;

  const spreadPages = showSpreads ? getSpreadPages(currentSpread) : null;
  const isSingleSpread = spreadPages?.length === 1;

  return (
    <div
      className="h-screen pt-16 sm:pt-20 flex flex-col"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Section label */}
      <div className="text-center py-2 sm:py-3 shrink-0">
        <p
          className="text-xs sm:text-sm uppercase tracking-[0.2em]"
          style={{
            color: "#D4A845",
            fontFamily: "Georgia, 'Times New Roman', serif",
          }}
        >
          {currentLabel}
        </p>
      </div>

      {/* Page display area */}
      <div className="flex-1 flex items-center justify-center min-h-0 px-4 sm:px-6">
        <div className="flex items-center gap-3 sm:gap-4 max-h-full">
          {/* Left arrow */}
          <button
            onClick={goPrev}
            disabled={!canGoPrev}
            className="shrink-0 p-2 sm:p-3 rounded-full bg-white/5 hover:bg-white/15 disabled:opacity-0 disabled:pointer-events-none transition-all text-white"
            aria-label="Previous page"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Page image(s) */}
          {showSpreads && spreadPages ? (
            <div className="flex items-center gap-1 max-h-full min-w-0">
              {spreadPages.map((pageNum) => (
                <button
                  key={pageNum}
                  onClick={() => openZoom(pageSrc(pageNum), `Page ${pageNum}`)}
                  className="cursor-zoom-in h-full flex items-center min-w-0"
                  style={{ maxHeight: "calc(100vh - 10rem)" }}
                >
                  <img
                    src={pageSrc(pageNum)}
                    alt={`Page ${pageNum}`}
                    className="max-h-full w-auto object-contain rounded shadow-xl shadow-black/50"
                    style={{ maxHeight: "calc(100vh - 10rem)", maxWidth: isSingleSpread ? "45vw" : "42vw" }}
                    loading="eager"
                  />
                </button>
              ))}
            </div>
          ) : (
            <button
              onClick={() =>
                openZoom(pageSrc(currentPage), `Page ${currentPage}`)
              }
              className="cursor-zoom-in flex items-center justify-center max-h-full min-w-0"
              style={{ maxHeight: "calc(100vh - 10rem)" }}
            >
              <img
                src={pageSrc(currentPage)}
                alt={`Page ${currentPage}`}
                className="max-h-full w-auto object-contain rounded shadow-xl shadow-black/50"
                style={{ maxHeight: "calc(100vh - 10rem)" }}
                loading="eager"
              />
            </button>
          )}

          {/* Right arrow */}
          <button
            onClick={goNext}
            disabled={!canGoNext}
            className="shrink-0 p-2 sm:p-3 rounded-full bg-white/5 hover:bg-white/15 disabled:opacity-0 disabled:pointer-events-none transition-all text-white"
            aria-label="Next page"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
      </div>

      {/* Bottom controls */}
      <div className="shrink-0 flex items-center justify-center gap-4 sm:gap-6 py-3 sm:py-4 px-4">
        {/* Page counter */}
        <span className="text-white/40 text-xs sm:text-sm font-mono tabular-nums">
          {pageIndicator}
        </span>

        {/* Spread toggle - desktop only */}
        {canShowSpreads && (
          <button
            onClick={() => setSpreadMode((prev) => !prev)}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs sm:text-sm transition-colors ${
              spreadMode
                ? "bg-[#D4A845]/20 text-[#D4A845]"
                : "bg-white/5 text-white/40 hover:text-white/60"
            }`}
            title={spreadMode ? "Switch to single page" : "Switch to spread view"}
          >
            {spreadMode ? (
              <>
                <FileText size={14} />
                View Single
              </>
            ) : (
              <>
                <Columns2 size={14} />
                View Spreads
              </>
            )}
          </button>
        )}

        {/* Zoom hint */}
        <span className="text-white/20 text-xs hidden sm:inline">
          Click page to zoom
        </span>
      </div>

      {/* Zoom modal */}
      {zoomSrc && (
        <ZoomModal src={zoomSrc} alt={zoomAlt} onClose={closeZoom} />
      )}
    </div>
  );
}
