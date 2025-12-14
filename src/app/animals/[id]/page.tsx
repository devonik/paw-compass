"use client"

import { animals, shelters } from "@/src/lib/sample-data"
import { Header } from "@/src/components/header"
import { useParams } from "next/navigation"
import Link from "next/link"
import { Icon } from "@iconify/react"
import { useTranslations } from "next-intl"
import { Button, Card } from "@heroui/react"

export default function AnimalDetailPage() {
  const tDogBreed = useTranslations('dogBreeds');
  const tSizes = useTranslations('sizes');
  const tEnergies = useTranslations('energyLevels');
  const tCommon = useTranslations('common');
  const t = useTranslations('petDetail');

  const params = useParams<{
    id: string
  }>()
  const id = params.id
  const animal = animals.find((a) => a.id === id)
  const shelter = animal ? shelters.find((s) => s.id === animal.shelterId) : null

  if (!animal || !shelter) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="max-w-4xl mx-auto px-4 py-12">
          <p className="text-lg text-muted-foreground">{t('notFound')}</p>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="max-w-4xl mx-auto px-4 py-12">
        <Link href="/animals" className="text-primary hover:text-primary/80 mb-6 inline-block">
          ← {t('backToBrowse')}
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Image */}
          <div className="md:col-span-2">
            <div className="relative rounded-2xl overflow-hidden bg-muted h-96 md:h-full min-h-96">
              <img src={animal.image || "/placeholder.svg"} alt={animal.name} className="w-full h-full object-cover" />
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
          </div>

          {/* Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold mb-2">{animal.name}</h1>
              <p className="text-muted-foreground text-lg">{tDogBreed(animal.breed)}</p>
            </div>

            <Card className="p-8 h-fit">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">{tCommon('age')}</p>
                  <p className="font-semibold">{t('yearsOld', { age: animal.age })}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">{tCommon('gender')}</p>
                  <p className="font-semibold capitalize">{tCommon(animal.gender)}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">{tCommon('size')}</p>
                  <p className="font-semibold capitalize">{tSizes(animal.size)}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">{tCommon('energy')}</p>
                  <p className="font-semibold capitalize">{tEnergies(animal.energy)}</p>
                </div>
              </div>
            </Card>
            <Card variant="quaternary" className="p-8">
              <Card.Header className="font-bold text-primary">
                {t('adoptionFee')}
              </Card.Header>
              <Card.Description className="text-3xl font-bold">€{animal.adoptionFee}</Card.Description>
            </Card>

            <div>
              <p className="text-sm font-semibold mb-3">{t('personalityTreats')}</p>
              <div className="flex flex-wrap gap-2">
                {animal.traits.map((trait) => (
                  <span key={trait} className="bg-primary/10 text-primary text-sm rounded-full px-3 py-1">
                    {trait}
                  </span>
                ))}
              </div>
            </div>

            <Button size="lg">
              {t('contactShelter')}
            </Button>
          </div>
        </div>

        {/* Description */}
        <div className="mt-12 space-y-4">
          <h2 className="text-2xl font-bold">{t('aboutTitle', { name: animal.name })}</h2>
          <p className="text-muted-foreground leading-relaxed text-lg">{animal.description}</p>
        </div>

        {/* Shelter Info */}
        <Card className="mt-12 p-8">
          <Card.Header className="text-2xl font-bold  mb-6">
            {t('shelterInfo')}
          </Card.Header>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">{shelter.name}</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Icon
                  aria-label="Map Pin icon"
                  className="text-primary size-5"
                  icon="gravity-ui:map-pin"
                  role="img"
                />
                <span>{shelter.location}</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon
                  aria-label="Email icon"
                  className="text-primary size-5"
                  icon="gravity-ui:envelope"
                  role="img"
                />
                <a href={`mailto:${shelter.email}`} className="text-primary hover:underline">
                  {shelter.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Icon
                  aria-label="Phone icon"
                  className="text-primary size-5"
                  icon="gravity-ui:handset"
                  role="img"
                />
                <a href={`tel:${shelter.phone}`} className="text-primary hover:underline">
                  {shelter.phone}
                </a>
              </div>
            </div>

            <Button size="lg" className="mt-6 w-full py-3 ">
              {t('contactShelter')}
            </Button>
          </div>
        </Card>
      </main>
    </div>
  )
}
