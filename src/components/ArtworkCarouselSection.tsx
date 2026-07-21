import {
  ArtworkCarousel,
  ArtworkCarouselSkeleton,
  type Artwork,
} from "@/components/ArtworkCarousel";
import { Skeleton } from "@/components/ui/skeleton";

export default function ArtworkCarouselSection({
  title,
  artworks,
  priorityCount = 0,
}: {
  title: string;
  artworks: Artwork[];
  priorityCount?: number;
}) {
  return (
    <div className="flex flex-col items-start gap-6">
      <span className="text-2xl font-bold">{title}</span>
      <ArtworkCarousel artworks={artworks} priorityCount={priorityCount} />
    </div>
  );
}

export function ArtworkCarouselSectionSkeleton({ title }: { title?: string }) {
  return (
    <div className="flex flex-col items-start gap-6">
      {title ? (
        <span className="text-2xl font-bold">{title}</span>
      ) : (
        <Skeleton className="h-8 w-48 rounded" />
      )}
      <ArtworkCarouselSkeleton />
    </div>
  );
}
