"use client"

import type React from "react"

import Link from "next/link"
import type { Animal } from "@/src/lib/sample-data"
import { Icon } from "@iconify/react";
import { use, type ReactNode } from "react"
import { Button, Card } from "@heroui/react";
import { useTranslations } from "next-intl";

interface AnimalCardProps {
  animal: Animal
}

export function AnimalCard({ animal }: AnimalCardProps): ReactNode {
  const tDogBreed = useTranslations('dogBreeds');
  return (
    <Link href={`/animals/${animal.id}`}>
      <Card >
        <div className="relative h-48 overflow-hidden bg-muted">
          <img
            src={animal.image || "/placeholder.svg"}
            alt={animal.name}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
          <Button
            isIconOnly aria-label="Like" className="absolute top-3 right-3 p-2 bg-background/80 backdrop-blur rounded-full hover:bg-primary/20 transition-colors"
            onClick={e => {
              e.preventDefault()
            }}
          >
            <Icon
              aria-label="Heart icon"
              className="text-primary size-6"
              icon="gravity-ui:heart"
              role="img"
            />
          </Button>
        </div>
        <Card.Header>
          <Card.Title>{animal.name}</Card.Title>
          <p className="text-sm text-muted-foreground mb-3">{ tDogBreed(animal.breed) }</p>
          <div className="flex gap-2 mb-4 flex-wrap">
            <span className="text-xs bg-primary/10 text-primary rounded-full px-2 py-1">{animal.age}y old</span>
            <span className="text-xs bg-secondary/10 text-secondary rounded-full px-2 py-1">{animal.size}</span>
          </div>
          <p className="text-sm text-muted-foreground line-clamp-2 flex-1">{animal.description}</p>

        </Card.Header>
        <Card.Footer className="border-t border-border mt-4 pt-4 text-xs text-muted-foreground">
          {animal.shelterName}
        </Card.Footer>
      </Card>
    </Link>
  )
}
