import fs from "node:fs";
import path from "node:path";

/* --------------------------------------------------------------------------
   ¿Está la foto puesta ya?

   /estudio se apoya en dos carpetas de imágenes —`public/team` y
   `public/workspace`— que todavía están vacías. En vez de dejar huecos rotos
   hasta que se llenen, cada pieza pregunta aquí si el archivo existe y, si no,
   dibuja su propia reserva: un panel tipográfico en el caso de los retratos,
   una lámina de contactos en el de las fotos del taller.

   La comprobación es de servidor y se resuelve al construir la página, que es
   estática: soltar un JPG en la carpeta y volver a construir es todo lo que
   hace falta para que la reserva desaparezca y entre la foto. No hay que tocar
   marcado ni borrar nada.

   Se cachea el listado de cada carpeta, no cada archivo: son decenas de
   consultas por render y una sola lectura de directorio las responde todas.
   -------------------------------------------------------------------------- */

const PUBLIC_DIR = path.join(process.cwd(), "public");

/** Contenido de cada carpeta ya leída, en minúsculas para comparar sin sustos. */
const listings = new Map<string, Set<string>>();

function listFolder(folder: string): Set<string> {
  const cached = listings.get(folder);
  if (cached) return cached;

  let names: Set<string>;
  try {
    names = new Set(
      fs.readdirSync(path.join(PUBLIC_DIR, folder)).map((n) => n.toLowerCase())
    );
  } catch {
    // La carpeta no existe todavía: se comporta igual que si estuviera vacía.
    names = new Set();
  }

  listings.set(folder, names);
  return names;
}

/**
 * `true` si la ruta pública (`/workspace/mesa.jpg`) apunta a un archivo real.
 * Rutas externas (`http…`) se dan por buenas: no son nuestras y no se pueden
 * comprobar desde aquí.
 */
export function publicAssetExists(src: string | null | undefined): boolean {
  if (!src) return false;
  if (/^https?:\/\//.test(src)) return true;

  const clean = src.replace(/^\/+/, "").split("?")[0];
  const folder = path.posix.dirname(clean);
  const file = path.posix.basename(clean).toLowerCase();

  if (folder === "." || folder === "") {
    return listFolder("").has(file);
  }

  return listFolder(folder).has(file);
}

/**
 * Resuelve una lista de piezas con imagen a la misma lista con la ruta puesta
 * a `null` cuando el archivo no está. Así el componente solo tiene que mirar
 * si hay `src` o no, sin saber nada del sistema de archivos.
 */
export function withResolvedImages<T extends { src: string }>(
  items: readonly T[]
): (Omit<T, "src"> & { src: string | null })[] {
  return items.map((item) => ({
    ...item,
    src: publicAssetExists(item.src) ? item.src : null,
  }));
}
