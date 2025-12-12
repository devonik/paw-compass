"use client"

import type React from "react"

import { useState, useMemo } from "react"
import { animals } from "@/src/lib/sample-data"
import { AnimalCard } from "@/src/components/animal-card"
import { Header } from "@/src/components/header"
import { Icon } from "@iconify/react";
import { type PetEnergyLevel, type DogBreed, DogBreedArray, type PetSizes, PetSizesArray, PetEnergyLevelArray } from "@/types"
import { Label, ListBox, Select, Input } from "@heroui/react";
import { useTranslations } from "next-intl"

export default function AnimalsPage() {
  const t = useTranslations("browse")
  const tDogBreed = useTranslations('dogBreeds');
  const tSizes = useTranslations('sizes');
  const tEnergies = useTranslations('energyLevels');

  const [searchTerm, setSearchTerm] = useState<string>("")
  const [filterBreed, setFilteBreed] = useState<"all" | DogBreed>("all")
  const [filterSize, setFilterSize] = useState<"all" | PetSizes>("all")
  const [filterEnergy, setFilterEnergy] = useState<"all" | PetEnergyLevel>("all")

  const filteredAnimals = useMemo(() => {
    return animals.filter((animal) => {
      const matchesSearch =
        animal.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tDogBreed(animal.breed).toLowerCase().includes(searchTerm.toLowerCase())
      const matchesType = filterBreed === "all" || animal.breed === filterBreed
      const matchesSize = filterSize === "all" || animal.size === filterSize
      const matchesEnergy = filterEnergy === "all" || animal.energy === filterEnergy

      return matchesSearch && matchesType && matchesSize && matchesEnergy
    })
  }, [searchTerm, filterBreed, filterSize, filterEnergy])

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">{t('title')} </h1>
          <p className="text-muted-foreground text-lg">{t('subtitle')}</p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative">
            <Icon
              aria-label="Search icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground"
              icon="gravity-ui:magnifier"
              role="img"
            />
            <Input
              placeholder={t('searchPlaceholder')}
              className="w-full pl-12 pr-4 py-3"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-wrap gap-4">
          <Select className="grow"
            value={filterBreed}
            onChange={(value) => setFilteBreed(value as "all" | DogBreed)}>
            <Label>{t('filters.breed')} </Label>
            <Select.Trigger>
              <Select.Value />
              <Select.Indicator />
            </Select.Trigger>
            <Select.Popover>
              <ListBox>
                <ListBox.Item key='all' id='all' textValue='all'>
                  {t('filters.allBreeds')}
                  <ListBox.ItemIndicator />
                </ListBox.Item>
                {DogBreedArray.map((breed) => (
                  <ListBox.Item key={breed} id={breed} textValue={breed}>
                    {tDogBreed(breed)}
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                ))}
              </ListBox>
            </Select.Popover>
          </Select>
          <Select className="grow"
            value={filterSize}
            onChange={(value) => setFilterSize(value as "all" | PetSizes)}>
            <Label>{t('filters.size')} </Label>
            <Select.Trigger>
              <Select.Value />
              <Select.Indicator />
            </Select.Trigger>
            <Select.Popover>
              <ListBox>
                <ListBox.Item key='all' id='all' textValue='all'>
                  {t('filters.allSizes')}
                  <ListBox.ItemIndicator />
                </ListBox.Item>
                {PetSizesArray.map((size) => (
                  <ListBox.Item key={size} id={size} textValue={size}>
                    {tSizes(size)}
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                ))}
              </ListBox>
            </Select.Popover>
          </Select>

          <Select className="grow"
            value={filterEnergy}
            onChange={(value) => setFilterEnergy(value as "all" | PetEnergyLevel)}>
            <Label>{t('filters.energy')} </Label>
            <Select.Trigger>
              <Select.Value />
              <Select.Indicator />
            </Select.Trigger>
            <Select.Popover>
              <ListBox>
                <ListBox.Item key='all' id='all' textValue='all'>
                  {t('filters.allEnergyLevels')}
                  <ListBox.ItemIndicator />
                </ListBox.Item>
                {PetEnergyLevelArray.map((energy) => (
                  <ListBox.Item key={energy} id={energy} textValue={energy}>
                    {tEnergies(energy)}
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                ))}
              </ListBox>
            </Select.Popover>
          </Select>
        </div>
        <div className="mb-8" >
          <div className="text-muted-foreground">
            {t('resultsCount', { count: filteredAnimals.length })}
          </div>
        </div>

        {/* Animals Grid */}
        {filteredAnimals.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAnimals.map((animal) => (
              <AnimalCard key={animal.id} animal={animal} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">No animals found matching your filters.</p>
          </div>
        )}
      </main>
    </div>
  )
}
