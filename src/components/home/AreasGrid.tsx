import { practiceAreas } from "@/lib/areas";
import { AreaCard } from "@/components/areas/AreaCard";
import { Section } from "@/components/ui/Section";
import { Stagger, StaggerItem } from "@/components/motion/AnimateIn";
import { Button } from "@/components/ui/Button";

export function AreasGrid() {
  return (
    <Section
      className="bg-off-white"
      eyebrow="Áreas de atuação"
      title="Como podemos ajudá-lo?"
      description="Atuação técnica em múltiplas frentes do Direito, com atendimento estruturado para cada demanda."
    >
      <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {practiceAreas.map((area) => (
          <StaggerItem key={area.slug} className="h-full">
            <AreaCard area={area} />
          </StaggerItem>
        ))}
      </Stagger>

      <div className="divider-soft mt-16 pt-12 text-center">
        <Button href="/areas-de-atuacao" variant="secondary" iconRight="arrow-right">
          Ver todas as áreas
        </Button>
      </div>
    </Section>
  );
}
