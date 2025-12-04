"use client"

import { Header } from "@/src/components/header"
import Link from "next/link"
import { useTranslations } from "next-intl"
import { Avatar, Button, Card } from "@heroui/react"

export default function AboutPage() {
  const t = useTranslations("about")

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">{t("pageTitle")}</h1>
          <p className="text-muted-foreground text-lg">{t("pageSubtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-3">{t("missionTitle")}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {t("missionText")}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3">{t("whyTitle")}</h2>
              <ul className="space-y-3 text-muted-foreground">
                {t.raw("whyItems").map((item: string) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Card variant="quaternary" className="p-8 h-fit">
            <Card.Header>
              <Card.Title>{t('quickFactsTitle')}</Card.Title>
              <Card.Description>
                <div className="space-y-6">
                  <div>
                    <p className="text-4xl font-bold text-primary">8+</p>
                    <p className="text-muted-foreground">{t("partnerShelters")}</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-accent">100+</p>
                    <p className="text-muted-foreground">{t("animalsAvailable")}</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-secondary">2024</p>
                    <p className="text-muted-foreground">{t("founded")}</p>
                  </div>
                </div>
              </Card.Description>
            </Card.Header>
          </Card>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">{t("teamTitle")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center">
                <Card.Header>
                  <Avatar className="m-auto mb-3 size-28">
                    <Avatar.Image
                      className="object-cover"
                      alt="Max avatar"
                      src="/max.jpg"
                    />
                    <Avatar.Fallback>M</Avatar.Fallback>
                  </Avatar>
                  <Card.Title>
                    { t('teamMembers.max.title') }
                  </Card.Title>
                  <Card.Description>
                    { t('teamMembers.max.subtitle') }
                  </Card.Description>
                </Card.Header>
              </Card>
            <Card className="text-center">
                <Card.Header>
                  <Avatar className="m-auto mb-3 size-28">
                    <Avatar.Image
                      className="object-cover"
                      alt="Flo avatar"
                      src="/flo.jpg"
                    />
                    <Avatar.Fallback>F</Avatar.Fallback>
                  </Avatar>
                  <Card.Title>
                    { t('teamMembers.flo.title') }
                  </Card.Title>
                  <Card.Description>
                    { t('teamMembers.flo.subtitle') }
                  </Card.Description>
                </Card.Header>
              </Card>
              <Card className="text-center">
                <Card.Header>
                  <Avatar className="m-auto mb-3 size-28">
                    <Avatar.Image
                      className="object-cover"
                      alt="Nik avatar"
                      src="/nik.jpg"
                    />
                    <Avatar.Fallback>N</Avatar.Fallback>
                  </Avatar>
                  <Card.Title>
                    { t('teamMembers.nik.title') }
                  </Card.Title>
                  <Card.Description>
                    { t('teamMembers.nik.subtitle') }
                  </Card.Description>
                </Card.Header>
              </Card>
          </div>
        </div>

        {/* CTA Section */}
        <Card variant="tertiary" className="p-12! text-center">
          <Card.Header className="gap-4">
            <Card.Title className="text-3xl! md:text-4xl! font-bold mb-8">{t('ctaTitle')}</Card.Title>
          </Card.Header>
          <Card.Footer className="mt-4 flex flex-col gap-2">
            <Link href="/animals">
              <Button size="lg">
                {t('ctaButton')}
              </Button>
            </Link>
          </Card.Footer>
        </Card>
      </main>
    </div>
  )
}
