"use client";

import { LangProvider } from "@/context/LangContext";
import Navbar from "./Navbar";
import { ReactNode } from "react";

export default function AppShell({ children }: { children: ReactNode }) {
  return (
    <LangProvider>
      <Navbar />
      <main className="flex-1">{children}</main>
    </LangProvider>
  );
}
