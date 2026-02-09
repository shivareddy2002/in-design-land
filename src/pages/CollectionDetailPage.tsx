import { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import SpacesSection from "@/components/SpacesSection";
import { collections } from "@/data/collectionsData";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

const CollectionDetailPage = () => {
  const { collectionId } = useParams<{ collectionId: string }>();
  const navigate = useNavigate();

  const collection = collections.find((c) => c.id === collectionId) ?? null;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [collectionId]);

  if (!collection) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="flex min-h-[60vh] flex-col items-center justify-center gap-6 pt-20">
          <h1 className="text-2xl font-bold text-foreground">Collection Not Found</h1>
          <p className="text-muted-foreground">
            The collection you're looking for doesn't exist.
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
                  <Link to="/#home-space-collections">Home Space Collections</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{collection.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Page Header */}
        <div className="container mx-auto px-4 pb-10 lg:px-6 animate-fade-in-up">
          <div className="mb-2 flex items-center gap-3">
            <button
              onClick={() => navigate("/#home-space-collections")}
              className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border bg-card shadow-sm transition-all duration-300 hover:bg-secondary hover:shadow-md"
              aria-label="Go back"
            >
              <ArrowLeft className="h-5 w-5 text-foreground" />
            </button>
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl lg:text-4xl">
                {collection.title}
              </h1>
            </div>
          </div>
          <p className="mt-3 max-w-2xl text-base italic text-muted-foreground md:text-lg lg:text-xl">
            "{collection.tagline}"
          </p>
        </div>

        {/* Hero Image */}
        <div
          className="container mx-auto px-4 lg:px-6 animate-fade-in-up"
          style={{ animationDelay: "150ms" }}
        >
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <img
              src={collection.image}
              alt={collection.title}
              className="h-[30vh] w-full object-cover md:h-[40vh] lg:h-[50vh]"
            />
          </div>
        </div>

        {/* Core & Enhanced Spaces */}
        <div
          className="container mx-auto px-4 py-12 lg:px-6 animate-fade-in-up"
          style={{ animationDelay: "300ms" }}
        >
          <SpacesSection
            items={collection.coreSpaces}
            collectionId={collection.id}
            heading="Core Spaces"
            tagline="Essential spaces that form the foundation of everyday living."
            isVisible={true}
          />
          <SpacesSection
            items={collection.enhancedSpaces}
            collectionId={collection.id}
            heading="Enhanced Spaces"
            tagline="Elevated spaces that enhance comfort, luxury, and lifestyle."
            isVisible={true}
          />
        </div>
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default CollectionDetailPage;
