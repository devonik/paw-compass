"use client"

import { useState } from "react"
import { Header } from "@/src/components/header"
import {
  getMatchedAnimals,
  type QuizAnswers,
  type LivingSpace,
  type TimeAvailable,
  type ActivityLevel,
  type Experience,
  type Preference,
} from "@/src/lib/sample-data"
import { AnimalCard } from "@/src/components/animal-card"
import { ChevronLeft } from "lucide-react"
import type { QuizQuestion } from "@/types"

export default function QuizPage() {
  const [step, setStep] = useState<number>(0)
  const [answers, setAnswers] = useState<Partial<QuizAnswers>>({})
  const [showResults, setShowResults] = useState<boolean>(false)

  const questions: QuizQuestion[] = [
    {
      id: "livingSpace" as const,
      title: "Where do you live?",
      options: [
        { value: "apartment" as LivingSpace, label: "Apartment" },
        { value: "house" as LivingSpace, label: "House with yard" },
      ],
    },
    {
      id: "timeAvailable" as const,
      title: "How much time can you dedicate to a pet daily?",
      options: [
        { value: "low" as TimeAvailable, label: "Less than 1 hour" },
        { value: "medium" as TimeAvailable, label: "1-3 hours" },
        { value: "high" as TimeAvailable, label: "More than 3 hours" },
      ],
    },
    {
      id: "activity" as const,
      title: "What's your activity level?",
      options: [
        { value: "low" as ActivityLevel, label: "Low - I prefer quiet time" },
        { value: "medium" as ActivityLevel, label: "Medium - Regular activities" },
        { value: "high" as ActivityLevel, label: "High - Very active lifestyle" },
      ],
    },
    {
      id: "experience" as const,
      title: "Pet ownership experience?",
      options: [
        { value: "beginner" as Experience, label: "First-time pet owner" },
        { value: "experienced" as Experience, label: "I've had pets before" },
      ],
    },
    {
      id: "preference" as const,
      title: "What personality type appeals to you?",
      options: [
        { value: "affectionate" as Preference, label: "Affectionate & cuddly" },
        { value: "playful" as Preference, label: "Playful & energetic" },
        { value: "independent" as Preference, label: "Independent & low-key" },
      ],
    },
  ]

  const currentQuestion = questions[step]
  const isComplete = Object.keys(answers).length === questions.length

  const handleAnswer = (value: string): void => {
    setAnswers({
      ...answers,
      [currentQuestion.id]: value,
    })
    if (step < questions.length - 1) {
      setStep(step + 1)
    } else {
      setShowResults(true)
    }
  }

  const handlePrevious = (): void => {
    if (step > 0) setStep(step - 1)
  }

  const matchedAnimals = showResults && isComplete ? getMatchedAnimals(answers as QuizAnswers) : []

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="max-w-4xl mx-auto px-4 py-12">
        {!showResults ? (
          <div>
            <div className="mb-12">
              <h1 className="text-4xl font-bold mb-2">Find Your Perfect Pet</h1>
              <p className="text-muted-foreground text-lg">
                Answer a few questions and we'll match you with compatible pets
              </p>
            </div>

            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between mb-4">
                <span className="text-sm font-medium">
                  Question {step + 1} of {questions.length}
                </span>
                <span className="text-sm text-muted-foreground">
                  {Math.round(((step + 1) / questions.length) * 100)}%
                </span>
              </div>
              <div className="w-full bg-border rounded-full h-2">
                <div
                  className="bg-primary h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((step + 1) / questions.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Question Card */}
            <div className="bg-card rounded-2xl p-8 border border-border mb-8">
              <h2 className="text-2xl font-bold mb-8">{currentQuestion.title}</h2>

              <div className="space-y-3 mb-8">
                {currentQuestion.options.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleAnswer(option.value)}
                    className="w-full p-4 border-2 border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-all text-left font-medium"
                  >
                    {option.label}
                  </button>
                ))}
              </div>

              {/* Navigation */}
              <div className="flex justify-between">
                <button
                  onClick={handlePrevious}
                  disabled={step === 0}
                  className="flex items-center gap-2 px-6 py-2 text-muted-foreground hover:text-foreground disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Previous
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-12 text-center">
              <h1 className="text-4xl font-bold mb-4">Your Matches!</h1>
              <p className="text-muted-foreground text-lg">
                Based on your preferences, here are the perfect pets for you:
              </p>
            </div>

            {matchedAnimals.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {matchedAnimals.map((animal) => (
                    <AnimalCard key={animal.id} animal={animal} />
                  ))}
                </div>

                <div className="text-center">
                  <button
                    onClick={() => {
                      setStep(0)
                      setAnswers({})
                      setShowResults(false)
                    }}
                    className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
                  >
                    Take Quiz Again
                  </button>
                </div>
              </>
            ) : (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground mb-6">
                  No perfect matches found yet, but don't worry! Browse all our animals to find your companion.
                </p>
                <a
                  href="/animals"
                  className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium inline-block"
                >
                  Browse All Pets
                </a>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  )
}
