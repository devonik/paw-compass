"use client"

import { useTranslations } from "next-intl";
import Link from "next/link"
import type { ReactNode } from "react"

export function Footer(): ReactNode {
  const t = useTranslations('common');
  return (
    <footer className="bg-card border-t border-border mt-20">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4">{ t('appName') }</h3>
              <p className="text-sm text-muted-foreground">
                { t('appShortDescription') }
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">{ t('browse') }</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/animals" className="text-muted-foreground hover:text-foreground">
                    { t('allPets') }
                  </Link>
                </li>
                <li>
                  <Link href="/animals?type=dog" className="text-muted-foreground hover:text-foreground">
                    { t('allDogs') }
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">{ t('connect') }</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/quiz" className="text-muted-foreground hover:text-foreground">
                    { t('quiz') }
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-foreground">
                    { t('about') }
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                    { t('contact') }
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">{ t('forShelters') }</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground">
                    { t('partnerWithUs') }
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground">
                    { t('features') }
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8">
            <p className="text-sm text-muted-foreground text-center">
              © 2025 { t('footerDisclaimer') }
            </p>
          </div>
        </div>
      </footer>
  )
}
