"use client"

import { Header } from "@/src/components/header"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">About PawCompass</h1>
          <p className="text-muted-foreground text-lg">Connecting loving homes with deserving pets</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-3">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                At PawCompass, we believe every pet deserves a loving home and every pet owner deserves a perfect
                companion. We're building a platform that connects compassionate people with amazing animals from
                trusted shelters.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3">Why PawCompass?</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Browse hundreds of animals from multiple shelters in one place</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Smart matching quiz helps you find compatible pets</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Direct connections with shelters</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Beautiful profiles with detailed information</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-card rounded-2xl p-8 border border-border h-fit">
            <h2 className="text-2xl font-bold mb-6">Quick Facts</h2>
            <div className="space-y-6">
              <div>
                <p className="text-4xl font-bold text-primary">8+</p>
                <p className="text-muted-foreground">Partner Shelters</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-accent">100+</p>
                <p className="text-muted-foreground">Animals Available</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-secondary">2024</p>
                <p className="text-muted-foreground">Founded</p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["Sarah - Founder & Pet Enthusiast", "Mike - Tech Lead", "Emma - Partnership Manager"].map((member) => (
              <div key={member} className="bg-card rounded-xl p-6 border border-border text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-muted rounded-full flex items-center justify-center text-2xl">
                  👤
                </div>
                <p className="font-semibold">{member}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-12 text-center border border-primary/20">
          <h2 className="text-3xl font-bold mb-4">Ready to Find Your Match?</h2>
          <Link href="/quiz">
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium">
              Start Matching Quiz
            </button>
          </Link>
        </div>
      </main>
    </div>
  )
}
