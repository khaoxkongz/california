import { Button } from "@/components/ui/button";

import Image from "next/image";

export function SiteFooter() {
  return (
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
  );
}
