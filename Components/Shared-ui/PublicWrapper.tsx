// src/components/PublicRoute.tsx
"use client";

import { RootState } from "@/rtk/store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function PublicRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = useSelector((state: RootState)=>state.auth.user);
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.replace("/dashboard");
    }
  }, [user, router]);

  if (user) return null;
  return <>{children}</>;
}
