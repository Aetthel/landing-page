"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { cn } from "@/lib/utils";

/* Los mismos tres servicios que la home, en el mismo orden. Si allí cambian,
   aquí también: el formulario es la puerta de entrada a esa lista. */
const NEEDS = [
  "Landing page",
  "App a medida",
  "Automatización",
  "Otra cosa",
] as const;

type FieldName = "name" | "email" | "company" | "phone" | "message";

type FormValues = Record<FieldName, string>;

const EMPTY_FORM: FormValues = {
  name: "",
  email: "",
  company: "",
  phone: "",
  message: "",
};

/* Estado del envío. `sent` sustituye al formulario entero por la confirmación,
   así que no hay vuelta atrás salvo pulsando "escribir otro mensaje". */
type Status = "idle" | "sending" | "sent" | "error";

/* Claves que pueden llevar error: los campos de texto más los dos controles
   que no lo son —la elección de servicio y el consentimiento—. */
type ErrorKey = FieldName | "need" | "consent";

/* Validación en el momento del envío, no mientras se escribe: marcar en rojo un
   email a medio teclear es hostigar al usuario por ir despacio. Todo es
   obligatorio, así que cada campo tiene su propio aviso en lugar de un
   "rellena los campos" genérico al final. */
const validate = (values: FormValues, need: string | null, consent: boolean) => {
  const errors: Partial<Record<ErrorKey, string>> = {};

  if (!values.name.trim()) errors.name = "Nos gustaría saber cómo te llamas.";

  if (!values.email.trim()) {
    errors.email = "Sin email no podemos responderte.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) {
    errors.email = "Ese email no parece completo.";
  }

  if (!values.company.trim()) {
    errors.company = "Dinos para qué marca o proyecto es.";
  }

  if (!values.phone.trim()) {
    errors.phone = "Necesitamos un teléfono de contacto.";
    // Se cuentan solo los dígitos: así valen los prefijos, los espacios y los
    // guiones que cada uno escriba a su manera.
  } else if (values.phone.replace(/\D/g, "").length < 9) {
    errors.phone = "Ese teléfono se queda corto.";
  }

  if (!need) errors.need = "Elige lo que más se parezca a lo que necesitas.";

  if (values.message.trim().length < 10) {
    errors.message = "Cuéntanos un poco más, aunque sean dos líneas.";
  }

  if (!consent) errors.consent = "Necesitamos tu consentimiento para escribirte.";

  return errors;
};

/* --------------------------------------------------------------------------
   Campo de texto — sin caja: solo el filete inferior y el texto a cuerpo
   grande. El trazo lima se dibuja de izquierda a derecha al enfocar, el mismo
   gesto del subrayado del hero y del filete de Servicios.
   -------------------------------------------------------------------------- */
interface FieldProps {
  id: FieldName;
  index: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  type?: string;
  autoComplete?: string;
  placeholder?: string;
  multiline?: boolean;
}

const Field: React.FC<FieldProps> = ({
  id,
  index,
  label,
  value,
  onChange,
  error,
  type = "text",
  autoComplete,
  placeholder,
  multiline,
}) => {
  /* El control se pinta desnudo: los estilos de caja que `globals.css` da a
     todo input/textarea se anulan aquí (`border-0`, fondo transparente) porque
     el marco de este formulario es la línea de abajo, no un recuadro. */
  const controlStyles =
    "peer w-full border-0 bg-transparent px-0 py-3 font-sans text-lg sm:text-xl font-normal text-ink outline-none placeholder:text-ink/25 focus-visible:outline-none";

  const describedBy = error ? `${id}-error` : undefined;

  return (
    <div>
      <label
        htmlFor={id}
        className="flex items-baseline gap-2 font-sans text-[11px] font-medium uppercase tracking-[0.18em] text-ink-muted"
      >
        <span className="tabular-nums text-ink/25">{index}</span>
        {label}
      </label>

      <div className="relative mt-1">
        {multiline ? (
          <textarea
            id={id}
            name={id}
            rows={4}
            value={value}
            onChange={(event) => onChange(event.target.value)}
            placeholder={placeholder}
            /* Todos los campos lo son. `required` va por la semántica —el
               lector de pantalla lo anuncia—; el aviso visible sigue siendo el
               nuestro, porque el <form> lleva `noValidate` y el globo del
               navegador no se pinta. */
            required
            aria-invalid={error ? true : undefined}
            aria-describedby={describedBy}
            className={cn(controlStyles, "resize-none leading-relaxed")}
          />
        ) : (
          <input
            id={id}
            name={id}
            type={type}
            value={value}
            onChange={(event) => onChange(event.target.value)}
            autoComplete={autoComplete}
            placeholder={placeholder}
            /* Todos los campos lo son. `required` va por la semántica —el
               lector de pantalla lo anuncia—; el aviso visible sigue siendo el
               nuestro, porque el <form> lleva `noValidate` y el globo del
               navegador no se pinta. */
            required
            aria-invalid={error ? true : undefined}
            aria-describedby={describedBy}
            className={controlStyles}
          />
        )}

        {/* Filete en reposo. En error se tiñe, para que el campo se localice de
            un vistazo sin tener que leer los mensajes uno a uno. Al enfocar
            pasa a tinta: el lima solo no llega al contraste que pide un
            indicador de foco, así que el trazo de marca se apoya en esta
            hairline oscura, que queda asomando justo debajo. */}
        <span
          aria-hidden="true"
          className={cn(
            "absolute inset-x-0 bottom-0 h-px transition-colors",
            error ? "bg-red-500/70" : "bg-line peer-focus:bg-ink"
          )}
        />

        {/* Trazo lima del foco: se dibuja, no se enciende */}
        <span
          aria-hidden="true"
          className="absolute inset-x-0 bottom-px h-0.5 origin-left scale-x-0 bg-brand transition-transform duration-500 ease-out peer-focus:scale-x-100 motion-reduce:transition-none"
        />
      </div>

      {error && (
        <p id={`${id}-error`} className="mt-2 font-sans text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  );
};

export const ContactForm: React.FC = () => {
  const [values, setValues] = useState<FormValues>(EMPTY_FORM);
  const [need, setNeed] = useState<string | null>(null);
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<ErrorKey, string>>>({});
  const [status, setStatus] = useState<Status>("idle");

  const set = (field: FieldName) => (value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    // Corregir un campo borra su error al instante: el aviso ya cumplió.
    setErrors((current) => {
      if (!current[field]) return current;
      const next = { ...current };
      delete next[field];
      return next;
    });
  };

  const reset = () => {
    setValues(EMPTY_FORM);
    setNeed(null);
    setConsent(false);
    setErrors({});
    setStatus("idle");
  };

  const handleSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = validate(values, need, consent);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setStatus("sending");

    try {
      // TODO: aquí va el envío real (API route, Resend, Formspree…). De momento
      // el formulario valida y confirma en cliente; el payload ya está montado
      // con la forma que espera el endpoint.
      const payload = { ...values, need };
      await new Promise((resolve) => setTimeout(resolve, 900));
      console.info("Contacto — payload listo para enviar:", payload);

      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  const sending = status === "sending";

  /* `overflow-clip` y no `overflow-hidden` en la sección: recorta igual las
     esquinas redondeadas, pero sin convertirla en marco de scroll —que es lo que
     dejaría clavada la columna `sticky` de la izquierda—. */
  return (
    <section className="relative z-20 w-full bg-canvas rounded-t-[3.5rem] sm:rounded-t-[4.5rem] overflow-clip border-t border-line/80 pt-20 pb-32 sm:pt-28 sm:pb-40 lg:pt-32 lg:pb-56 shadow-[0_-10px_40px_rgba(0,0,0,0.2)]">
      <div className="w-full max-w-[1470px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16 items-start">
          {/* ------------------------------------------------------------------
              Columna izquierda: la vía directa y qué pasa después de enviar.
              Se queda fija mientras el formulario sube, así el contexto no se
              pierde a mitad de rellenar.
              ------------------------------------------------------------------ */}
          <Reveal className="lg:col-span-4 lg:sticky lg:top-32 space-y-12">
            <div className="space-y-5">
              <span className="block font-sans text-[11px] font-medium uppercase tracking-[0.18em] text-ink-muted">
                Nuestro contacto
              </span>
              <div className="space-y-2">
                <a
                  href="mailto:aetthel@gmail.com"
                  className="group block text-2xl sm:text-3xl font-display font-medium tracking-tight text-ink"
                >
                  {/* Subrayado lima que se traza al pasar por encima: un
                      degradado plano al que solo se le anima el ancho. */}
                  <span className="bg-linear-to-r from-brand to-brand bg-size-[0%_0.35em] bg-bottom-left bg-no-repeat transition-[background-size] duration-500 ease-out group-hover:bg-size-[100%_0.35em]">
                    aetthel@gmail.com
                  </span>
                </a>
                <div className="flex flex-col gap-1 font-sans text-sm text-ink-muted">
                  <a
                    href="tel:+34696352940"
                    className="hover:text-ink transition-colors"
                  >
                    +34 696 35 29 40
                  </a>
                  <a
                    href="tel:+34639971393"
                    className="hover:text-ink transition-colors"
                  >
                    +34 639 97 13 93
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-10 border-t border-line space-y-7">
              <span className="block font-sans text-[11px] font-medium uppercase tracking-[0.18em] text-ink-muted">
                Qué pasa después
              </span>

              {[
                {
                  step: "01",
                  title: "Leemos tu mensaje",
                  copy: "Leemos tu pedido el mismo día y estudiamos tu propuesta.",
                },
                {
                  step: "02",
                  title: "Te escribimos en 24 h",
                  copy: "Respondemos con las dudas que nos hayan surgido y concretamos la primera reunión.",
                },
                {
                  step: "03",
                  title: "Primera reunión",
                  copy: "Llevamos a cabo una reunión donde encajamos la propuesta, los plazos y el precio cerrado.",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <span className="mt-1 font-sans text-xs font-medium tabular-nums text-ink/30">
                    {item.step}
                  </span>
                  <div className="space-y-1">
                    <h3 className="text-base font-display font-medium tracking-tight text-ink">
                      {item.title}
                    </h3>
                    <p className="font-sans text-sm font-light leading-relaxed text-ink-muted">
                      {item.copy}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* ------------------------------------------------------------------
              Columna derecha: el formulario, sobre tarjeta blanca. El lienzo
              lleva degradados lima de fondo, y la superficie limpia es lo que
              deja respirar a los campos sin caja.
              ------------------------------------------------------------------ */}
          <Reveal
            delay={120}
            className="lg:col-span-8 lg:col-start-5 w-full"
          >
            <div className="surface-card rounded-3xl px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14 shadow-[0_1px_2px_rgba(26,26,30,0.04),0_24px_60px_-40px_rgba(26,26,30,0.35)]">
              {status === "sent" ? (
                /* Confirmación — ocupa el sitio del formulario en lugar de
                   aparecer como aviso encima: el trabajo ya está hecho y no
                   hay nada más que rellenar. */
                <div
                  aria-live="polite"
                  className="py-8 space-y-6 text-center animate-fade-in"
                >
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand">
                    <Check className="h-6 w-6 text-ink" />
                  </span>
                  <div className="space-y-3">
                    <h2 className="text-3xl sm:text-4xl font-display font-medium tracking-tight text-ink">
                      Mensaje enviado
                    </h2>
                    <p className="mx-auto max-w-md font-sans text-base font-light leading-relaxed text-ink-muted">
                      Gracias, {values.name.split(" ")[0]}. Te respondemos en
                      menos de 24 horas a{" "}
                      <span className="text-ink">{values.email}</span>.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={reset}
                    className="font-sans text-xs font-medium uppercase tracking-[0.18em] text-ink-muted underline underline-offset-4 hover:text-ink transition-colors"
                  >
                    Escribir otro mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-10">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
                    <Field
                      id="name"
                      index="01"
                      label="Nombre"
                      value={values.name}
                      onChange={set("name")}
                      error={errors.name}
                      autoComplete="name"
                      placeholder="Marc Ribas"
                    />
                    <Field
                      id="email"
                      index="02"
                      label="Email"
                      type="email"
                      value={values.email}
                      onChange={set("email")}
                      error={errors.email}
                      autoComplete="email"
                      placeholder="hola@tuempresa.com"
                    />
                    <Field
                      id="company"
                      index="03"
                      label="Empresa"
                      value={values.company}
                      onChange={set("company")}
                      error={errors.company}
                      autoComplete="organization"
                      placeholder="Tu marca o proyecto"
                    />
                    <Field
                      id="phone"
                      index="04"
                      label="Teléfono"
                      type="tel"
                      value={values.phone}
                      onChange={set("phone")}
                      error={errors.phone}
                      autoComplete="tel"
                      placeholder="+34 600 00 00 00"
                    />
                  </div>

                  {/* Selector de necesidad: se maneja como grupo de radio para
                      que el teclado y el lector de pantalla lo entiendan como
                      una elección única. Con "Otra cosa" en la lista siempre
                      hay una respuesta posible, así que exigirla no deja a
                      nadie fuera. */}
                  <fieldset
                    role="radiogroup"
                    aria-required="true"
                    aria-invalid={errors.need ? true : undefined}
                    aria-describedby={errors.need ? "need-error" : undefined}
                    className="space-y-4"
                  >
                    <legend className="flex items-baseline gap-2 font-sans text-[11px] font-medium uppercase tracking-[0.18em] text-ink-muted">
                      <span className="tabular-nums text-ink/25">05</span>
                      Qué necesitas
                    </legend>
                    <div className="flex flex-wrap gap-2.5">
                      {NEEDS.map((option) => {
                        const active = need === option;
                        return (
                          <button
                            key={option}
                            type="button"
                            role="radio"
                            aria-checked={active}
                            onClick={() => {
                              setNeed(option);
                              setErrors((current) => {
                                if (!current.need) return current;
                                const next = { ...current };
                                delete next.need;
                                return next;
                              });
                            }}
                            className={cn(
                              "rounded-full border px-4 py-2 font-sans text-[11px] font-medium uppercase tracking-wider transition-all duration-200",
                              active
                                ? "border-brand bg-brand text-ink"
                                : cn(
                                    "bg-white text-ink-muted hover:border-ink hover:text-ink",
                                    errors.need ? "border-red-500/70" : "border-line"
                                  )
                            )}
                          >
                            {option}
                          </button>
                        );
                      })}
                    </div>
                    {errors.need && (
                      <p
                        id="need-error"
                        className="font-sans text-xs text-red-600"
                      >
                        {errors.need}
                      </p>
                    )}
                  </fieldset>

                  <Field
                    id="message"
                    index="06"
                    label="Cuéntanos"
                    multiline
                    value={values.message}
                    onChange={set("message")}
                    error={errors.message}
                    placeholder="Explícanos tu idea u otros detalles de forma resumida"
                  />

                  <div className="space-y-6 pt-2">
                    <div>
                      <label className="group flex items-start gap-3 cursor-pointer">
                        <span className="relative mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center">
                          <input
                            type="checkbox"
                            checked={consent}
                            onChange={(event) => {
                              setConsent(event.target.checked);
                              if (event.target.checked) {
                                setErrors((current) => {
                                  const next = { ...current };
                                  delete next.consent;
                                  return next;
                                });
                              }
                            }}
                            aria-invalid={errors.consent ? true : undefined}
                            aria-describedby={
                              errors.consent ? "consent-error" : undefined
                            }
                            className={cn(
                              "peer h-5 w-5 appearance-none rounded-md bg-white transition-colors checked:border-brand checked:bg-brand",
                              errors.consent ? "border-red-500/70" : "border-line"
                            )}
                          />
                          <Check
                            aria-hidden="true"
                            className="pointer-events-none absolute h-3.5 w-3.5 text-ink opacity-0 transition-opacity peer-checked:opacity-100"
                          />
                        </span>
                        <span className="font-sans text-xs leading-relaxed text-ink-muted">
                          He leído y acepto la{" "}
                          <Link
                            href="#"
                            className="text-ink underline underline-offset-2 hover:text-accent transition-colors"
                          >
                            política de privacidad
                          </Link>
                          .
                        </span>
                      </label>
                      {errors.consent && (
                        <p
                          id="consent-error"
                          className="mt-2 font-sans text-xs text-red-600"
                        >
                          {errors.consent}
                        </p>
                      )}
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-5 pt-2">
                      {/* Misma píldora que el CTA del footer: lima, con el
                          punto creciendo al pasar por encima. */}
                      <InteractiveHoverButton
                        type="submit"
                        disabled={sending}
                        text={sending ? "Enviando…" : "Enviar mensaje"}
                        icon={<ArrowUpRight className="h-4 w-4" />}
                        className="border-brand bg-brand px-7 py-3.5 text-neutral-950 tracking-widest disabled:opacity-60"
                        blobClassName="bg-ink"
                        revealClassName="text-white"
                      />
                    </div>

                    {status === "error" && (
                      <p
                        aria-live="polite"
                        className="font-sans text-xs text-red-600"
                      >
                        No hemos podido enviarlo. Escríbenos directamente a{" "}
                        <a
                          href="mailto:aetthel@gmail.com"
                          className="underline underline-offset-2"
                        >
                          aetthel@gmail.com
                        </a>
                        .
                      </p>
                    )}
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
