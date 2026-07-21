import { RegisterForm } from "@/components/register-form";

export default function Page({}: PageProps<"/auth/register">) {
  return (
    <div className="relative flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-6xl">
        <RegisterForm />
      </div>

      <span className="absolute bottom-4 text-base leading-6 font-normal text-muted-foreground">
        © 2020 Arthub, Inc. All rights reserved.
      </span>
    </div>
  );
}
