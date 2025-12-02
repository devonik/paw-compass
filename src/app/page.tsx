"use client"

import Link from "next/link"
import { Heart, Search, Zap } from "lucide-react"
import { Header } from "../components/header";

export default function HomePage() {

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Header />

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-balance">
              Find Your <span className="text-primary">Perfect Pet</span> Companion
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Connect with animals from trusted shelters. Discover pets that match your lifestyle with our intelligent
              matching system. Give a loving home to a pet in need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/animals">
                <button className="w-full sm:w-auto px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium">
                  Browse Pets
                </button>
              </Link>
              <Link href="/quiz">
                <button className="w-full sm:w-auto px-8 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-colors font-medium">
                  Take Matching Quiz
                </button>
              </Link>
            </div>
          </div>

          {/* Hero Image Placeholder */}
          <div className="relative h-96 md:h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl" />
            <img
              src="/happy-dogs-and-cats-together-in-a-warm-cozy-enviro.jpg"
              alt="Happy pets from shelters"
              className="w-full h-full object-cover rounded-3xl relative z-10"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-colors">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
              <Search className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3">Search & Filter</h3>
            <p className="text-muted-foreground">
              Browse hundreds of animals from shelters near you. Filter by species, age, location, and more.
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-colors">
            <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl font-bold mb-3">Smart Matching</h3>
            <p className="text-muted-foreground">
              Answer 5 simple questions to get personalized pet recommendations based on your lifestyle.
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-colors">
            <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-4">
              <Heart className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="text-xl font-bold mb-3">Connect & Adopt</h3>
            <p className="text-muted-foreground">
              Contact shelters directly and start your adoption journey. Make a difference in a pet's life.
            </p>
          </div>
        </div>
      </section>

      {/* Partner Shelters Section */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Our Partner Shelters</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          We work with trusted animal shelters to bring you verified, up-to-date listings of animals looking for their
          forever homes.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            "Happy Paws Shelter",
            "City Animal Care",
            "Rescue Ranch",
            "Hope for Tails",
            "Furry Friends",
            "Second Chance",
            "Love & Paws",
            "Safe Haven",
          ].map((shelter) => (
            <div key={shelter} className="bg-card rounded-xl p-6 border border-border text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-muted rounded-lg flex items-center justify-center">
                <span className="text-2xl">🏠</span>
              </div>
              <p className="font-medium text-sm">{shelter}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 py-20">
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-12 text-center border border-primary/20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Meet Your Match?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you want to browse our full catalog or get personalized recommendations, we'll help you find the
            perfect companion.
          </p>
          <Link href="/animals">
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium">
              Start Browsing Now
            </button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border mt-20">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4">PawCompass</h3>
              <p className="text-sm text-muted-foreground">
                Connecting pet lovers with shelter animals to create lasting bonds.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Browse</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/animals" className="text-muted-foreground hover:text-foreground">
                    All Pets
                  </Link>
                </li>
                <li>
                  <Link href="/animals?type=dog" className="text-muted-foreground hover:text-foreground">
                    Dogs
                  </Link>
                </li>
                <li>
                  <Link href="/animals?type=cat" className="text-muted-foreground hover:text-foreground">
                    Cats
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Connect</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/quiz" className="text-muted-foreground hover:text-foreground">
                    Matching Quiz
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-foreground">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">For Shelters</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground">
                    Partner With Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground">
                    Features
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8">
            <p className="text-sm text-muted-foreground text-center">
              © 2025 PawCompass. Connecting pets with their perfect homes.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
