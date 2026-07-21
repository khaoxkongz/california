import { LoginForm } from "@/components/login-form";

export default function Page({}: PageProps<"/auth/login">) {
  return (
    <div className="relative flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
      <div className="w-full max-w-6xl">
        <LoginForm />
      </div>

      <span className="absolute bottom-4 text-base leading-6 font-normal text-muted-foreground">
        © 2020 Arthub, Inc. All rights reserved.
      </span>
    </div>
  );
}
