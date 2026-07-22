"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signOut } from "@/lib/auth/client";

export function SignOutButton() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  return (
    <button
      disabled={loading}
      onClick={async () => {
        setLoading(true);
        await signOut();
        router.refresh();
      }}
      className="flex h-11 items-center justify-center rounded-full border border-black/[.12] px-6 text-base font-medium transition-colors hover:bg-black/[.04] disabled:opacity-60 dark:border-white/[.18] dark:hover:bg-white/[.06]"
    >
      {loading ? "Signing out…" : "Sign out"}
    </button>
  );
}
