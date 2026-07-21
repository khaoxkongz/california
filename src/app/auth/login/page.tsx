import { LoginForm } from "@/components/login-form";
import * as React from "react";

export default function Page({}: PageProps<"/auth/login">) {
  return (
    <React.Fragment>
      <div className="mt-auto p-6 md:p-10">
        <div className="w-full max-w-6xl">
          <LoginForm />
        </div>
      </div>

      <div className="mt-auto flex flex-col items-center gap-1 py-4">
        <span className="text-base leading-6 font-normal text-muted-foreground">
          © 2020 Arthub, Inc. All rights reserved.
        </span>
      </div>
    </React.Fragment>
  );
}
