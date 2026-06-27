# /public/brand — Activos de marca NATIVA

Coloca aquí los archivos de marca. El sitio los usará automáticamente cuando
existan; mientras tanto, la navegación y el footer usan un logo SVG tipográfico
de respaldo (`components/Logo.tsx`) para que el deploy nunca se rompa.

## Archivos en uso

| Archivo | Uso en el sitio |
|---|---|
| `NATIVA_Logo_Principal.png` | Logo principal (sol + wordmark + "Rituales de nuestra tierra"). Reserva de marca. |
| `NATIVA_Logo_Complementario.png` | Ilustración mujer + orquídea. **Hero de la Home.** |
| `NATIVA_Rocio_Ritual.jpeg` | Pieza editorial completa de ROCÍO (póster original). |
| `rocio-bottle.jpg` | **Derivado**: recorte del frasco desde el póster. Se usa en el héroe de ROCÍO, la sección héroe de la Home y la grilla de rituales. |

> El wordmark de la barra de navegación y el footer usa un logo SVG vectorial
> (`components/Logo.tsx`) por nitidez a tamaño pequeño. Si prefieres el logo
> rasterizado ahí, se puede cambiar.
>
> `rocio-bottle.jpg` se generó recortando `NATIVA_Rocio_Ritual.jpeg`. Si subes
> una foto del frasco con fondo limpio, reemplázala con ese nombre.
