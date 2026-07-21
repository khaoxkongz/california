"use client";

import { ArtCard } from "@/components/ArtCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { GlareHover } from "@/components/ui/glare-hover";
import { Skeleton } from "@/components/ui/skeleton";

export type Artwork = {
  imageUrl: string;
  title: string;
  artistName: string;
  artistAvatarFallback: string;
  price: string;
  artistAvatarUrl?: string;
  hasOverlay?: boolean;
};

export function ArtworkCarousel({
  artworks,
  priorityCount = 0,
}: {
  artworks: Artwork[];
  priorityCount?: number;
}) {
  return (
    <Carousel className="w-full max-w-6xl">
      <CarouselContent>
        {artworks.map((artwork, idx) => {
          const { hasOverlay, ...card } = artwork;

          return (
            <CarouselItem key={idx} className="basis-1/4">
              <GlareHover duration={1000} className="rounded-lg">
                <ArtCard {...card} priority={idx < priorityCount}>
                  {hasOverlay ? <ArtCard.Overlay /> : null}
                </ArtCard>
              </GlareHover>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export function ArtworkCarouselSkeleton() {
  return (
    <div className="flex w-full gap-4 overflow-hidden" aria-hidden>
      {Array.from({ length: 4 }).map((_, i) => (
        <Skeleton key={i} className="h-89 w-[256px] shrink-0 rounded-xl" />
      ))}
    </div>
  );
}
