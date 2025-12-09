import { DogBreed, QuizAnswers } from "@/types"

// Sample animal data with shelter information
export interface Animal {
  id: string
  name: string
  type: "dog"
  breed: string // DogBreed
  age: number
  gender: "male" | "female"
  size: "small" | "medium" | "large"
  energy: "low" | "medium" | "high"
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
    breed: "Golden Retriever",
    age: 3,
    gender: "male",
    size: "large",
    energy: "high",
    description:
      "Max ist ein energiegeladener Golden Retriever, der gerne apportiert und neue Freunde findet. Er versteht sich gut mit Familien und anderen Hunden.",
    image: "/golden-retriever-dog-happy.jpg",
    shelterId: "shelter-1",
    shelterName: "Happy Paws Shelter",
    location: "Downtown",
    adoptionFee: 150,
    traits: ["Friendly", "Energetic", "Good with kids", "Playful"],
  },
  {
    id: "dog-3",
    name: "Charlie",
    type: "dog",
    breed: "Beagle",
    age: 5,
    gender: "male",
    size: "small",
    energy: "medium",
    description:
      "Charlie ist ein lieber Beagle mit einer Vorliebe für Abenteuer. Zu Hause ist er ruhig, liebt aber tägliche Spaziergänge. Ideal für aktive Menschen.",
    image: "/beagle-dog-cute.jpg",
    shelterId: "shelter-1",
    shelterName: "Happy Paws Shelter",
    location: "Downtown",
    adoptionFee: 120,
    traits: ["Calm", "Loyal", "Independent", "Adventurous"],
  },
  {
    id: "dog-5",
    name: "Bella",
    type: "dog",
    breed: "Labrador Mix",
    age: 4,
    gender: "female",
    size: "large",
    energy: "high",
    description:
      "Bella ist eine liebevolle Labrador-Mischlingshündin, die sich in aktiven Familien wohlfühlt. Sie versteht sich hervorragend mit Kindern und liebt Aktivitäten im Freien.",
    image: "/labrador-dog-family-friendly.jpg",
    shelterId: "shelter-4",
    shelterName: "Hope for Tails",
    location: "East Side",
    adoptionFee: 140,
    traits: ["Family-friendly", "Active", "Loving", "Outgoing"],
  },
  {
    id: "dog-7",
    name: "Rocky",
    type: "dog",
    breed: "German Shepherd",
    age: 2,
    gender: "male",
    size: "large",
    energy: "high",
    description:
      "Rocky ist ein intelligenter und treuer Deutscher Schäferhund. Er braucht einen erfahrenen Besitzer, der ihn trainieren und ausreichend bewegen kann.",
    image: "/german-shepherd-dog-loyal.jpg",
    shelterId: "shelter-1",
    shelterName: "Happy Paws Shelter",
    location: "Downtown",
    adoptionFee: 200,
    traits: ["Intelligent", "Loyal", "Energetic", "Protective"],
  },
]

export function getMatchedAnimals(answers: QuizAnswers): Animal[] {
  return animals.filter((animal) => {
    // Simple matching logic
    let score = 0

    // Check living space compatibility
    /*if (answers.livingSpace === "apartment" && animal.size !== "large") score++
    if (answers.livingSpace === "house") score++

    // Check energy compatibility
    if (answers.activity === "high" && animal.energy === "high") score += 2
    if (answers.activity === "medium" && animal.energy === "medium") score += 2
    if (answers.activity === "low" && animal.energy === "low") score += 2

    // Check experience compatibility
    if (answers.experience === "beginner" && !animal.traits.includes("Protective")) score++
    if (answers.experience === "experienced") score++

    // Check preference compatibility
    if (answers.preference === "affectionate" && animal.traits.includes("Affectionate")) score += 2
    if (answers.preference === "playful" && animal.traits.includes("Playful")) score += 2
    if (answers.preference === "independent" && animal.traits.includes("Independent")) score++*/

    return score >= 3
  })
}
