"use client"

import type React from "react"

import { useState, useMemo } from "react"
import { animals } from "@/lib/sample-data"
import { AnimalCard } from "@/components/animal-card"
import { Header } from "@/components/header"
import { Search, Sliders } from "lucide-react"
import type { AnimalType, AnimalSize, EnergyLevel } from "@/types"

export default function AnimalsPage() {
  const [searchTerm, setSearchTerm] = useState<string>("")
  const [filterType, setFilterType] = useState<"all" | AnimalType>("all")
  const [filterSize, setFilterSize] = useState<"all" | AnimalSize>("all")
  const [filterEnergy, setFilterEnergy] = useState<"all" | EnergyLevel>("all")

  const filteredAnimals = useMemo(() => {
    return animals.filter((animal) => {
      const matchesSearch =
        animal.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        animal.breed.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesType = filterType === "all" || animal.type === filterType
      const matchesSize = filterSize === "all" || animal.size === filterSize
      const matchesEnergy = filterEnergy === "all" || animal.energy === filterEnergy

      return matchesSearch && matchesType && matchesSize && matchesEnergy
    })
  }, [searchTerm, filterType, filterSize, filterEnergy])

  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const value = e.target.value
    setFilterType((value === "all" ? "all" : value) as "all" | AnimalType)
  }

  const handleSizeChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const value = e.target.value
    setFilterSize((value === "all" ? "all" : value) as "all" | AnimalSize)
  }

  const handleEnergyChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const value = e.target.value
    setFilterEnergy((value === "all" ? "all" : value) as "all" | EnergyLevel)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Browse Our Pets</h1>
          <p className="text-muted-foreground text-lg">Find your perfect companion from our available animals</p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search by name or breed..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg bg-card border border-border focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        {/* Filters */}
        <div className="mb-8 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Type</label>
            <select
              value={filterType}
              onChange={handleTypeChange}
              className="w-full px-4 py-2 rounded-lg bg-card border border-border focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="all">All Animals</option>
              <option value="dog">Dogs</option>
              <option value="cat">Cats</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Size</label>
            <select
              value={filterSize}
              onChange={handleSizeChange}
              className="w-full px-4 py-2 rounded-lg bg-card border border-border focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="all">All Sizes</option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Energy Level</label>
            <select
              value={filterEnergy}
              onChange={handleEnergyChange}
              className="w-full px-4 py-2 rounded-lg bg-card border border-border focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="all">All Levels</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Results</label>
            <div className="flex items-center justify-between px-4 py-2 rounded-lg bg-card border border-border">
              <span className="font-medium">{filteredAnimals.length}</span>
              <Sliders className="w-4 h-4 text-muted-foreground" />
            </div>
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
