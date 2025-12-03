"use client"

import Link from "next/link"
import { Header } from "../components/header";
import { useTranslations } from "next-intl";
import { Footer } from "../components/footer";
import { Button } from '@heroui/react';
import { Card } from "@heroui/react";
import { Icon } from "@iconify/react";

export default function HomePage() {
  const t = useTranslations('home');
  return (
    <div className="min-h-screen bg-linear-to-br from-background via-background to-[#BE9681]/40">
      {/* Navigation */}
      <Header />

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-balance">
             { t.rich('hero.title', {
              highlight: (chunks) => <span className='text-primary'>{chunks}</span>
             }) }
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              { t('hero.text') }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/animals">
                <Button size="lg">
                  { t('hero.ctaBrowsePets') }
                </Button>
              </Link>
              <Link href="/quiz">
                <Button variant="secondary" size="lg">
                  { t('hero.ctaQuiz') }
                </Button>
              </Link>
            </div>
          </div>

          {/* Hero Image Placeholder */}
          <div className="relative h-96 md:h-full">
            <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-accent-soft-hover rounded-3xl" />
            <img
              src="/hero.png"
              alt="Happy pets from shelters"
              className="w-full h-full object-cover rounded-3xl relative z-10"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">{ t('features.title') }</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card variant="quaternary">
            <Icon
              aria-label="Search icon"
              className="text-primary size-6"
              icon="gravity-ui:magnifier"
              role="img"
            />
            <Card.Header>
              <Card.Title>{ t('features.feature1Title') }</Card.Title>
              <Card.Description>
                { t('features.feature1Text') }
              </Card.Description>
            </Card.Header>
          </Card>
          <Card variant="quaternary">
            <Icon
              aria-label="Thunderbolt icon"
              className="text-primary size-6"
              icon="gravity-ui:thunderbolt"
              role="img"
            />
            <Card.Header>
              <Card.Title>{ t('features.feature2Title') }</Card.Title>
              <Card.Description>
                { t('features.feature2Text') }
              </Card.Description>
            </Card.Header>
          </Card>
          <Card variant="quaternary">
            <Icon
              aria-label="Heart icon"
              className="text-primary size-6"
              icon="gravity-ui:heart"
              role="img"
            />
            <Card.Header>
              <Card.Title>{ t('features.feature3Title') }</Card.Title>
              <Card.Description>
                { t('features.feature3Text') }
              </Card.Description>
            </Card.Header>
          </Card>
        </div>
      </section>

      {/* Partner Shelters Section */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">{ t('partnerShelters.title') }</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          { t('partnerShelters.text') }
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            "Happy Paws Shelter",
            "City Animal Care",
            "Rescue Ranch",
            "Hope for Tails",
            "Furry Friends",
            "Second Chance",
            "Love & Paws",
            "Safe Haven",
          ].map((shelter) => (
            <Card key={shelter}>
            <img
              alt="Indie Hackers community"
              className="pointer-events-none aspect-square select-none rounded-2xl object-cover"
              loading="lazy"
              src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/demo1.jpg"
            />
            <Card.Header>
              <Card.Description>
                {shelter}
              </Card.Description>
            </Card.Header>
          </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 py-20">
        <Card variant="tertiary" className="p-12 text-center">
            <Card.Header className="gap-4">
              <Card.Title className="text-3xl! md:text-4xl! font-bold mb-8">{ t('cta.title') }</Card.Title>
              <Card.Description className="text-lg">
                { t('cta.text') }
              </Card.Description>
            </Card.Header>
            <Card.Footer className="mt-4 flex flex-col gap-2">
              <Link href="/animals">
              <Button size="lg">
                { t('cta.ctaBrowseNow') }
              </Button>
              </Link>
            </Card.Footer>
          </Card>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
