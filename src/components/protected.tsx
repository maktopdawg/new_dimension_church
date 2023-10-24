"use client";

import React, { ReactNode, useEffect, useState } from "react";

export default function Protected({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsLoggedIn(localStorage.getItem("user") ? true : false);
    }
  });

  if (!isLoggedIn) {
    if (typeof window !== "undefined") {
      window.location.href = "/admin/login";
    }
  } else {
    return <div className="">{children}</div>;
  }
}
