'use client';

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
  return (
    <div
    className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
        <Menu setActive={setActive}>
            <Link href={"/"}>
            <MenuItem setActive={setActive} active={active} item="Home">
            
            </MenuItem>
            </Link>
            <MenuItem
            setActive={setActive} active={active} item="Our Courses"
            >
               <div className="flex flex-col space-y-4 text-sm">
               <HoveredLink href="/courses">All Courses</HoveredLink>
            <HoveredLink href="/courses">
              Basic Music Theory
            </HoveredLink>
            <HoveredLink href="/courses">
              Advanced Composition
            </HoveredLink>
            <HoveredLink href="/courses">Songwriting</HoveredLink>
            <HoveredLink href="/courses">
              Music Production
            </HoveredLink>
               </div>
            </MenuItem>
            <MenuItem
            setActive={setActive} active={active} item="Our Cart"
            >
               <div className="flex flex-col space-y-4 text-sm">
               <HoveredLink href="/cart">All Cart</HoveredLink>
            <HoveredLink href="/cart">
              Basic Music Theory
            </HoveredLink>
            <HoveredLink href="/cart">
              Advanced Composition
            </HoveredLink>
            <HoveredLink href="/cart">Songwriting</HoveredLink>
            <HoveredLink href="/cart">
              Music Production
            </HoveredLink>
               </div>
            </MenuItem>
            <Link href={"/contact"}>
            <MenuItem setActive={setActive} active={active} item="Contact Us">
            
            </MenuItem>
            </Link>
        </Menu>
    </div>
  )
}

export default Navbar