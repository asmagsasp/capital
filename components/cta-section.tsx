import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CtaSection() {
  return (
    <section className="border-t border-border bg-card px-6 py-24 md:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-balance font-serif text-4xl font-bold tracking-tight text-foreground md:text-5xl">
          Pronto para comecar a investir?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
          Explore nossas plataformas e comece a potencializar seus ganhos hoje mesmo.
          Lembre-se: invista apenas o que pode perder.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" asChild className="px-8 text-base">
            <a href="#plataformas">
              Explorar Plataformas
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
        <p className="mt-6 text-xs text-muted-foreground">
          {"Ao investir, voce declara estar ciente dos riscos envolvidos e que leu todos os termos e condicoes."}
        </p>
      </div>
    </section>
  )
}
