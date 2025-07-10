"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Linkedin, Mail } from "lucide-react";

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
  ];

  return (
    <header className="border-b sticky top-0 bg-background/95 backdrop-blur-sm z-10">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-3 font-bold text-lg">
          <Avatar className="h-8 w-8">
            <AvatarImage src="/images/nw.jpg" alt="Noah Watson" />
            <AvatarFallback>NW</AvatarFallback>
          </Avatar>
          <span>Noah Watson</span>
        </Link>
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-muted-foreground transition-colors hover:text-primary",
                  pathname === item.href && "text-primary"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="https://www.linkedin.com/in/noahwwatson/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
            >
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
            <Link href="mailto:noah.w.watson@gmail.com" aria-label="Email Noah">
              <Mail className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
          </div>
        </div>
        {/* Mobile menu could be added here */}
      </div>
    </header>
  );
}
