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
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
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
import React from "react";

export default function Page() {
  return (
    <React.Fragment>
      <header className="sticky top-0 z-50 border-b bg-background">
        <div className="mx-auto flex h-20 w-full max-w-6xl flex-row items-center justify-between px-4 py-7">
          <div className="flex flex-row items-center gap-12">
            <div className="flex flex-row items-center gap-2">
              <Image
                src="/logo-5x-8.png"
                alt="Logo of Arthub"
                width={24}
                height={24}
                className="size-6"
              />
              <span className="text-xl text-muted-foreground">
                ART
                <span className="font-bold text-foreground">HUB</span>
              </span>
            </div>

            <div className="flex flex-row items-center gap-10 text-muted-foreground">
              <span className="font-medium text-foreground">Art Market</span>
              <span>Explore</span>
              <span>More</span>
            </div>
          </div>

          <div className="flex flex-row items-center gap-3">
            <InputGroup className="h-10 border-none bg-[#FAF9FE]">
              <InputGroupInput placeholder="Search for art" />
              <InputGroupAddon>
                <Image
                  src="/icons/magnifier.png"
                  alt="Search"
                  width={24}
                  height={24}
                  className="size-6 bg-no-repeat"
                />
              </InputGroupAddon>
            </InputGroup>

            <div className="flex flex-row items-center gap-3">
              <Button
                type="button"
                size="icon-lg"
                variant="secondary"
                className="size-10 bg-[#FAF9FE]"
                aria-label="Toggle dark mode"
              >
                <Image
                  src="/icons/moon.png"
                  alt=""
                  width={24}
                  height={24}
                  className="size-6 bg-no-repeat"
                />
              </Button>
              <Button
                type="button"
                size="icon-lg"
                variant="secondary"
                className="size-10 bg-[#FAF9FE]"
                aria-label="Messages"
              >
                <Image
                  src="/icons/love-chat.png"
                  alt=""
                  width={24}
                  height={24}
                  className="size-6 bg-no-repeat"
                />
              </Button>
              <Button
                type="button"
                size="icon-lg"
                variant="secondary"
                className="size-10 bg-[#FAF9FE]"
                aria-label="Shopping Cart"
              >
                <Image
                  src="/icons/shopping-cart.png"
                  alt=""
                  width={24}
                  height={24}
                  className="size-6 bg-no-repeat"
                />
              </Button>
            </div>

            <div className="flex flex-row items-center gap-2">
              <Avatar className="size-10">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex flex-col items-start text-left text-sm">
                <span>Junior Garcia</span>
                <span className="text-foreground">@littletle</span>
              </div>
            </div>
          </div>
        </div>
      </header>

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
            <picture className="h-full w-auto overflow-clip rounded-xl">
              <Image
                src="/966ac09ec7f0ce225ec4bb67e9a39be74214d47f.png"
                alt="Batman new 52"
                width={544}
                height={822}
                className="h-205.5 w-136"
              />
            </picture>

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
                  omnis voluptatem. Minus quidem ipsam quia iusto. Repudiandae sint consequuntur
                  vel. Amet ut nobis explicabo numquam expedita quia omnis voluptatem. Minus quidem
                  ipsam quia iusto.
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

      <footer className="border-t border-border bg-background">
        <div className="mx-auto flex max-w-6xl flex-row items-center justify-between px-4 py-6 text-sm text-muted-foreground">
          <div>© 2020 Arthub, Inc. All rights reserved.</div>

          <div className="flex flex-row items-center gap-7">
            <Button
              type="button"
              size="icon-sm"
              variant="ghost"
              className="rounded-full"
              aria-label="Facebook"
            >
              <Image
                src="/facebook.png"
                alt=""
                width={24}
                height={24}
                className="size-6 bg-no-repeat"
              />
            </Button>
            <Button
              type="button"
              size="icon-sm"
              variant="ghost"
              className="rounded-full"
              aria-label="Instagram"
            >
              <Image
                src="/instagram.png"
                alt=""
                width={24}
                height={24}
                className="size-6 bg-no-repeat"
              />
            </Button>
            <Button
              type="button"
              size="icon-sm"
              variant="ghost"
              className="rounded-full"
              aria-label="Twitter"
            >
              <Image
                src="/twitter.png"
                alt=""
                width={24}
                height={24}
                className="size-6 bg-no-repeat"
              />
            </Button>
            <Button
              type="button"
              size="icon-sm"
              variant="ghost"
              className="rounded-full"
              aria-label="GitHub"
            >
              <Image
                src="/github.png"
                alt=""
                width={24}
                height={24}
                className="size-6 bg-no-repeat"
              />
            </Button>
            <Button
              type="button"
              size="icon-sm"
              variant="ghost"
              className="rounded-full"
              aria-label="Unknown"
            >
              <Image
                src="/unknown.png"
                alt=""
                width={24}
                height={24}
                className="size-6 bg-no-repeat"
              />
            </Button>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
}
