import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import Image from "next/image";
import type * as React from "react";

function ArtCardRoot({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex h-89 w-[256px] flex-col overflow-clip rounded-xl bg-card text-card-foreground shadow-xs">
      {children}
    </div>
  );
}

function ArtCardImage({
  src,
  alt,
  priority = false,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 768px) 50vw, 256px"
      priority={priority}
      className="object-cover"
    />
  );
}

function ArtCardOverlay() {
  return (
    <div className="pointer-events-none absolute inset-0 bg-transparent bg-linear-to-b from-black/30 via-black/5 to-black/0" />
  );
}

function ArtCardHeader({
  title,
  artistName,
  artistAvatarUrl = "https://github.com/shadcn.png",
  artistAvatarFallback,
}: {
  title: string;
  artistName: string;
  artistAvatarUrl?: string;
  artistAvatarFallback: string;
}) {
  return (
    <div className="relative flex flex-col items-start p-3">
      <span className="text-lg leading-6 font-bold text-background">{title}</span>
      <div className="flex flex-row items-center gap-1">
        <Avatar className="size-3">
          <AvatarImage src={artistAvatarUrl} />
          <AvatarFallback>{artistAvatarFallback}</AvatarFallback>
        </Avatar>
        <span className="text-xs text-background">{artistName}</span>
      </div>
    </div>
  );
}

function ArtCardFooter({ price }: { price: string }) {
  return (
    <div className="relative mt-auto bg-card-foreground/40 px-3 py-4">
      <span className="text-base font-bold text-background">{price}</span>
    </div>
  );
}

function ArtCardDefault({
  imageUrl,
  title,
  artistName,
  artistAvatarUrl,
  artistAvatarFallback,
  price,
  priority = false,
  children,
}: {
  imageUrl: string;
  title: string;
  artistName: string;
  artistAvatarUrl?: string;
  artistAvatarFallback: string;
  price: string;
  priority?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <ArtCardRoot>
      <ArtCardImage src={imageUrl} alt={title} priority={priority} />
      {children}
      <ArtCardHeader
        title={title}
        artistName={artistName}
        artistAvatarUrl={artistAvatarUrl}
        artistAvatarFallback={artistAvatarFallback}
      />
      <ArtCardFooter price={price} />
    </ArtCardRoot>
  );
}

export const ArtCard = Object.assign(ArtCardDefault, {
  Root: ArtCardRoot,
  Image: ArtCardImage,
  Overlay: ArtCardOverlay,
  Header: ArtCardHeader,
  Footer: ArtCardFooter,
});
