import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

/* Clases compartidas por la versión <button> y la versión <Link>.
   El efecto: el texto base se desplaza y se desvanece mientras un punto de
   marca crece hasta cubrir la píldora y revela el texto + flecha en negativo. */
const shellStyles =
  "group relative inline-flex cursor-pointer items-center justify-center overflow-hidden rounded-full border border-line bg-white/70 px-6 py-2 text-center font-sans font-medium text-xs uppercase tracking-wider text-ink transition-colors";

const labelStyles =
  "relative z-20 inline-block transition-all duration-300 group-hover:translate-x-8 group-hover:opacity-0";

const revealStyles =
  "absolute inset-0 z-20 flex translate-x-8 items-center justify-center gap-1.5 text-ink opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100";

/* El punto arranca oculto en el centro (para no pisar el texto en reposo) y
   crece hasta cubrir la píldora al hacer hover. */
const blobStyles =
  "absolute left-1/2 top-1/2 z-10 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-brand opacity-0 transition-all duration-300 group-hover:left-0 group-hover:top-0 group-hover:h-full group-hover:w-full group-hover:translate-x-0 group-hover:translate-y-0 group-hover:scale-150 group-hover:opacity-100";

interface InteractiveHoverContentProps {
  text: string;
  icon?: React.ReactNode;
  /* El punto y el texto en negativo van en lima sobre tinta, que es lo que
     pide el fondo claro. Sobre una píldora ya lima —el CTA del footer— hay que
     poder invertirlos o el efecto sería invisible. */
  blobClassName?: string;
  revealClassName?: string;
}

const InteractiveHoverContent: React.FC<InteractiveHoverContentProps> = ({
  text,
  icon,
  blobClassName,
  revealClassName,
}) => (
  <>
    <span className={labelStyles}>{text}</span>
    <div className={cn(revealStyles, revealClassName)} aria-hidden="true">
      <span>{text}</span>
      {icon ?? <ArrowUpRight className="h-3 w-3" />}
    </div>
    <div className={cn(blobStyles, blobClassName)} aria-hidden="true" />
  </>
);

interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  icon?: React.ReactNode;
  blobClassName?: string;
  revealClassName?: string;
}

const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(
  (
    { text = "Button", icon, blobClassName, revealClassName, className, ...props },
    ref
  ) => {
    return (
      <button ref={ref} className={cn(shellStyles, className)} {...props}>
        <InteractiveHoverContent
          text={text}
          icon={icon}
          blobClassName={blobClassName}
          revealClassName={revealClassName}
        />
      </button>
    );
  }
);

InteractiveHoverButton.displayName = "InteractiveHoverButton";

interface InteractiveHoverLinkProps
  extends Omit<React.ComponentPropsWithoutRef<typeof Link>, "children"> {
  text: string;
  icon?: React.ReactNode;
  blobClassName?: string;
  revealClassName?: string;
}

const InteractiveHoverLink = React.forwardRef<
  HTMLAnchorElement,
  InteractiveHoverLinkProps
>(({ text, icon, blobClassName, revealClassName, className, ...props }, ref) => {
  return (
    <Link ref={ref} className={cn(shellStyles, className)} {...props}>
      <InteractiveHoverContent
        text={text}
        icon={icon}
        blobClassName={blobClassName}
        revealClassName={revealClassName}
      />
    </Link>
  );
});

InteractiveHoverLink.displayName = "InteractiveHoverLink";

export { InteractiveHoverButton, InteractiveHoverLink };
