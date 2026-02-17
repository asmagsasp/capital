import { AlertTriangle, ShieldAlert, CircleAlert, Info } from "lucide-react"

const warnings = [
  {
    icon: AlertTriangle,
    title: "Perda Total do Capital",
    description:
      "Investimentos de alto risco podem resultar na perda total do capital investido. Nunca invista mais do que pode perder.",
  },
  {
    icon: ShieldAlert,
    title: "Volatilidade Extrema",
    description:
      "Os mercados nos quais operamos sao extremamente volateis. Os valores podem oscilar drasticamente em minutos.",
  },
  {
    icon: CircleAlert,
    title: "Retornos Nao Garantidos",
    description:
      "Os percentuais de retorno apresentados sao estimativas baseadas em desempenho passado. Resultados futuros nao sao garantidos.",
  },
  {
    icon: Info,
    title: "Invista com Consciencia",
    description:
      "Recomendamos fortemente que voce consulte um assessor financeiro antes de investir e utilize apenas capital que nao comprometa suas necessidades basicas.",
  },
]

export function RiskSection() {
  return (
    <section
      id="riscos"
      className="border-t border-border bg-card px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="text-sm font-medium uppercase tracking-widest text-destructive">
            Aviso Importante
          </span>
          <h2 className="mt-4 text-balance font-serif text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Riscos e Advertencias
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Transparencia total sobre os riscos envolvidos. Leia atentamente antes
            de tomar qualquer decisao.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {warnings.map((warning) => {
            const Icon = warning.icon
            return (
              <div
                key={warning.title}
                className="flex gap-4 rounded-2xl border border-destructive/20 bg-destructive/5 p-6"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-destructive/10">
                  <Icon className="h-5 w-5 text-destructive" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">
                    {warning.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {warning.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-accent/30 bg-accent/10 p-8 text-center">
          <AlertTriangle className="mx-auto mb-4 h-8 w-8 text-accent" />
          <p className="text-sm font-medium leading-relaxed text-foreground">
            {"Este site apresenta oportunidades de investimento de altissimo risco. Os retornos projetados nao sao garantias e voce pode perder todo o seu capital. Investir envolve riscos significativos. Nao invista dinheiro que voce nao pode perder. Consulte sempre um profissional financeiro qualificado."}
          </p>
        </div>
      </div>
    </section>
  )
}
