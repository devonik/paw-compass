// Animal filter types
export type AnimalType = "dog" | "cat" | "rabbit" | "bird"
export type AnimalSize = "small" | "medium" | "large"
export type EnergyLevel = "low" | "medium" | "high"

// Filter value types (union of all possible filter values)
export type FilterValue = "all" | AnimalType | AnimalSize | EnergyLevel

// Quiz answer option types
export type LivingSpace = "apartment" | "house"
export type TimeAvailable = "low" | "medium" | "high"
export type ActivityLevel = "low" | "medium" | "high"
export type Experience = "beginner" | "experienced"
export type Preference = "independent" | "affectionate" | "playful"

// Route parameter types
export interface RouteParams {
  id: string
}

// Select/dropdown option types
export interface SelectOption<T = string> {
  value: T
  label: string
}

// Quiz question type
export interface QuizQuestion {
  id: "livingSpace" | "timeAvailable" | "activity" | "experience" | "preference"
  title: string
  options: SelectOption<string>[]
}
