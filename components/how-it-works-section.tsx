import { UserPlus, Settings, TrendingUp, Banknote } from "lucide-react"

const steps = [
  {
    step: "01",
    icon: Settings,
    title: "Escolha sua Plataforma",
    description:
      "Selecione a plataforma que melhor se adequa ao seu perfil de risco e capital disponivel.",
  },
  {
    step: "02",
    icon: UserPlus,
    title: "Cadastre-se",
    description:
      "Crie sua conta e preencha seu perfil de investidor. Processo rapido e seguro.",
  },
  {
    step: "03",
    icon: TrendingUp,
    title: "Acompanhe seus Ganhos",
    description:
      "Monitore o desempenho dos seus investimentos em tempo real no App da plataforma.",
  },
  {
    step: "04",
    icon: Banknote,
    title: "Retire seus Lucros",
    description:
      "Solicite a retirada dos seus rendimentos conforme o ciclo do seu plano.",
  },
]

export function HowItWorksSection() {
  return (
    <section id="como-funciona" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="text-sm font-medium uppercase tracking-widest text-primary">
            Passo a Passo
          </span>
          <h2 className="mt-4 text-balance font-serif text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Como funciona
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Um processo simples e direto para comecar a investir e potencializar
            seus ganhos.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={step.step} className="relative flex flex-col items-center text-center">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-1/2 top-8 hidden h-px w-full bg-border lg:block" />
                )}

                <div className="relative z-10 mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary">
                  <Icon className="h-7 w-7 text-primary" />
                </div>

                <span className="mb-2 text-xs font-bold uppercase tracking-widest text-primary">
                  {step.step}
                </span>

                <h3 className="text-lg font-bold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
