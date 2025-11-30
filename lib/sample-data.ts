// Sample animal data with shelter information
export interface Animal {
  id: string
  name: string
  type: "dog" | "cat" | "rabbit" | "bird"
  breed: string
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
    id: "animal-1",
    name: "Max",
    type: "dog",
    breed: "Golden Retriever",
    age: 3,
    gender: "male",
    size: "large",
    energy: "high",
    description:
      "Max is an energetic golden retriever who loves playing fetch and making new friends. He's great with families and other dogs.",
    image: "/golden-retriever-dog-happy.jpg",
    shelterId: "shelter-1",
    shelterName: "Happy Paws Shelter",
    location: "Downtown",
    adoptionFee: 150,
    traits: ["Friendly", "Energetic", "Good with kids", "Playful"],
  },
  {
    id: "animal-2",
    name: "Luna",
    type: "cat",
    breed: "Siamese Mix",
    age: 2,
    gender: "female",
    size: "small",
    energy: "medium",
    description:
      "Luna is a beautiful Siamese mix with striking blue eyes. She's affectionate and loves to cuddle. Perfect for apartment living.",
    image: "/siamese-cat-beautiful.jpg",
    shelterId: "shelter-2",
    shelterName: "City Animal Care",
    location: "Midtown",
    adoptionFee: 100,
    traits: ["Affectionate", "Vocal", "Quiet", "Indoor"],
  },
  {
    id: "animal-3",
    name: "Charlie",
    type: "dog",
    breed: "Beagle",
    age: 5,
    gender: "male",
    size: "small",
    energy: "medium",
    description:
      "Charlie is a sweet beagle with a nose for adventure. He's calm in the house but loves daily walks. Great for active individuals.",
    image: "/beagle-dog-cute.jpg",
    shelterId: "shelter-1",
    shelterName: "Happy Paws Shelter",
    location: "Downtown",
    adoptionFee: 120,
    traits: ["Calm", "Loyal", "Independent", "Adventurous"],
  },
  {
    id: "animal-4",
    name: "Whiskers",
    type: "cat",
    breed: "Tabby",
    age: 1,
    gender: "male",
    size: "small",
    energy: "high",
    description:
      "Whiskers is a playful orange tabby kitten full of energy. He loves interactive toys and climbing. Perfect for someone who wants an engaging pet.",
    image: "/orange-tabby-kitten-playful.jpg",
    shelterId: "shelter-3",
    shelterName: "Rescue Ranch",
    location: "Suburbs",
    adoptionFee: 75,
    traits: ["Playful", "Energetic", "Social", "Curious"],
  },
  {
    id: "animal-5",
    name: "Bella",
    type: "dog",
    breed: "Labrador Mix",
    age: 4,
    gender: "female",
    size: "large",
    energy: "high",
    description:
      "Bella is a loving lab mix who thrives with active families. She's excellent with children and loves outdoor activities.",
    image: "/labrador-dog-family-friendly.jpg",
    shelterId: "shelter-4",
    shelterName: "Hope for Tails",
    location: "East Side",
    adoptionFee: 140,
    traits: ["Family-friendly", "Active", "Loving", "Outgoing"],
  },
  {
    id: "animal-6",
    name: "Shadow",
    type: "cat",
    breed: "Black Cat",
    age: 3,
    gender: "male",
    size: "small",
    energy: "low",
    description:
      "Shadow is a calm and independent black cat. He enjoys quiet environments and loves to sunbathe. Perfect for seniors or quiet homes.",
    image: "/black-cat-calm.jpg",
    shelterId: "shelter-2",
    shelterName: "City Animal Care",
    location: "Midtown",
    adoptionFee: 85,
    traits: ["Calm", "Independent", "Quiet", "Low maintenance"],
  },
  {
    id: "animal-7",
    name: "Rocky",
    type: "dog",
    breed: "German Shepherd",
    age: 2,
    gender: "male",
    size: "large",
    energy: "high",
    description:
      "Rocky is an intelligent and loyal German Shepherd. He needs an experienced owner who can provide training and plenty of exercise.",
    image: "/german-shepherd-dog-loyal.jpg",
    shelterId: "shelter-1",
    shelterName: "Happy Paws Shelter",
    location: "Downtown",
    adoptionFee: 200,
    traits: ["Intelligent", "Loyal", "Energetic", "Protective"],
  },
  {
    id: "animal-8",
    name: "Mittens",
    type: "cat",
    breed: "Calico",
    age: 6,
    gender: "female",
    size: "small",
    energy: "low",
    description:
      "Mittens is a sweet senior calico looking for a quiet retirement home. She's affectionate and loves gentle pets.",
    image: "/calico-cat-senior.jpg",
    shelterId: "shelter-3",
    shelterName: "Rescue Ranch",
    location: "Suburbs",
    adoptionFee: 50,
    traits: ["Senior", "Gentle", "Affectionate", "Calm"],
  },
]

// Quiz matching logic
export type LivingSpace = "apartment" | "house"
export type TimeAvailable = "low" | "medium" | "high"
export type ActivityLevel = "low" | "medium" | "high"
export type Experience = "beginner" | "experienced"
export type Preference = "independent" | "affectionate" | "playful"

export interface QuizAnswers {
  livingSpace: LivingSpace
  timeAvailable: TimeAvailable
  activity: ActivityLevel
  experience: Experience
  preference: Preference
}

export function getMatchedAnimals(answers: QuizAnswers): Animal[] {
  return animals.filter((animal) => {
    // Simple matching logic
    let score = 0

    // Check living space compatibility
    if (answers.livingSpace === "apartment" && animal.size !== "large") score++
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
    if (answers.preference === "independent" && animal.traits.includes("Independent")) score++

    return score >= 3
  })
}
