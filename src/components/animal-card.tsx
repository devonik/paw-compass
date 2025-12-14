"use client"

import type React from "react"

import Link from "next/link"
import type { Animal } from "@/src/lib/sample-data"
import { Icon } from "@iconify/react";
import { use, type ReactNode } from "react"
import { Button, Card, Chip } from "@heroui/react";
import { useTranslations } from "next-intl";

interface AnimalCardProps {
  animal: Animal
}

export function AnimalCard({ animal }: AnimalCardProps): ReactNode {
  const tDogBreed = useTranslations('dogBreeds');
  const tSizes = useTranslations('sizes');
  const tEnergies = useTranslations('energyLevels');
  const t = useTranslations('petDetail');
  return (
    <Link href={`/animals/${animal.id}`}>
      <Card className="p-0!">
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
        <div className="p-8">
          <Card.Header>
            <Card.Title>{animal.name}</Card.Title>
            <p className="text-sm text-muted-foreground mb-3">{tDogBreed(animal.breed)}</p>
            <div className="flex gap-2 mb-4 flex-wrap">
              <Chip color='accent' variant='soft'>
                <Icon icon="material-symbols:pet-supplies-outline" />
                {t('yearsOld', { age: animal.age })}
              </Chip>
              <Chip color='accent' variant='soft'>
                <Icon icon="material-symbols:flash-on-outline" />
                {tEnergies(animal.energy)}
              </Chip>
              <Chip color='accent' variant='soft'>
                <Icon icon="material-symbols:measuring-tape-outline" />
                {tSizes(animal.size)}
              </Chip>
            </div>
            <p className="text-sm text-muted-foreground line-clamp-2 flex-1">{animal.description}</p>

          </Card.Header>
          <Card.Footer className="border-t border-border text-xs text-muted-foreground mt-4 pt-4">
            {animal.shelterName}
          </Card.Footer>
        </div>

      </Card>
    </Link>
  )
}
