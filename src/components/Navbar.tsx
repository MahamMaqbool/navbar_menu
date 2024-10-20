"use client";
import React, { useState } from "react";
import {  Menu, MenuItem } from './ui/Navbar-menu';
import { cn } from "@/lib/utils";
import Link from "next/link";

 export function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Home">
       <Link href="/" onClick={() => setActive("Home")}>Home</Link>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Our Courses">
        <Link href="/courses" onClick={() => setActive("OurCourses")}>Our Courses</Link>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="About">
        <Link href="/About" onClick={() => setActive("About")}>About</Link>
        </MenuItem>
      </Menu>
    </div>
  );
}