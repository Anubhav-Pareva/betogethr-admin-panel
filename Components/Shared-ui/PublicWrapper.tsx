// src/components/PublicRoute.tsx
"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../rtk/store";

export default function PublicRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = useSelector((state: RootState)=>state.auth.user);
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.replace("/admin/dashboard");
    }
  }, [user, router]);

  if (user) return null;
  return <>{children}</>;
}
