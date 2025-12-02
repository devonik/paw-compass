import type React from "react"
// <CHANGE> Updated metadata and added PawCompass branding
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import {NextIntlClientProvider} from 'next-intl';

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "PawCompass – Finden Sie Ihr perfektes Haustier",
  description:
    "Finden Sie Ihr perfektes Haustier in vertrauenswürdigen Tierheimen. Finden Sie mit unserem intelligenten Matching-Quiz Haustiere, die zu Ihrem Lebensstil passen.",
  applicationName: 'PawCompass',
  generator: "Next.js",
  referrer: 'origin-when-cross-origin',
  keywords: ['Haustier', 'Hund', 'Tierheim'],
  authors: [{ name: 'devnik', url: 'https://devnik.dev' }],
  creator: 'Niklas Grieger',
  publisher: 'Niklas Grieger',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: '/'
  },
  metadataBase: new URL('https://acme.com'),
  manifest: '/site.webmanifest.json',
  openGraph: {
    images: '/og-image.png',
  },
  icons: {
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <NextIntlClientProvider>
          {children}
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  )
}
