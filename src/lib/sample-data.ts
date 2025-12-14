import { DogBreed, PetEnergyLevel, PetSizes, QuizAnswers } from "@/types"

// Sample animal data with shelter information
export interface Animal {
  id: string
  name: string
  type: "dog"
  breed: DogBreed
  age: number
  gender: "male" | "female"
  size: PetSizes
  energy: PetEnergyLevel
  description: string
  image: string
  shelterId: string
  shelterName: string
  location: string
  adoptionFee: number
  traits: string[]
}

export interface Shelter {
  id: string
  name: string
  location: string
  email: string
  phone: string
}

export const shelters: Shelter[] = [
  {
    id: "shelter-1",
    name: "Happy Paws Shelter",
    location: "Downtown",
    email: "info@happypaws.com",
    phone: "555-0001",
  },
  {
    id: "shelter-2",
    name: "City Animal Care",
    location: "Midtown",
    email: "contact@citycare.com",
    phone: "555-0002",
  },
  {
    id: "shelter-3",
    name: "Rescue Ranch",
    location: "Suburbs",
    email: "hello@rescueranch.com",
    phone: "555-0003",
  },
  {
    id: "shelter-4",
    name: "Hope for Tails",
    location: "East Side",
    email: "support@hopetails.com",
    phone: "555-0004",
  },
]

export const animals: Animal[] = [
  {
    id: "dog-1",
    name: "Max",
    type: "dog",
    breed: "goldenRetriever",
    age: 3,
    gender: "male",
    size: "large",
    energy: "high",
    description:
      "Max ist ein energiegeladener Golden Retriever, der gerne apportiert und neue Freunde findet. Er versteht sich gut mit Familien und anderen Hunden.",
    image: "/pets/golden-retriever.webp",
    shelterId: "shelter-1",
    shelterName: "Happy Paws Shelter",
    location: "Downtown",
    adoptionFee: 150,
    traits: ["Friendly", "Energetic", "Good with kids", "Playful"],
  },
  {
    id: "dog-2",
    name: "Charlie",
    type: "dog",
    breed: "beagle",
    age: 5,
    gender: "male",
    size: "small",
    energy: "medium",
    description:
      "Charlie ist ein lieber Beagle mit einer Vorliebe für Abenteuer. Zu Hause ist er ruhig, liebt aber tägliche Spaziergänge. Ideal für aktive Menschen.",
    image: "/pets/beagle.webp",
    shelterId: "shelter-1",
    shelterName: "Happy Paws Shelter",
    location: "Downtown",
    adoptionFee: 120,
    traits: ["Calm", "Loyal", "Independent", "Adventurous"],
  },
  {
    id: "dog-3",
    name: "Erwin",
    type: "dog",
    breed: "rottweiler",
    age: 5,
    gender: "male",
    size: "small",
    energy: "medium",
    description:
      "Charlie ist ein lieber Beagle mit einer Vorliebe für Abenteuer. Zu Hause ist er ruhig, liebt aber tägliche Spaziergänge. Ideal für aktive Menschen.",
    image: "/pets/rottweiler.webp",
    shelterId: "shelter-1",
    shelterName: "Happy Paws Shelter",
    location: "Downtown",
    adoptionFee: 120,
    traits: ["Calm", "Loyal", "Independent", "Adventurous"],
  },
  {
    id: "dog-4",
    name: "Bella",
    type: "dog",
    breed: "labrador",
    age: 5,
    gender: "male",
    size: "small",
    energy: "medium",
    description:
      "Charlie ist ein lieber Beagle mit einer Vorliebe für Abenteuer. Zu Hause ist er ruhig, liebt aber tägliche Spaziergänge. Ideal für aktive Menschen.",
    image: "/pets/labrador.webp",
    shelterId: "shelter-1",
    shelterName: "Happy Paws Shelter",
    location: "Downtown",
    adoptionFee: 120,
    traits: ["Calm", "Loyal", "Independent", "Adventurous"],
  },
  {
    id: "dog-5",
    name: "Genji",
    type: "dog",
    breed: "akitaInu",
    age: 4,
    gender: "female",
    size: "large",
    energy: "high",
    description:
      "Bella ist eine liebevolle Labrador-Mischlingshündin, die sich in aktiven Familien wohlfühlt. Sie versteht sich hervorragend mit Kindern und liebt Aktivitäten im Freien.",
    image: "/pets/akita-inu.webp",
    shelterId: "shelter-4",
    shelterName: "Hope for Tails",
    location: "East Side",
    adoptionFee: 140,
    traits: ["Family-friendly", "Active", "Loving", "Outgoing"],
  },
  {
    id: "dog-6",
    name: "Shadow",
    type: "dog",
    breed: "dackel",
    age: 4,
    gender: "female",
    size: "large",
    energy: "high",
    description:
      "Bella ist eine liebevolle Labrador-Mischlingshündin, die sich in aktiven Familien wohlfühlt. Sie versteht sich hervorragend mit Kindern und liebt Aktivitäten im Freien.",
    image: "/pets/dackel.webp",
    shelterId: "shelter-4",
    shelterName: "Hope for Tails",
    location: "East Side",
    adoptionFee: 140,
    traits: ["Family-friendly", "Active", "Loving", "Outgoing"],
  },
  {
    id: "dog-8",
    name: "Rocky",
    type: "dog",
    breed: "germanShepherd",
    age: 2,
    gender: "male",
    size: "large",
    energy: "high",
    description:
      "Rocky ist ein intelligenter und treuer Deutscher Schäferhund. Er braucht einen erfahrenen Besitzer, der ihn trainieren und ausreichend bewegen kann.",
    image: "/pets/german-shepard.webp",
    shelterId: "shelter-1",
    shelterName: "Happy Paws Shelter",
    location: "Downtown",
    adoptionFee: 200,
    traits: ["Intelligent", "Loyal", "Energetic", "Protective"],
  },
  {
    id: "dog-9",
    name: "Momo",
    type: "dog",
    breed: "poodle",
    age: 2,
    gender: "male",
    size: "large",
    energy: "high",
    description:
      "Rocky ist ein intelligenter und treuer Deutscher Schäferhund. Er braucht einen erfahrenen Besitzer, der ihn trainieren und ausreichend bewegen kann.",
    image: "/pets/poodle.webp",
    shelterId: "shelter-1",
    shelterName: "Happy Paws Shelter",
    location: "Downtown",
    adoptionFee: 200,
    traits: ["Intelligent", "Loyal", "Energetic", "Protective"],
  },
]


export function getMatchedAnimals(answers: QuizAnswers): {  matchedAnimals: Animal[], matchedBreeds: DogBreed[] } {
  const breedMatchingScore: Record<DogBreed, QuizAnswers> = {
    goldenRetriever: {
      dogExperience: 1,
      householdChildren: 7,
      livingSituation: 5,
      soloAtHome: 2,
      activityLevel: 6,
      educationEffort: 7,
      protectiveInstinct: 2,
      furCare: 4,
      otherPets: 7,
      size: 2,
    },
    akitaInu: {
      dogExperience: 7,
      householdChildren: 4,
      livingSituation: 6,
      soloAtHome: 4,
      activityLevel: 6,
      educationEffort: 2,
      protectiveInstinct: 7,
      furCare: 4,
      otherPets: 2,
      size: 2,
    },
    beagle: {
      dogExperience: 5,
      householdChildren: 6,
      livingSituation: 2,
      soloAtHome: 1,
      activityLevel: 6,
      educationEffort: 4,
      protectiveInstinct: 2,
      furCare: 2,
      otherPets: 5,
      size: 6,
    },
    rottweiler: {
      dogExperience: 7,
      householdChildren: 6,
      livingSituation: 5,
      soloAtHome: 2,
      activityLevel: 6,
      educationEffort: 5,
      protectiveInstinct: 7,
      furCare: 2,
      otherPets: 3,
      size: 3,
    },
    labrador: {
      dogExperience: 1,
      householdChildren: 7,
      livingSituation: 5,
      soloAtHome: 4,
      activityLevel: 6,
      educationEffort: 7,
      protectiveInstinct: 2,
      furCare: 4,
      otherPets: 7,
      size: 3,
    },
    dackel: {
      dogExperience: 5,
      householdChildren: 6,
      livingSituation: 2,
      soloAtHome: 2,
      activityLevel: 4,
      educationEffort: 2,
      protectiveInstinct: 6,
      furCare: 3,
      otherPets: 4,
      size: 5,
    },
    germanShepherd: {
      dogExperience: 5,
      householdChildren: 7,
      livingSituation: 4,
      soloAtHome: 3,
      activityLevel: 7,
      educationEffort: 7,
      protectiveInstinct: 7,
      furCare: 4,
      otherPets: 5,
      size: 4,
    },
    poodle: {
      dogExperience: 1,
      householdChildren: 7,
      livingSituation: 1,
      soloAtHome: 3,
      activityLevel: 5,
      educationEffort: 7,
      protectiveInstinct: 2,
      furCare: 6,
      otherPets: 7,
      size: 3,
    }
  }
  let matchedBreeds: DogBreed[] = []
  const matchedAnimals = animals.filter((animal) => {
    // Simple matching logic
    let score = 0
    Object.entries(breedMatchingScore[animal.breed as DogBreed]).forEach(([key, value]) => {
      const answerValue = answers[key as keyof QuizAnswers]
      if(typeof answerValue !== 'number' || typeof value !== 'number') throw new Error('Invalid answer value')
      answerValue >= value ? score++ : score--
    })
    console.log(`Breed: ${animal.breed}, Score: ${score}`) 
    if(score >= 1){
      matchedBreeds.push(animal.breed as DogBreed)
      return true
    }
  })
  return {
    matchedAnimals,
    matchedBreeds
  }
}
