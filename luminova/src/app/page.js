"use client"; // Indicates this is a client component

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/HomePage");
  }, [router]);

  return null; // No UI needed here since it's just a redirect
}
