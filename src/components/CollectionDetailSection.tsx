import { useRef, useCallback, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useIsMobile } from "@/hooks/use-mobile";
import type { Collection, SpaceItem } from "@/data/collectionsData";

/* ─── Space Item Card ─── */
interface SpaceCardProps {
  item: SpaceItem;
  index: number;
  isVisible: boolean;
}

const SpaceCard = ({ item, index, isVisible }: SpaceCardProps) => (
  <div
    className="group relative overflow-hidden rounded-xl bg-card shadow-md transition-all duration-500 ease-out"
    style={{
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? "scale(1) translateY(0)" : "scale(0.95) translateY(12px)",
      transitionDelay: `${index * 120}ms`,
    }}
  >
    <div className="aspect-square overflow-hidden">
      <img
        src={item.image}
        alt={item.title}
        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        loading="lazy"
      />
    </div>
    <div className="p-4 md:p-5">
      <h4 className="text-sm font-semibold text-foreground md:text-base">{item.title}</h4>
      {item.phrase && (
        <p className="mt-1 text-xs text-muted-foreground md:text-sm">{item.phrase}</p>
      )}
      <span
        className={`mt-2 inline-block rounded-full px-3 py-0.5 text-xs font-medium ${
          item.type === "Core"
            ? "bg-primary/10 text-primary"
            : "bg-accent/10 text-accent"
        }`}
      >
        {item.type}
      </span>
    </div>
    {/* Hover shadow */}
    <div className="pointer-events-none absolute inset-0 rounded-xl transition-shadow duration-500 group-hover:shadow-[0_12px_40px_-10px_hsl(25_45%_25%/0.2)]" />
  </div>
);

/* ─── Mobile Carousel for space items ─── */
interface MobileCarouselProps {
  items: SpaceItem[];
  isVisible: boolean;
}

const MobileCarousel = ({ items, isVisible }: MobileCarouselProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = useCallback((direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.firstElementChild?.getBoundingClientRect().width || 300;
    const gap = 16;
    const amount = direction === "left" ? -(cardWidth + gap) : cardWidth + gap;
    scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
  }, []);

  return (
    <div className="relative">
      <button
        onClick={() => scroll("left")}
        className="absolute -left-2 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border bg-card shadow-md transition-all hover:bg-secondary hover:shadow-lg"
        aria-label="Previous"
      >
        <ChevronLeft className="h-4 w-4 text-foreground" />
      </button>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scroll-smooth px-6 pb-2 scrollbar-hide"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {items.map((item, idx) => (
          <div
            key={item.title}
            className="w-[calc(100%-3rem)] flex-shrink-0"
            style={{ scrollSnapAlign: "start" }}
          >
            <SpaceCard item={item} index={idx} isVisible={isVisible} />
          </div>
        ))}
      </div>

      <button
        onClick={() => scroll("right")}
        className="absolute -right-2 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border bg-card shadow-md transition-all hover:bg-secondary hover:shadow-lg"
        aria-label="Next"
      >
        <ChevronRight className="h-4 w-4 text-foreground" />
      </button>
    </div>
  );
};

/* ─── Spaces Sub-Section (Core / Enhanced) ─── */
interface SpacesSectionProps {
  items: SpaceItem[];
  heading: string;
  tagline: string;
  isVisible: boolean;
}

const SpacesSection = ({ items, heading, tagline, isVisible }: SpacesSectionProps) => {
  const isMobile = useIsMobile();

  return (
    <div className="mb-12 md:mb-16">
      {/* Sub-section header */}
      <div
        className="mb-6 transition-all duration-700 ease-out md:mb-8"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(16px)",
        }}
      >
        <h3 className="text-xl font-bold text-foreground md:text-2xl">{heading}</h3>
        <p className="mt-1 text-sm italic text-muted-foreground md:text-base">
          "{tagline}"
        </p>
      </div>

      {/* Items grid or carousel */}
      {isMobile ? (
        <MobileCarousel items={items} isVisible={isVisible} />
      ) : (
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-3">
          {items.map((item, idx) => (
            <SpaceCard key={item.title} item={item} index={idx} isVisible={isVisible} />
          ))}
        </div>
      )}
    </div>
  );
};

/* ─── Full-Page Collection Detail ─── */
interface CollectionDetailSectionProps {
  collection: Collection;
  onClose: () => void;
}

const CollectionDetailSection = ({ collection, onClose }: CollectionDetailSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { ref: contentRef, isVisible } = useScrollAnimation({ rootMargin: "0px 0px -20px 0px" });

  // Scroll into view when opened
  useEffect(() => {
    if (sectionRef.current) {
      const yOffset = -80; // account for header
      const y = sectionRef.current.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }, []);

  return (
    <div
      ref={sectionRef}
      className="w-full border-t border-border/40 bg-background py-12 md:py-20"
    >
      <div className="container mx-auto container-spacing">
        {/* Collection Header */}
        <div className="mb-10 flex items-start justify-between md:mb-14">
          <div
            className="transition-all duration-700 ease-out"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
            }}
          >
            <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl lg:text-4xl">
              {collection.title}
            </h2>
            <p className="mt-2 text-sm italic text-muted-foreground md:text-base lg:text-lg">
              "{collection.tagline}"
            </p>
          </div>
          <button
            onClick={onClose}
            className="ml-4 mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border bg-card shadow-sm transition-all duration-300 hover:bg-secondary hover:shadow-md"
            aria-label="Close collection"
          >
            <X className="h-5 w-5 text-foreground" />
          </button>
        </div>

        {/* Core & Enhanced content */}
        <div ref={contentRef as React.RefObject<HTMLDivElement>}>
          <SpacesSection
            items={collection.coreSpaces}
            heading="Core Spaces"
            tagline="Essential spaces that form the foundation of everyday living."
            isVisible={isVisible}
          />
          <SpacesSection
            items={collection.enhancedSpaces}
            heading="Enhanced Spaces"
            tagline="Elevated spaces that enhance comfort, luxury, and lifestyle."
            isVisible={isVisible}
          />
        </div>
      </div>
    </div>
  );
};

export default CollectionDetailSection;
