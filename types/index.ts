// Animal filter types
export const PetSizesArray = ["small" , "medium" , "large"] as const;
export type PetSizes = typeof PetSizesArray[number];
export const DogBreedArray = ['goldenRetriever' , 'akitaInu' , 'beagle' , 'rottweiler' , 'labrador' , 'dackel' , 'germanShepherd' , 'poodle'] as const;
export type DogBreed = typeof DogBreedArray[number];
export const PetEnergyLevelArray = ["low" , "medium" , "high"] as const;
export type PetEnergyLevel = typeof PetEnergyLevelArray[number];

// Filter value types (union of all possible filter values)
export type FilterValue = "all" | DogBreed | PetSizes | PetEnergyLevel

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


