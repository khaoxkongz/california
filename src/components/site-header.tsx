import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";

import Image from "next/image";

export function SiteHeader() {
  return (
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
              priority
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
  );
}
