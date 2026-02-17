import { TrendingUp } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <TrendingUp className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="text-base font-bold text-foreground">
              Investimentos
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="#plataformas"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Plataformas
            </a>
            <a
              href="#como-funciona"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Como Funciona
            </a>
            <a
              href="#riscos"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Riscos
            </a>

          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8">
          <p className="text-center text-xs leading-relaxed text-muted-foreground">
            {"Investimentos - Todos os direitos reservados. Este site nao constitui aconselhamento financeiro. Investimentos de alto risco podem resultar em perda total do capital. Resultados passados nao garantem retornos futuros. Consulte um profissional financeiro qualificado antes de investir."}
          </p>
        </div>
      </div>
    </footer>
  )
}
