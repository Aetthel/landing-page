# Fotos del taller

Suelta aquí las fotos del espacio de trabajo con **estos nombres exactos**:

| Archivo | Dónde sale | Proporción esperada |
| --- | --- | --- |
| `01.jpg` | Tira arrastrable | ~1:1 (algo apaisada) |
| `02.jpg` | Tira + bloque «La cercanía se puede comprobar» | cuadrada; se recorta a 4:5 en el bloque |
| `03.jpg` | Tira arrastrable | panorámica, ~2:1 |
| `04.jpg` | Tira arrastrable | vertical, ~3:4 |
| `05.jpg` | Tira arrastrable | apaisada, ~7:5 |
| `wide.jpg` | Lámina ancha después del equipo | muy panorámica, ~12:5 |

**La mezcla de proporciones importa.** La tira coge la altura del contenedor y
respeta la proporción de cada foto, así que la alternancia vertical / cuadrada /
panorámica es lo que le da el ritmo. Si se suben seis fotos iguales, se ve un
carrusel de casillas.

Las proporciones se declaran en `src/config/studio.ts` (`workspaceShots[].ar` y
`workspaceWide.ar`): si una foto no encaja con la que hay puesta, se cambia el
número y listo.

## Antes de dar esto por cerrado

Los **pies y textos alternativos** de `src/config/studio.ts` son de relleno:
describen un espacio que nadie ha fotografiado todavía. Hay que reescribirlos
para que digan lo que de verdad se ve en cada foto — el `caption` se lee
mientras no hay imagen, y el `alt` es lo que oye quien navega con lector de
pantalla cuando ya la hay.

Mientras falte un archivo, `/estudio` dibuja en su hueco una lámina de contactos
con el pie compuesto. En cuanto aparece y se vuelve a construir, se retira sola.
