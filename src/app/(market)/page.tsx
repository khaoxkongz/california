import type { Artwork } from "@/components/ArtworkCarousel";
import { ArtworkCarouselSectionSkeleton } from "@/components/ArtworkCarouselSection";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";

import dynamic from "next/dynamic";
import Image from "next/image";
import { Suspense } from "react";

const ArtworkCarouselSection = dynamic(() => import("@/components/ArtworkCarouselSection"), {
  loading: () => <ArtworkCarouselSectionSkeleton />,
});

const NEW_IN_ARTWORKS: Artwork[] = [
  {
    imageUrl: "/966ac09ec7f0ce225ec4bb67e9a39be74214d47f.png",
    title: "Batman new 52",
    artistName: "Johny Ong",
    artistAvatarFallback: "JO",
    price: "฿ 199,000,000",
    hasOverlay: true,
  },
  {
    imageUrl: "/03b295498a84a6c4e2dc6506c92381b1daba6781.png",
    title: "Superman",
    artistName: "Johny Ong",
    artistAvatarFallback: "JO",
    price: "฿ 199,000,000",
    hasOverlay: true,
  },
  {
    imageUrl: "/2090f7ebda27545da96cc2b17c17f3a9d17b99db.png",
    title: "Jeffrey Dahmer",
    artistName: "Johny Ong",
    artistAvatarFallback: "JO",
    price: "฿ 199,000,000",
    hasOverlay: true,
  },
  {
    imageUrl: "/8308c81ba60509b916d96a15f45e750cd19589e0.png",
    title: "Monster Hipster Doll",
    artistName: "Johny Ong",
    artistAvatarFallback: "JO",
    price: "฿ 199,000,000",
    hasOverlay: true,
  },
  {
    imageUrl: "/a273a18918db8fdcdd3a318c52eca94bf62ec45a.png",
    title: "Batman new 52",
    artistName: "Johny Ong",
    artistAvatarFallback: "JO",
    price: "฿ 199,000,000",
    hasOverlay: true,
  },
];

const PAINTING_ARTWORKS: Artwork[] = [
  {
    imageUrl: "/1fe9922afaa072272225b0c218733929f68adbe7.png",
    title: "City No.245",
    artistName: "Johny Ong",
    artistAvatarFallback: "JO",
    price: "฿ 199,000,000",
    hasOverlay: true,
  },
  {
    imageUrl: "/7a117f6783cfe3fa7d5033e1ccdfdafbeb34edf9.png",
    title: "Tupac Shakur",
    artistName: "Johny Ong",
    artistAvatarFallback: "JO",
    price: "฿ 199,000,000",
    hasOverlay: true,
  },
  {
    imageUrl: "/e2fbe87e6756501beff05914646ce02f9544e57c.png",
    title: "Jeffrey Dahmer",
    artistName: "Johny Ong",
    artistAvatarFallback: "JO",
    price: "฿ 199,000,000",
    hasOverlay: true,
  },
  {
    imageUrl: "/967cc7631745aacb3bc651892198621d8d2696f1.png",
    title: "City Tokyo No.245",
    artistName: "Johny Ong",
    artistAvatarFallback: "JO",
    price: "฿ 199,000,000",
    hasOverlay: true,
  },
  {
    imageUrl: "/80e34f033c094f39e0fa3e9dbdb2f74f82dcd4df.png",
    title: "Batman new 52",
    artistName: "Johny Ong",
    artistAvatarFallback: "JO",
    price: "฿ 199,000,000",
    hasOverlay: true,
  },
];

const PHOTOGRAPH_ARTWORKS: Artwork[] = [
  {
    imageUrl: "/bdc0426a2b4526d66bfffdcb864b26ebd48199cf.png",
    title: "World war 2 “Women”",
    artistName: "Johny Ong",
    artistAvatarFallback: "JO",
    price: "฿ 199,000,000",
    hasOverlay: true,
  },
  {
    imageUrl: "/7170da343c6297d9303ae80f22606892e0574abd.png",
    title: "Career “Doctor”",
    artistName: "Johny Ong",
    artistAvatarFallback: "JO",
    price: "฿ 199,000,000",
    hasOverlay: true,
  },
  {
    imageUrl: "/c75c6e88976a6cdfca6cda4c287b202917c2a5b0.png",
    title: "“After Life”",
    artistName: "Johny Ong",
    artistAvatarFallback: "JO",
    price: "฿ 199,000,000",
    hasOverlay: true,
  },
  {
    imageUrl: "/a14bc9b56abc22904b8253b84587134637d99a5e.png",
    title: "“Tattoo Artist”",
    artistName: "Johny Ong",
    artistAvatarFallback: "JO",
    price: "฿ 199,000,000",
    hasOverlay: true,
  },
  {
    imageUrl: "/80e34f033c094f39e0fa3e9dbdb2f74f82dcd4df.png",
    title: "World war 2 “Women”",
    artistName: "Johny Ong",
    artistAvatarFallback: "JO",
    price: "฿ 199,000,000",
    hasOverlay: true,
  },
];

const SCULPTURE_ARTWORKS: Artwork[] = [
  {
    imageUrl: "/8308c81ba60509b916d96a15f45e750cd19589e0.png",
    title: "Monster Hipster Doll",
    artistName: "Johny Ong",
    artistAvatarFallback: "JO",
    price: "฿ 199,000,000",
    hasOverlay: true,
  },
  {
    imageUrl: "/027268b4583581c66698653829e4ce76bfdcd5bd.png",
    title: "Luffy Onepiece",
    artistName: "Johny Ong",
    artistAvatarFallback: "JO",
    price: "฿ 199,000,000",
    hasOverlay: true,
  },
  {
    imageUrl: "/27fcf9bc50bf04f01be5bb2dba9966f20ee16a21.png",
    title: "The women with two cat245",
    artistName: "Johny Ong",
    artistAvatarFallback: "JO",
    price: "฿ 199,000,000",
    hasOverlay: true,
  },
  {
    imageUrl: "/342033ac714acf7b506533463a4c7dc994c33608.png",
    title: "Monster Hipster Doll",
    artistName: "Johny Ong",
    artistAvatarFallback: "JO",
    price: "฿ 199,000,000",
    hasOverlay: true,
  },
];

const NEW_MEDIA_ARTWORKS: Artwork[] = [
  {
    imageUrl: "/b58bea902379ee0a95d1a6df8fa5fc400337e2ae.png",
    title: "Women in cyberpunk",
    artistName: "Johny Ong",
    artistAvatarFallback: "JO",
    price: "฿ 199,000,000",
    hasOverlay: true,
  },
  {
    imageUrl: "/b97b29c99cdde4e5c91f453348a35fca58c15f15.png",
    title: "Spy in Tokyo",
    artistName: "Johny Ong",
    artistAvatarFallback: "JO",
    price: "฿ 199,000,000",
    hasOverlay: true,
  },
  {
    imageUrl: "/3963ada9f33671e53c752b40edf9f08566113538.png",
    title: "Buff Ganesha",
    artistName: "Johny Ong",
    artistAvatarFallback: "JO",
    price: "฿ 199,000,000",
    hasOverlay: true,
  },
  {
    imageUrl: "/cd8aa01813d28d91449d188fe9f5c437c0c392dc.png",
    title: "City Tokyo No.245",
    artistName: "Johny Ong",
    artistAvatarFallback: "JO",
    price: "฿ 199,000,000",
    hasOverlay: true,
  },
  {
    imageUrl: "/80e34f033c094f39e0fa3e9dbdb2f74f82dcd4df.png",
    title: "Batman new 52",
    artistName: "Johny Ong",
    artistAvatarFallback: "JO",
    price: "฿ 199,000,000",
    hasOverlay: true,
  },
];

export default function Home() {
  return (
    <main className="flex min-h-dvh flex-1 flex-col bg-[url('/white-fabric-texture-background-design-element.png')] bg-cover bg-center bg-no-repeat">
      <div className="mx-auto w-full max-w-6xl px-4 py-4">
        <div className="flex flex-row items-center justify-between gap-4">
          <div className="flex flex-row items-center gap-2">
            <Button type="button" variant="default">
              <Image
                src="/icons/idea.png"
                alt=""
                width={16}
                height={16}
                className="size-4 bg-no-repeat"
              />
              <span>New in</span>
            </Button>
            <Button type="button" variant="secondary" className="bg-background/80">
              <Image
                src="/icons/artwork.png"
                alt=""
                width={16}
                height={16}
                className="size-4 bg-no-repeat"
              />
              <span>Painting</span>
            </Button>
            <Button type="button" variant="secondary" className="bg-background/80">
              <Image
                src="/icons/stationery.png"
                alt=""
                width={16}
                height={16}
                className="size-4 bg-no-repeat"
              />
              <span>Drawing</span>
            </Button>
            <Button type="button" variant="secondary" className="bg-background/80">
              <Image
                src="/icons/photography.png"
                alt=""
                width={16}
                height={16}
                className="size-4 bg-no-repeat"
              />
              <span>Photography</span>
            </Button>
            <Button type="button" variant="secondary" className="bg-background/80">
              <Image
                src="/icons/ancient-statue.png"
                alt=""
                width={16}
                height={16}
                className="size-4 bg-no-repeat"
              />
              <span>Sculpture</span>
            </Button>
            <Button type="button" variant="secondary" className="bg-background/80">
              <Image
                src="/icons/digital-art.png"
                alt=""
                width={16}
                height={16}
                className="size-4 bg-no-repeat"
              />
              <span>Digital Art</span>
            </Button>
            <Button type="button" variant="secondary" className="bg-background/80">
              <Image
                src="/icons/art-papers.png"
                alt=""
                width={16}
                height={16}
                className="size-4 bg-no-repeat"
              />
              <span>Other media</span>
            </Button>
          </div>

          <ButtonGroup>
            <Button type="button" variant="secondary" className="bg-background/80">
              <Image
                src="/icons/pile-of-money.png"
                alt=""
                width={16}
                height={16}
                className="size-4 bg-no-repeat"
              />
              <span>Buy/Bid</span>
            </Button>
            <Button type="button" variant="secondary" className="bg-background/80">
              <Image
                src="/icons/mallet.png"
                alt=""
                width={16}
                height={16}
                className="size-4 bg-no-repeat"
              />
              <span>Auction</span>
            </Button>
          </ButtonGroup>
        </div>
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 py-6">
        <div className="relative flex h-46.75 flex-col items-start gap-2 rounded-xl bg-[#FFEBFC] px-8 py-6 text-left">
          <div className="flex flex-row items-center gap-2">
            <Image
              src="/logo-5x-8.png"
              alt="Logo of Arthub"
              width={32}
              height={32}
              className="size-8"
              priority
            />
            <span className="text-xl text-muted-foreground">
              ART
              <span className="font-bold text-foreground">HUB</span>
            </span>
          </div>

          <span className="text-3xl font-bold">The art place for all collector</span>
          <span className="mt-auto text-lg text-muted-foreground">View new art </span>

          <Image
            src="/explode-shape.png"
            alt=""
            width={181}
            height={181}
            className="absolute right-83.75 -bottom-20 size-45.25"
            priority
          />
          <Image
            src="/abstact-shape.png"
            alt=""
            width={186}
            height={186}
            className="absolute -top-8.5 right-44 size-46.5"
            priority
          />
          <Image
            src="/cute-abstract-shape.png"
            alt=""
            width={110}
            height={110}
            className="absolute right-8.5 -bottom-10 size-27.5"
          />
          <Image
            src="/star-abstract-shape.png"
            alt=""
            width={71}
            height={71}
            className="absolute top-0 right-100 size-17.75"
          />
          <Image
            src="/star-abstract-shape.png"
            alt=""
            width={36}
            height={36}
            className="absolute right-60 -bottom-4 size-9"
          />
          <Image
            src="/star-abstract-shape.png"
            alt=""
            width={36}
            height={36}
            className="absolute top-10 right-20 size-9"
          />
        </div>
      </div>

      <div className="mx-auto w-full max-w-6xl space-y-10 px-4 py-4">
        <Suspense fallback={<ArtworkCarouselSectionSkeleton title="New in now" />}>
          <ArtworkCarouselSection title="New in now" artworks={NEW_IN_ARTWORKS} priorityCount={4} />
        </Suspense>

        <Suspense fallback={<ArtworkCarouselSectionSkeleton title="Painting to life" />}>
          <ArtworkCarouselSection title="Painting to life" artworks={PAINTING_ARTWORKS} />
        </Suspense>

        <Suspense fallback={<ArtworkCarouselSectionSkeleton title="Photograph tell story" />}>
          <ArtworkCarouselSection title="Photograph tell story" artworks={PHOTOGRAPH_ARTWORKS} />
        </Suspense>

        <Suspense fallback={<ArtworkCarouselSectionSkeleton title="Sculpture from inspire" />}>
          <ArtworkCarouselSection title="Sculpture from inspire" artworks={SCULPTURE_ARTWORKS} />
        </Suspense>

        <Suspense fallback={<ArtworkCarouselSectionSkeleton title="New media today" />}>
          <ArtworkCarouselSection title="New media today" artworks={NEW_MEDIA_ARTWORKS} />
        </Suspense>
      </div>
    </main>
  );
}
