import { ArrowRight, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20">
      {/* Subtle grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto max-w-4xl text-center">
        {/* Risk badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2">
          <AlertTriangle className="h-4 w-4 text-accent" />
          <span className="text-xs font-medium tracking-wide text-accent uppercase">
            Investimento de alto risco
          </span>
        </div>

        <h1 className="text-balance font-serif text-5xl font-bold leading-tight tracking-tight text-foreground md:text-7xl lg:text-8xl">
          Multiplique seu capital em{" "}
          <span className="text-primary">curto prazo</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
          Planos estrategicos de investimento em diversas plataformas com potencial
          de retorno acima da media. Risco elevado, recompensa proporcional.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" asChild className="px-8 text-base">
            <a href="#plataformas">
              Ver Plataformas
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild className="px-8 text-base">
            <a href="#como-funciona">Como Funciona</a>
          </Button>
        </div>

        {/* Stats row */}
        <div className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-4">
          {[
            { value: "5+", label: "Plataformas" },
            { value: "30%+", label: "Retorno Potencial" },
            { value: "7-30", label: "Dias de Ciclo" },
            { value: "24/7", label: "Suporte" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <span className="text-3xl font-bold text-foreground md:text-4xl">
                {stat.value}
              </span>
              <span className="mt-1 text-sm text-muted-foreground">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
