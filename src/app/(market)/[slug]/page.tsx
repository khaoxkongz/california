import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  HeartIcon,
  HomeIcon,
  MapPinIcon,
  Share2Icon,
  ShieldCheckIcon,
  TruckIcon,
} from "lucide-react";

import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <main className="flex flex-1 flex-col bg-[url('/white-fabric-texture-background-design-element.png')] bg-cover bg-center bg-no-repeat">
      <div className="mx-auto w-full max-w-6xl px-4 py-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink render={<Link href="/" />}>
                <HomeIcon className="size-4" />
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator />

            <BreadcrumbItem>
              <BreadcrumbLink render={<Link href="/" />}>Painting</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator />

            <BreadcrumbItem>
              <BreadcrumbPage>Batman 52</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 py-4">
        <div className="grid w-full grid-cols-2 gap-4">
          <Image
            src="/966ac09ec7f0ce225ec4bb67e9a39be74214d47f.png"
            alt="Batman new 52"
            width={544}
            height={822}
            className="h-205.5 w-136 rounded-xl"
            priority
            sizes="(max-width: 768px) 100vw, 544px"
          />

          <div className="flex w-full flex-col items-start gap-4">
            <div className="flex flex-row items-center">
              <span className="text-3xl font-bold">
                Batman New 52 standing on the falling Gothem
              </span>

              <div className="flex flex-col items-center gap-3">
                <Button
                  type="button"
                  size="icon-lg"
                  variant="secondary"
                  className="size-10 bg-background/80"
                >
                  <HeartIcon />
                </Button>
                <Button
                  type="button"
                  size="icon-lg"
                  variant="secondary"
                  className="size-10 bg-background/80"
                >
                  <Share2Icon />
                </Button>
              </div>
            </div>

            <div className="flex w-full flex-row items-center justify-between gap-8">
              <div className="flex flex-row items-center gap-3">
                <Avatar>
                  <AvatarImage />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>

                <div className="flex flex-col items-start">
                  <span className="text-xs leading-3.5">Created by</span>
                  <span className="text-sm leading-5 font-bold">Johny Ong</span>
                </div>
              </div>

              <div className="flex flex-row items-center gap-3">
                <Avatar>
                  <AvatarImage />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>

                <div className="flex flex-col items-start">
                  <span className="text-xs leading-3.5">Category</span>
                  <span className="text-sm leading-5 font-bold">Painting</span>
                </div>
              </div>

              <div className="flex flex-row items-center gap-3">
                <Avatar>
                  <AvatarImage />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>

                <div className="flex flex-col items-start">
                  <span className="text-xs leading-3.5">Collection</span>
                  <span className="text-sm leading-5 font-bold">DC Heroes</span>
                </div>
              </div>
            </div>

            <Separator />

            <div className="flex w-full flex-col items-start gap-4">
              <span className="text-2xl font-bold">฿ 1999,000,000</span>

              <div className="flex flex-row items-center justify-between gap-8">
                <Button type="button" size="lg" className="flex w-full">
                  Add to cart
                </Button>
                <Button
                  type="button"
                  size="lg"
                  variant="secondary"
                  className="flex w-full bg-background/80"
                >
                  Make a offer
                </Button>
              </div>
            </div>

            <Separator />

            <div className="flex flex-col items-start gap-4">
              <span className="text-lg leading-7 font-bold">Description</span>

              <span className="text-base leading-6">
                Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita quia
                omnis voluptatem. Minus quidem ipsam quia iusto. Repudiandae sint consequuntur vel.
                Amet ut nobis explicabo numquam expedita quia omnis voluptatem. Minus quidem ipsam
                quia iusto.
              </span>
            </div>

            <div className="flex flex-col items-start gap-4">
              <span className="text-lg leading-7 font-bold">More information</span>

              <ul className="list-inside list-disc">
                <li className="text-base leading-6">Size: 108 W * 72 L * 2 H (Centimeter)</li>
                <li className="text-base leading-6">Oil Painting</li>
                <li className="text-base leading-6">Including Pre-Plan Document</li>
                <li className="text-base leading-6">With the Premium gold box</li>
              </ul>
            </div>

            <div className="flex w-full flex-row items-center justify-between gap-8">
              <div className="flex flex-col items-center gap-1 rounded-sm border border-border bg-card p-4">
                <ShieldCheckIcon className="pointer-events-none size-5 shrink-0" />
                <span className="text-sm">100%</span>
                <span className="text-xs text-muted-foreground">Secure Transaction</span>
              </div>

              <div className="flex flex-col items-center gap-1 rounded-sm border border-border bg-card p-4">
                <MapPinIcon className="pointer-events-none size-5 shrink-0" />
                <span className="text-sm">Worldwide Delivery</span>
                <span className="text-xs text-muted-foreground">Receive within 7 day</span>
              </div>

              <div className="flex flex-col items-center gap-1 rounded-sm border border-border bg-card p-4">
                <TruckIcon className="pointer-events-none size-5 shrink-0" />
                <span className="text-sm">Free Shipping</span>
                <span className="text-xs text-muted-foreground">For Order with 200,000 ฿</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
