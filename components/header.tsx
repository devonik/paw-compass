"use client"

import Link from "next/link"
import type { ReactNode } from "react"

export function Header(): ReactNode {
  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground">P</span>
          </div>
          PawCompass
        </Link>
        <div className="hidden md:flex items-center gap-6">
          <Link href="/animals" className="text-muted-foreground hover:text-foreground transition-colors">
            Browse Pets
          </Link>
          <Link href="/quiz" className="text-muted-foreground hover:text-foreground transition-colors">
            Quiz
          </Link>
          <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
            About
          </Link>
        </div>
      </div>
    </nav>
  )
}
