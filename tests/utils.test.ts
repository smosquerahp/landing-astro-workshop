import { describe, expect, test } from "@jest/globals";
import { slugifyLabel } from "../src/components/utils/slugify";
import { pascalToKebab as pascalToKebabComponent } from "../src/components/utils/pascalToKebab";
import {
  kebabToTitleCase,
  pascalToKebab as pascalToKebabDocs,
  toKebabCase,
  toPascalCase,
} from "../src/component-docs/shared/caseUtils";

describe("slugifyLabel", () => {
  test("convierte a lowercase y separa con guiones", () => {
    expect(slugifyLabel("Hola Mundo Astro")).toBe("hola-mundo-astro");
  });

  test("elimina caracteres especiales y guiones sobrantes", () => {
    expect(slugifyLabel("  !!! CTA Principal ???  ")).toBe("cta-principal");
  });
});

describe("pascalToKebab", () => {
  test("convierte PascalCase a kebab-case (utils de componentes)", () => {
    expect(pascalToKebabComponent("FeatureCardGrid")).toBe("feature-card-grid");
  });

  test("mantiene comportamiento consistente en utils de docs", () => {
    expect(pascalToKebabDocs("CTAButton")).toBe("c-t-a-button");
  });
});

describe("caseUtils", () => {
  test("toKebabCase convierte camel/pascal simple", () => {
    expect(toKebabCase("FeatureGrid")).toBe("feature-grid");
  });

  test("toPascalCase convierte kebab-case", () => {
    expect(toPascalCase("hero-banner")).toBe("HeroBanner");
  });

  test("kebabToTitleCase crea titulo legible", () => {
    expect(kebabToTitleCase("pricing-table-pro")).toBe("Pricing Table Pro");
  });
});
