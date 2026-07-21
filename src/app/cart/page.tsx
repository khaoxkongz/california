import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

const items = [
  { label: "Light", value: "light" },
  { label: "Dark", value: "dark" },
  { label: "System", value: "system" },
];

export default function Page() {
  return (
    <div className="grid flex-1 auto-rows-auto items-start bg-[url(/white-fabric-texture-background-design-element.jpg)] bg-cover bg-center bg-no-repeat">
      <div className="flex flex-col items-center justify-center">
        <div className="mx-auto flex w-full max-w-3xl flex-row items-center gap-7 px-4 py-6">
          <div className="flex flex-row items-start">
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
          </div>

          <span className="block text-3xl font-bold">Cart</span>
        </div>

        <div className="mx-auto w-full max-w-3xl px-4">
          <div className="space-y-4 rounded-lg bg-card p-6 shadow">
            <span className="text-2xl font-bold">Your Cart</span>

            <Separator className="mt-2" />

            <div className="flex flex-row items-center justify-between gap-4">
              <span>1 items</span>

              <Button type="button" variant="ghost">
                Clear all
              </Button>
            </div>

            <div className="flex flex-row justify-between">
              <Image
                src="/966ac09ec7f0ce225ec4bb67e9a39be74214d47f.png"
                alt="Batman New 52 standing on the falling Gothem"
                width={66}
                height={104}
                className="h-26 w-16.5 rounded-md"
              />

              <div className="flex w-57.25 flex-col items-start justify-center">
                <span>Batman New 52 standing on the falling Gothem</span>
                <span>Painting`</span>
              </div>

              <div className="flex flex-col items-start justify-center">
                <Select items={items}>
                  <SelectTrigger className="h-7 w-13.75">
                    <SelectValue placeholder="1" />
                  </SelectTrigger>
                  <SelectContent>
                    {items.map((item) => (
                      <SelectItem key={item.value} value={item.value}>
                        {item.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <span>Remove</span>
              </div>

              <span className="text-base font-bold">฿ 1999,999,000</span>
            </div>

            <Separator />

            <div className="flex flex-row justify-between">
              <Image
                src="/03b295498a84a6c4e2dc6506c92381b1daba6781.png"
                alt="Superman New 52 flying upon Metropolish"
                width={66}
                height={104}
                className="h-26 w-16.5 rounded-md"
              />

              <div className="flex w-57.25 flex-col items-start justify-center">
                <span>Superman New 52 flying upon Metropolish</span>
                <span>Painting`</span>
              </div>

              <div className="flex flex-col items-start justify-center">
                <Select items={items}>
                  <SelectTrigger className="h-7 w-13.75">
                    <SelectValue placeholder="1" />
                  </SelectTrigger>
                  <SelectContent>
                    {items.map((item) => (
                      <SelectItem key={item.value} value={item.value}>
                        {item.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <span>Remove</span>
              </div>

              <span className="text-base font-bold">฿ 1999,999,000</span>
            </div>

            <div className="mx-auto w-full max-w-xs rounded-md border border-muted bg-[#FAF9FE]">
              <div className="flex flex-col items-start gap-2 p-4 text-sm text-[#5C5C5C]">
                <span className="font-bold text-foreground">Order summary</span>

                <div className="flex w-full flex-row items-center justify-between">
                  <span>Subtotal</span>
                  <span className="font-bold text-foreground">฿ 1200</span>
                </div>

                <Separator />

                <div className="flex w-full flex-row items-center justify-between">
                  <span>Shipping estimate</span>
                  <span className="font-bold text-foreground">฿ 0</span>
                </div>

                <Separator />

                <div className="flex w-full flex-row items-center justify-between">
                  <span>Tax estimate</span>
                  <span className="font-bold text-foreground">฿ 0</span>
                </div>

                <Separator />

                <div className="flex w-full flex-row items-center justify-between">
                  <span>Order total</span>
                  <span className="font-bold text-foreground">฿ 500,000,000</span>
                </div>

                <Button className="w-full">Checkout</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-auto flex flex-col items-center gap-1 py-4">
        <span className="text-base leading-6 font-normal text-muted-foreground">Arthub help</span>
        <span className="text-base leading-6 font-normal text-muted-foreground">
          © 2020 Arthub, Inc. All rights reserved.
        </span>
      </div>
    </div>
  );
}
