// src/components/ProtectedRoute.tsx
"use client";

import { RootState } from "@/rtk/store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = useSelector((state:RootState)=>state.auth.user);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.replace("/");
    }
  }, [user, router]);

  if (!user) return null; // or a loader/spinner
  return <>{children}</>;
}
