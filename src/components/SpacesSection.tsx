import { useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useIsMobile } from "@/hooks/use-mobile";
import type { Collection, SpaceItem } from "@/data/collectionsData";

/* ─── Space Item Card ─── */
interface SpaceCardProps {
  item: SpaceItem;
  collectionId: string;
  index: number;
  isVisible: boolean;
}

const SpaceCard = ({ item, collectionId, index, isVisible }: SpaceCardProps) => {
  const navigate = useNavigate();

  return (
    <div
      className="group relative cursor-pointer overflow-hidden rounded-xl bg-card shadow-md transition-all duration-500 ease-out hover:shadow-[0_12px_40px_-10px_hsl(25_45%_25%/0.2)]"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "scale(1) translateY(0)" : "scale(0.95) translateY(12px)",
        transitionDelay: `${index * 120}ms`,
      }}
      onClick={() => navigate(`/collections/${collectionId}/${item.slug}`)}
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
    </div>
  );
};

/* ─── Mobile Carousel for space items ─── */
interface MobileCarouselProps {
  items: SpaceItem[];
  collectionId: string;
  isVisible: boolean;
}

const MobileCarousel = ({ items, collectionId, isVisible }: MobileCarouselProps) => {
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
            key={item.slug}
            className="w-[calc(100%-3rem)] flex-shrink-0"
            style={{ scrollSnapAlign: "start" }}
          >
            <SpaceCard item={item} collectionId={collectionId} index={idx} isVisible={isVisible} />
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
  collectionId: string;
  heading: string;
  tagline: string;
  isVisible: boolean;
}

const SpacesSection = ({ items, collectionId, heading, tagline, isVisible }: SpacesSectionProps) => {
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
        <MobileCarousel items={items} collectionId={collectionId} isVisible={isVisible} />
      ) : (
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-3">
          {items.map((item, idx) => (
            <SpaceCard key={item.slug} item={item} collectionId={collectionId} index={idx} isVisible={isVisible} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SpacesSection;
export { SpaceCard, MobileCarousel };
