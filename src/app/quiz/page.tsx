"use client"

import { useState } from "react"
import { Header } from "@/src/components/header"
import { getMatchedAnimals} from "@/src/lib/sample-data";
import { AnimalCard } from "@/src/components/animal-card"
import { Icon } from "@iconify/react";
import type { QuizAnswers, QuizQuestion } from "@/types"
import { useTranslations } from "next-intl"
import { Button, Card } from "@heroui/react";

export default function QuizPage() {
  const t = useTranslations('quiz');

  const [step, setStep] = useState<number>(0)
  const [answers, setAnswers] = useState<Partial<QuizAnswers>>({})
  const [showResults, setShowResults] = useState<boolean>(false)

  const numberAnswerOptions = [
    { value: 1, label: "1" },
    { value: 2, label: "2" },
    { value: 3, label: "3" },
    { value: 4, label: "4" },
    { value: 5, label: "5" },
    { value: 6, label: "6" },
    { value: 7, label: "7" },
  ]
  const questions: QuizQuestion[] = [
    {
      id: "dogExperience" as const,
      title: t(`questions.dogExperience`),
      renderAsRow: true,
      options: numberAnswerOptions,
    },
    {
      id: "householdChildren" as const,
      title: t(`questions.householdChildren`),
      renderAsRow: true,
      options: numberAnswerOptions,
    },
    {
      id: "livingSituation" as const,
      title: t(`questions.livingSituation`),
      renderAsRow: true,
      options: numberAnswerOptions,
    },
    {
      id: "soloAtHome" as const,
      title: t(`questions.soloAtHome`),
      renderAsRow: true,
      options: numberAnswerOptions,
    },
    {
      id: "activityLevel" as const,
      title: t(`questions.activityLevel`),
      renderAsRow: true,
      options: numberAnswerOptions,
    },
    {
      id: "educationEffort" as const,
      title: t(`questions.educationEffort`),
      renderAsRow: true,
      options: numberAnswerOptions,
    },
    {
      id: "protectiveInstinct" as const,
      title: t(`questions.protectiveInstinct`),
      renderAsRow: true,
      options: numberAnswerOptions,
    },
    {
      id: "furCare" as const,
      title: t(`questions.furCare`),
      renderAsRow: true,
      options: numberAnswerOptions,
    },
    {
      id: "otherPets" as const,
      title: t(`questions.otherPets`),
      renderAsRow: true,
      options: numberAnswerOptions,
    },
    {
      id: "size" as const,
      title: t(`questions.size`),
      renderAsRow: true,
      options: numberAnswerOptions,
    }
  ]

  const currentQuestion = questions[step]
  const isComplete = Object.keys(answers).length === questions.length

  const handleAnswer = (value: string | number): void => {
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

  const {matchedAnimals, matchedBreeds} = showResults && isComplete ? getMatchedAnimals(answers as QuizAnswers) : {matchedAnimals: [], matchedBreeds: []}

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="max-w-4xl mx-auto px-4 py-12">
        {!showResults ? (
          <div>
            <div className="mb-12">
              <h1 className="text-4xl font-bold mb-2">{ t('title') }</h1>
              <p className="text-muted-foreground text-lg">
                { t('subtitle') }
              </p>
            </div>

            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between mb-4">
                <span className="text-sm font-medium">
                  { t('questionOf', { current: step + 1, total: questions.length }) }
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
            <Card >
              <Card.Header>
                <Card.Title className="mb-6!">{currentQuestion.title}</Card.Title>
                
                  <div className={currentQuestion.renderAsRow ? "flex flex-row gap-4 mb-8" : "flex flex-col gap-4 mb-8"}>
                    {currentQuestion.options.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => handleAnswer(option.value)}
                        className="p-4 border-2 border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-all text-left font-medium cursor-pointer"
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                
              </Card.Header>
                <Card.Footer className="flex justify-between">
                  <Button
                    onClick={handlePrevious}
                    isDisabled={step === 0}
                  >
                    <Icon
                      aria-label="Chevron Left icon"
                      icon="gravity-ui:chevron-left"
                      role="img"
                    />
                    { t('goBackCta') }
                  </Button>
                </Card.Footer>
            </Card>
          </div>
        ) : (
          <div>
            <div className="mb-12 text-center">
              <h1 className="text-4xl font-bold mb-4">Your Matches!</h1>
              <p className="text-muted-foreground text-lg">
                Based on your preferences, here are the perfect pets for you:
              </p>
            </div>
            {matchedAnimals.length > 0 && <p className="text-lg mb-6">Breeds matched: {matchedBreeds.join(', ')}</p>}
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
