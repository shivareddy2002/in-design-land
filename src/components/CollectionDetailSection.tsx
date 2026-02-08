import { useRef, useEffect } from "react";
import { X } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import type { Collection } from "@/data/collectionsData";
import SpacesSection from "@/components/SpacesSection";

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
      const yOffset = -80;
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
            collectionId={collection.id}
            heading="Core Spaces"
            tagline="Essential spaces that form the foundation of everyday living."
            isVisible={isVisible}
          />
          <SpacesSection
            items={collection.enhancedSpaces}
            collectionId={collection.id}
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
