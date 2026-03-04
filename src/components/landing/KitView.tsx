import { useState } from "react";
import { Button } from "@/components/ui/button";
import { SITE_COPY } from "@/data/content";

function GalleryImage({
  src,
  alt,
  index,
  className = "",
}: {
  src: string;
  alt: string;
  index: number;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className={className}>
        <div className="w-full h-full rounded-lg border-2 border-dashed border-[#E87A2A]/30 bg-white/5 flex flex-col items-center justify-center gap-1">
          <span className="text-[10px] uppercase tracking-widest text-white/30">
            Photo {index + 1}
          </span>
          <span className="text-xs text-white/40 text-center px-2">{alt}</span>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setFailed(true)}
      className={`object-cover ${className}`}
    />
  );
}

export function KitView() {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = SITE_COPY.gallery.images;
  const active = images[activeIndex];
  const specs = SITE_COPY.specs;

  return (
    <div className="h-screen pt-24 overflow-y-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero: Gallery + Pitch side by side */}
        <div className="flex flex-col lg:flex-row gap-12 mb-8">
          {/* Gallery */}
          <div className="lg:w-3/5">
            <div className="aspect-[4/3] w-full rounded-lg overflow-hidden bg-white/5 mb-4">
              <GalleryImage
                key={activeIndex}
                src={active.src}
                alt={active.alt}
                index={activeIndex}
                className="w-full h-full"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`w-16 h-16 sm:w-20 sm:h-20 rounded-md overflow-hidden border-2 transition-colors ${
                    i === activeIndex
                      ? "border-[#E87A2A]"
                      : "border-white/10 hover:border-white/30"
                  }`}
                >
                  <GalleryImage
                    src={img.src}
                    alt={img.alt}
                    index={i}
                    className="w-full h-full"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="lg:w-2/5">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">
              Office Survival Kit
            </h1>
            <p className="text-[#E87A2A] text-lg mb-6">
              {SITE_COPY.tagline}
            </p>
            <p className="text-white/60 leading-relaxed mb-6">
              {SITE_COPY.vision}
            </p>
            <p className="text-white/50 leading-relaxed mb-8">
              {SITE_COPY.pitch.long}
            </p>

            <Button
              className="px-8 py-5 text-base font-semibold rounded-full text-white"
              style={{ backgroundColor: "#E87A2A" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#d06a1f")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#E87A2A")
              }
            >
              {SITE_COPY.cta.button}
            </Button>
          </div>
        </div>

        {/* Inside Lid + Specs side by side */}
        <div className="flex flex-col lg:flex-row gap-6 mb-8">
          {/* Inside Lid Copy */}
          <div className="border border-white/10 rounded-lg p-4 sm:p-6 lg:p-8 bg-white/[0.02] lg:w-3/5 shrink-0">
            <h3 className="text-lg font-bold text-[#E87A2A] tracking-widest uppercase mb-4">
              {SITE_COPY.insideLid.header}
            </h3>
            <ul className="space-y-2 mb-4">
              {SITE_COPY.insideLid.items.map((item, i) => (
                <li key={i} className="text-white/60 flex gap-2">
                  <span className="text-[#E87A2A]">&bull;</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-white/40 italic">
              {SITE_COPY.insideLid.footer}
            </p>
          </div>

          {/* Product Specs */}
          <div className="border border-white/10 rounded-lg p-4 sm:p-6 bg-white/[0.02] lg:flex-1">
            <h3 className="text-sm font-bold text-[#E87A2A] uppercase tracking-widest mb-4">
              Product Specifications
            </h3>
            <dl className="space-y-3">
              {Object.entries(specs).map(([key, value]) => (
                <div key={key} className="flex justify-between gap-4">
                  <dt className="text-white/40 capitalize text-sm">
                    {key.replace(/([A-Z])/g, " $1").trim()}
                  </dt>
                  <dd className="text-white/70 text-sm text-right">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Notice */}
        <div className="text-center pb-8">
          <p className="text-xs text-white/20 max-w-lg mx-auto leading-relaxed">
            {SITE_COPY.notice}
          </p>
        </div>
      </div>
    </div>
  );
}
