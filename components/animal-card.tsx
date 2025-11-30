"use client"

import type React from "react"

import Link from "next/link"
import type { Animal } from "@/lib/sample-data"
import { Heart } from "lucide-react"
import type { ReactNode } from "react"

interface AnimalCardProps {
  animal: Animal
}

export function AnimalCard({ animal }: AnimalCardProps): ReactNode {
  return (
    <Link href={`/animals/${animal.id}`}>
      <div className="bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all hover:shadow-lg cursor-pointer h-full flex flex-col">
        <div className="relative h-48 overflow-hidden bg-muted">
          <img
            src={animal.image || "/placeholder.svg"}
            alt={animal.name}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
          <button
            className="absolute top-3 right-3 p-2 bg-background/80 backdrop-blur rounded-full hover:bg-primary/20 transition-colors"
            onClick={(e: React.MouseEvent<HTMLButtonElement>): void => {
              e.preventDefault()
            }}
          >
            <Heart className="w-5 h-5 text-primary" />
          </button>
        </div>
        <div className="p-4 flex-1 flex flex-col">
          <h3 className="text-xl font-bold mb-1">{animal.name}</h3>
          <p className="text-sm text-muted-foreground mb-3">{animal.breed}</p>
          <div className="flex gap-2 mb-4 flex-wrap">
            <span className="text-xs bg-primary/10 text-primary rounded-full px-2 py-1">{animal.age}y old</span>
            <span className="text-xs bg-secondary/10 text-secondary rounded-full px-2 py-1">{animal.size}</span>
          </div>
          <p className="text-sm text-muted-foreground line-clamp-2 flex-1">{animal.description}</p>
          <div className="mt-4 pt-4 border-t border-border">
            <p className="text-xs text-muted-foreground">{animal.shelterName}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
