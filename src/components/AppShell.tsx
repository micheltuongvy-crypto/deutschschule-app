"use client";

import { LangProvider } from "@/context/LangContext";
import { ProgressProvider } from "@/context/ProgressContext";
import Navbar from "./Navbar";
import { ReactNode } from "react";

export default function AppShell({ children }: { children: ReactNode }) {
  return (
    <LangProvider>
      <ProgressProvider>
        <Navbar />
        <main className="flex-1">{children}</main>
      </ProgressProvider>
    </LangProvider>
  );
}
