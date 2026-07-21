import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Field, FieldDescription, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export function RegisterForm({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <div className="relative hidden bg-muted md:block">
            <img
              src="/still-life-small-decorative-objects-with-vivid-colors.jpg"
              alt="Image"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="flexrow absolute inset-x-0 top-8 left-8 flex items-center gap-3">
              <img src="/logo-5x-8.png" alt="Image" className="z-10 size-8" />
              <span className="text-2xl text-muted-foreground">
                ART
                <span className="text-foreground">HUB</span>
              </span>
            </div>
          </div>

          <form className="px-24 py-18">
            <FieldGroup>
              <div className="flex flex-col items-start gap-2 text-left">
                <h1 className="text-2xl font-bold">Almost There!</h1>
                <p className="text-balance text-muted-foreground">
                  We are excited to see you here...!
                </p>
              </div>
              <Field>
                <FieldLabel htmlFor="fullName">Fullname</FieldLabel>
                <Input id="fullName" type="text" className="h-9.5" />
              </Field>
              <Field>
                <FieldLabel htmlFor="userName">Username</FieldLabel>
                <Input id="userName" type="text" className="h-9.5" />
              </Field>
              <Field>
                <FieldLabel htmlFor="password">Password</FieldLabel>
                <Input id="password" type="password" className="h-9.5" />
              </Field>
              <Field>
                <FieldLabel htmlFor="confirmPassword">Confirm Password</FieldLabel>
                <Input id="confirmPassword" type="password" className="h-9.5" />
              </Field>
              <Field>
                <Button type="submit" className="h-9.5">
                  Sign Up
                </Button>
              </Field>
              <FieldDescription className="text-center">
                have an account?{" "}
                <Link href="/auth/login" className="text-sm underline-offset-2 hover:underline">
                  Sign In
                </Link>
              </FieldDescription>
              <FieldDescription className="px-6 text-center">
                By Signing up, you agree our{" "}
                <Link href="#" className="underline-offset-2 hover:underline">
                  Terms & Condition
                </Link>{" "}
                and{" "}
                <Link href="#" className="underline-offset-2 hover:underline">
                  Privacy Policy
                </Link>
                .
              </FieldDescription>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
