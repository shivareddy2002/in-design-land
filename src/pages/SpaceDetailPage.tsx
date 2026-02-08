import { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { ArrowLeft, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { findSpaceBySlug } from "@/data/collectionsData";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

const SpaceDetailPage = () => {
  const { collectionId, spaceSlug } = useParams<{
    collectionId: string;
    spaceSlug: string;
  }>();
  const navigate = useNavigate();

  const result =
    collectionId && spaceSlug ? findSpaceBySlug(collectionId, spaceSlug) : null;

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [collectionId, spaceSlug]);

  if (!result) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="flex min-h-[60vh] flex-col items-center justify-center gap-6 pt-20">
          <h1 className="text-2xl font-bold text-foreground">Space Not Found</h1>
          <p className="text-muted-foreground">
            The space you're looking for doesn't exist.
          </p>
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </button>
        </main>
        <Footer />
      </div>
    );
  }

  const { collection, space } = result;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 py-6 lg:px-6">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/#home-space-collections">Collections</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/#home-space-collections">{collection.title}</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{space.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Page Header */}
        <div
          className="container mx-auto px-4 pb-8 lg:px-6 animate-fade-in-up"
        >
          <div className="mb-2 flex items-center gap-3">
            <button
              onClick={() => navigate(-1)}
              className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border bg-card shadow-sm transition-all duration-300 hover:bg-secondary hover:shadow-md"
              aria-label="Go back"
            >
              <ArrowLeft className="h-5 w-5 text-foreground" />
            </button>
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl lg:text-4xl">
                {space.title}
              </h1>
              <span
                className={`mt-1 inline-block rounded-full px-3 py-0.5 text-xs font-medium ${
                  space.type === "Core"
                    ? "bg-primary/10 text-primary"
                    : "bg-accent/10 text-accent"
                }`}
              >
                {space.type} Space
              </span>
            </div>
          </div>
          {space.phrase && (
            <p className="mt-3 max-w-2xl text-base italic text-muted-foreground md:text-lg lg:text-xl">
              "{space.phrase}"
            </p>
          )}
        </div>

        {/* Hero Image */}
        <div className="container mx-auto px-4 lg:px-6 animate-fade-in-up" style={{ animationDelay: "150ms" }}>
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <img
              src={space.image}
              alt={space.title}
              className="h-[40vh] w-full object-cover md:h-[50vh] lg:h-[60vh]"
            />
          </div>
        </div>

        {/* Description */}
        <div
          className="container mx-auto px-4 py-12 lg:px-6 animate-fade-in-up"
          style={{ animationDelay: "300ms" }}
        >
          <div className="mx-auto max-w-3xl">
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              {space.description}
            </p>
          </div>
        </div>

        {/* Supporting Gallery */}
        <div
          className="container mx-auto px-4 pb-12 lg:px-6 animate-fade-in-up"
          style={{ animationDelay: "450ms" }}
        >
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="overflow-hidden rounded-xl shadow-lg">
              <img
                src={space.image}
                alt={`${space.title} — Detail view 1`}
                className="h-64 w-full object-cover transition-transform duration-700 hover:scale-105 md:h-80"
                loading="lazy"
              />
            </div>
            <div className="overflow-hidden rounded-xl shadow-lg">
              <img
                src={space.image}
                alt={`${space.title} — Detail view 2`}
                className="h-64 w-full object-cover transition-transform duration-700 hover:scale-105 md:h-80"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Collection CTA */}
        <div
          className="container mx-auto px-4 pb-16 lg:px-6 animate-fade-in-up"
          style={{ animationDelay: "600ms" }}
        >
          <div className="mx-auto max-w-3xl rounded-2xl border bg-card p-8 text-center shadow-md md:p-12">
            <h3 className="text-xl font-bold text-foreground md:text-2xl">
              Explore the {collection.title}
            </h3>
            <p className="mt-2 text-sm italic text-muted-foreground md:text-base">
              "{collection.tagline}"
            </p>
            <Link
              to="/#home-space-collections"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90"
            >
              View All Collections
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default SpaceDetailPage;
