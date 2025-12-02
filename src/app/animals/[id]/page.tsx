"use client"

import { animals, shelters } from "@/src/lib/sample-data"
import { Header } from "@/src/components/header"
import { Heart, MapPin, Mail, Phone } from "lucide-react"
import { useParams } from "next/navigation"
import Link from "next/link"
import type { RouteParams } from "@/types"

export default function AnimalDetailPage() {
  const params = useParams<RouteParams>()
  const id = params.id
  const animal = animals.find((a) => a.id === id)
  const shelter = animal ? shelters.find((s) => s.id === animal.shelterId) : null

  if (!animal || !shelter) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="max-w-4xl mx-auto px-4 py-12">
          <p className="text-lg text-muted-foreground">Animal not found</p>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="max-w-4xl mx-auto px-4 py-12">
        <Link href="/animals" className="text-primary hover:text-primary/80 mb-6 inline-block">
          ← Back to Browse
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Image */}
          <div className="md:col-span-2">
            <div className="relative rounded-2xl overflow-hidden bg-muted h-96 md:h-full min-h-96">
              <img src={animal.image || "/placeholder.svg"} alt={animal.name} className="w-full h-full object-cover" />
              <button className="absolute top-4 right-4 p-3 bg-background/80 backdrop-blur rounded-full hover:bg-primary/20 transition-colors">
                <Heart className="w-6 h-6 text-primary" />
              </button>
            </div>
          </div>

          {/* Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold mb-2">{animal.name}</h1>
              <p className="text-muted-foreground text-lg">{animal.breed}</p>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Age</p>
                  <p className="font-semibold">{animal.age} years old</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Gender</p>
                  <p className="font-semibold capitalize">{animal.gender}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Size</p>
                  <p className="font-semibold capitalize">{animal.size}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Energy</p>
                  <p className="font-semibold capitalize">{animal.energy}</p>
                </div>
              </div>
            </div>

            <div className="bg-accent/10 rounded-xl p-6 border border-accent/20 space-y-3">
              <p className="text-sm font-semibold text-accent">Adoption Fee</p>
              <p className="text-3xl font-bold">${animal.adoptionFee}</p>
            </div>

            <div>
              <p className="text-sm font-semibold mb-3">Personality Traits</p>
              <div className="flex flex-wrap gap-2">
                {animal.traits.map((trait) => (
                  <span key={trait} className="bg-primary/10 text-primary text-sm rounded-full px-3 py-1">
                    {trait}
                  </span>
                ))}
              </div>
            </div>

            <button className="w-full py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium">
              Contact Shelter
            </button>
          </div>
        </div>

        {/* Description */}
        <div className="mt-12 space-y-4">
          <h2 className="text-2xl font-bold">About {animal.name}</h2>
          <p className="text-muted-foreground leading-relaxed text-lg">{animal.description}</p>
        </div>

        {/* Shelter Info */}
        <div className="mt-12 bg-card rounded-2xl p-8 border border-border">
          <h2 className="text-2xl font-bold mb-6">Shelter Information</h2>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">{shelter.name}</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span>{shelter.location}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <a href={`mailto:${shelter.email}`} className="text-primary hover:underline">
                  {shelter.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <a href={`tel:${shelter.phone}`} className="text-primary hover:underline">
                  {shelter.phone}
                </a>
              </div>
            </div>

            <button className="mt-6 w-full py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium">
              Contact {shelter.name}
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
