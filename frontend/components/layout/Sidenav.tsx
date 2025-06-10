import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";

// ===============================
// ========= Dashboard Side Navbar
// ===============================
export default function Sidenav() {
  return (
    <div className="">
      <aside
        className={cn(
          "max-w-56",
          "border-r pt-6 transition-all duration-300 ease-in-out transform hidden md:flex h-full bg-white"
        )}
      >
        <nav className="flex h-full flex-col w-full text-[#071C42] break-words px-4 overflow-x-hidden scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-100 columns-1">
          {/* Navitems on top */}
          <h3>Side Nav items here</h3>
        </nav>
      </aside>
    </div>
  );
}
