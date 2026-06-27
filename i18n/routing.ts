import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // Español es la voz primaria; inglés es funcional.
  locales: ["es", "en"],
  defaultLocale: "es",
});

export type Locale = (typeof routing.locales)[number];
