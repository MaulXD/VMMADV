"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { practiceAreas } from "@/lib/areas";
import { Button } from "@/components/ui/Button";

export function AreaSelector() {
  const router = useRouter();
  const [area, setArea] = useState("");

  return (
    <div className="border border-line bg-white p-6 sm:p-8">
      <h2 className="font-serif text-2xl text-navy sm:text-3xl">
        Em que podemos ajudar?
      </h2>
      <p className="mt-3 max-w-2xl text-slate">
        Selecione a área de atuação para encontrar informações e iniciar seu
        atendimento.
      </p>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <label className="sr-only" htmlFor="area-selector">
          Área de atuação
        </label>
        <select
          id="area-selector"
          value={area}
          onChange={(event) => setArea(event.target.value)}
          className="field"
        >
          <option value="">Selecione a área</option>
          <option value="precatorios-rpv">Precatórios & RPV</option>
          {practiceAreas.map((item) => (
            <option key={item.slug} value={item.slug}>
              {item.title}
            </option>
          ))}
        </select>
        <Button
          type="button"
          className="shrink-0"
          disabled={!area}
          iconRight="arrow-right"
          onClick={() => {
            if (!area) return;
            router.push(
              area === "precatorios-rpv"
                ? "/precatorios-rpv"
                : `/areas/${area}`,
            );
          }}
        >
          Continuar
        </Button>
      </div>
    </div>
  );
}
