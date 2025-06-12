"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "./ui/button";
import { AlignJustify, X } from "lucide-react";
import { useState } from "react";

interface NavItemProps {
  title: string;
  href: string;
}

export function Navigation() {
  const pathname = usePathname();
  const [openmobilemenu, setopenmobilemenu] = useState(false);
  const navItems: NavItemProps[] = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Submit Mood",
      href: "/mood",
    },
    {
      title: "Admin Dashboard",
      href: "/admin",
    },
  ];

  return (
    <>
      <div className="border-b bg-background/95 backdrop-blur fixed top-0 z-50 left-0 right-0">
        <div className="flex h-14 items-center justify-center">
          <div className="flex items-center justify-between w-full px-10">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-bold">Mood Tracker</span>
            </Link>
            <nav className="items-center gap-x-6 lg:gap-x-10 text-sm font-medium hidden sm:flex">
              {navItems.map((item: NavItemProps) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    " hover:text-foreground/80 transition-colors",
                    pathname === item.href
                      ? "text-foreground"
                      : "text-foreground/60"
                  )}
                >
                  {item.title}
                </Link>
              ))}
            </nav>
            <div className="flex items-center justify-center gap-x-4">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="icon"
                className="sm:hidden"
                onClick={() => {
                  setopenmobilemenu(!openmobilemenu);
                }}
              >
                {openmobilemenu ? <X /> : <AlignJustify />}
              </Button>
            </div>
          </div>
        </div>
      </div>
      {openmobilemenu && (
        <>
          <div className="fixed right-0 top-14 w-full bg-background border-l border-border z-50 sm:hidden ">
            <nav className="flex flex-col p-4 gap-y-2">
              {navItems.map((item: NavItemProps) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => {
                    setopenmobilemenu(false);
                  }}
                  className={cn(
                    "px-3 py-2 rounded-md text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors",
                    pathname === item.href
                      ? "bg-accent text-accent-foreground"
                      : "text-foreground/60"
                  )}
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>
        </>
      )}
    </>
  );
}
