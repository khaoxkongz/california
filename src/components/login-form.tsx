import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Field, FieldDescription, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export function LoginForm({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <div className="relative hidden bg-muted md:block">
            <img
              src="/brushes-jar.jpg"
              alt="Image"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-x-0 top-8 left-8 flex flex-row items-center gap-3">
              <img src="/logo-5x-8.png" alt="Image" className="z-10 size-8" />
              <span className="text-2xl text-muted-foreground">
                ART
                <span className="text-foreground">HUB</span>
              </span>
            </div>
          </div>

          <form className="px-24 py-18">
            <FieldGroup className="gap-6">
              <div className="flex flex-col items-start gap-2 text-left">
                <h1 className="text-2xl font-bold">Welcome back</h1>
                <p className="text-balance text-muted-foreground">
                  Welcome back! please enter your account
                </p>
              </div>
              <Field className="gap-1">
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input id="email" type="email" placeholder="you@example.com" className="h-9.5" />
              </Field>
              <Field className="gap-1">
                <FieldLabel htmlFor="password">Password</FieldLabel>
                <Input id="password" type="password" className="h-9.5" />
              </Field>

              <Link href="#" className="text-sm underline-offset-2 hover:underline">
                Forgot your password?
              </Link>

              <Field>
                <Button type="submit" className="h-9.5">
                  Sign In
                </Button>
              </Field>
              <FieldDescription className="text-center">
                Don&apos;t have an account?{" "}
                <Link href="/auth/register" className="text-sm underline-offset-2 hover:underline">
                  Sign up
                </Link>
              </FieldDescription>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
