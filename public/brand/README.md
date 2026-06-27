# /public/brand — Activos de marca NATIVA

Coloca aquí los archivos de marca. El sitio los usará automáticamente cuando
existan; mientras tanto, la navegación y el footer usan un logo SVG tipográfico
de respaldo (`components/Logo.tsx`) para que el deploy nunca se rompa.

Archivos esperados (brief §3):

| Archivo | Uso |
|---|---|
| `Logo.png` | Sol + wordmark NATIVA + "Rituales de nuestra tierra". Logo principal. |
| `Logo_Complementario.png` | Ilustración de la mujer + orquídea. Para hero/secciones de marca. |
| `Ritual_Rocio.jpeg` | Pieza de producto ROCÍO. Hero del producto y secciones editoriales. |
| `Sample_Box.png` | Packaging / mockup. Secciones editoriales. |

> Formatos recomendados para web: exporta también versiones `.webp` u optimiza
> los PNG/JPEG. Usa `next/image` para servirlos (ya configurado en los componentes).
