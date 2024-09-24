// SessionProviderWrapper.js
"use client"; // Indicate this is a Client Component
import User from "@/app/components/user/page"
import { SessionProvider } from "next-auth/react";

export default function app({session }) {
  return (
    <SessionProvider session={session}>
      <User />
    </SessionProvider>
  );
}
