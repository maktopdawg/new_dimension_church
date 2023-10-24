"use client";

import React, { ReactNode } from "react";
import Protected from "./protected";

export default function AppLayout({children} : {children : ReactNode}) {
  return (
    <Protected>
      <div>{children}</div>
    </Protected>
  );
}
