// Animal filter types
export type AnimalType = "dog" | "cat" | "rabbit" | "bird"
export type AnimalSize = "small" | "medium" | "large"
export type DogBreed = 'goldenRetriever' | 'akitaInu' | 'beagle' | 'rottweiler' | 'labrador' | 'dackel' | 'germanShepherd' | 'poodle'
export type EnergyLevel = "low" | "medium" | "high"

// Filter value types (union of all possible filter values)
export type FilterValue = "all" | AnimalType | AnimalSize | EnergyLevel

export type TimeAvailable = "low" | "medium" | "high"
export type ActivityLevel = "low" | "medium" | "high"
export type Experience = "beginner" | "experienced"
export type Preference = "independent" | "affectionate" | "playful"

// Select/dropdown option types
export interface SelectOption<T = string> {
  value: T
  label: string
}

type QuizAnswerId = 'dogExperience' | 'householdChildren' | 'livingSituation' | 'soloAtHome' | 'activityLevel' | 'educationEffort' | 'protectiveInstinct' | 'furCare' | 'otherPets' | 'size'
export type QuizAnswers = Record<QuizAnswerId, number | string>

// Quiz question type
export interface QuizQuestion {
  id: QuizAnswerId
  title: string
  options: SelectOption<string | number>[]
  renderAsRow?: boolean
}


