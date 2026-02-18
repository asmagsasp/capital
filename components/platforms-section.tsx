import {
  BarChart3,
  Coins,
  Globe,
  Layers,
  LineChart,
  Wallet,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { url } from "inspector"

const platforms = [
  {
    name: "9Layer",
    description:
      "Invista 50 reais e tenha um retorno de 105 reais ao final de 15 dias",
    icon: Globe,
    returnRange: "Retorno de 110% de lucro com taxa de administração de saque de 10%",
    risk: "Altissimo",
    url:"https://multi-9layer.capital/register?ref=L9-ASSCY0"
  },
  {
    name: "Red Bull Racing",
    description:
      "Invista 65 reais e tenha um retorno de 162,50 ao final de 50 dias",
    icon: Coins,
    returnRange: "Retorno de 150% de lucro com taxa de administração de saque de 5%",
    risk: "Altissimo",
    url:"https://rb-bull444.com/auth/register.php?ref=RLD5WGH0",
  },
  {
    name: "Brindaroli",
    description:
      "Invista 10 reais e tenha um retorno de 20,01 reais no final de 30 dias",
    icon: BarChart3,
    returnRange: "Retorno de 100% de lucro com taxa de administração de saque de 10%",
    risk: "Altissimo",
    url:"https://sistema.brindarolli.com.br/register?ref=9T35HJJO"
  },
  {
    name: "Origem IA",
    description:
      "Invista 45 reais e tenha um retorno de 60 reais ao final de 2 dias.",
    icon: LineChart,
    returnRange: "Retorno de 33% com taxa de administração de 10%",
    risk: "Altíssimo",
    url:"https://www.origemias.com/register.html?code=584157"
  },
  {
    name: "Atlas Energy",
    description:
      "Invista 80 reais e tenha um retorno de 168 reais no final de 30 dias.",
    icon: Layers,
    returnRange: "Retorno de 110% com taxa de administração de saque 10% ",
    risk: "Altissimo",
    url:"https://atlasenergy.site/register?sponsor=asmag"
  },
]

export function PlatformsSection() {
  return (
    <section
      id="plataformas"
      className="border-t border-border bg-card px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="text-sm font-medium uppercase tracking-widest text-primary">
            Plataformas
          </span>
          <h2 className="mt-4 text-balance font-serif text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Diversifique em multiplas plataformas
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Acesso a diversas classes de ativos e mercados para maximizar
            oportunidades de ganho.
          </p>
          <br></br>
        <div className="hidden md:block">
          <Button asChild>
            <a href="https://wa.me/5519988671478?text=Olá%20gostaria%20de%20mais%20informações">Chame no WhatsApp</a>
          </Button>
        </div>
          
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {platforms.map((platform) => {
            const Icon = platform.icon
            return (
              <div
                key={platform.name}
                className="group rounded-2xl border border-border bg-background p-6 transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="text-lg font-bold text-foreground">
                  {platform.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {platform.description}
                </p>

                <div className="mt-4 flex items-center gap-3">
                  <div className="rounded-md bg-primary/10 px-2 py-1">
                    <span className="text-xs font-semibold text-primary">
                      {platform.returnRange}
                    </span>
                  </div>

                  <div className="rounded-md bg-destructive/10 px-2 py-1">
                    <span className="text-xs font-semibold text-destructive">
                      {platform.risk}
                    </span>
                  </div>

                </div>
                <br>
                </br>
                <div className="md:block">
                  <Button asChild>
                    <a href={platform.url}>Cadastre aqui</a>
                  </Button>
                </div>
                
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
