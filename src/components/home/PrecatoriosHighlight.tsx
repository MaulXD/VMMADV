import Link from "next/link";
import { precatoriosArea } from "@/lib/areas";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export function PrecatoriosHighlight() {
  return (
    <Section dark eyebrow="Especialidade" title={precatoriosArea.title}>
      <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-20">
        <p className="max-w-2xl text-lg leading-relaxed text-white/70">
          {precatoriosArea.description}
        </p>
        <div className="flex flex-col gap-4 sm:flex-row lg:flex-col lg:items-start">
          <Button href="/precatorios-rpv" variant="accent" iconRight="arrow-right">
            Página dedicada
          </Button>
          <Link
            href="/contato?area=precatorios-rpv"
            className="inline-flex items-center text-sm text-gold-light underline-offset-4 hover:underline"
          >
            Solicitar análise
          </Link>
        </div>
      </div>
    </Section>
  );
}
