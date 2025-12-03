"use client"

import { useTranslations } from "next-intl";
import Link from "next/link"
import type { ReactNode } from "react"

export function Header(): ReactNode {
  const t = useTranslations('common');
  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg">
          <img src="/logo.png" alt="Logo" />
          { t('appName') }
        </Link>
        <div className="hidden md:flex items-center gap-6">
          <Link href="/animals" className="text-muted-foreground hover:text-foreground transition-colors">
            { t('browsePets') }
          </Link>
          <Link href="/quiz" className="text-muted-foreground hover:text-foreground transition-colors">
            { t('quiz') }
          </Link>
          <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
            { t('about') }
          </Link>
        </div>
      </div>
    </nav>
  )
}
