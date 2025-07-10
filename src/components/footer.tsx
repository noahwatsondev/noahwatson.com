"use client";

import { Linkedin } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Footer() {
  const [year, setYear] = React.useState(new Date().getFullYear());

  React.useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="border-t">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <p className="text-sm text-muted-foreground">
          &copy; {year} Noah Watson. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <Link href="https://www.linkedin.com/in/noahwwatson/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
            <Linkedin className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
