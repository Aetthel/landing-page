import React from "react";
import { cn } from "@/lib/utils";

export default function IntegrationsSection() {
  return (
    <section className="w-full bg-canvas text-ink py-20 sm:py-28 lg:py-36">
      <div className="w-full max-w-[1470px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid items-center grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Cards Grid Container */}
          <div className="lg:col-span-7 relative mx-auto w-fit">
            <div
              aria-hidden
              className="bg-radial to-canvas absolute inset-0 z-10 from-transparent to-75% pointer-events-none"
            />
            <div className="mx-auto mb-3 sm:mb-4 flex w-fit justify-center gap-3 sm:gap-4 lg:gap-5">
              <IntegrationCard />
              <IntegrationCard />
            </div>
            <div className="mx-auto my-3 sm:my-4 flex w-fit justify-center gap-3 sm:gap-4 lg:gap-5">
              <IntegrationCard />
              <IntegrationCard
                borderClassName="shadow-2xl border-ink/25"
                className="bg-surface"
              />
              <IntegrationCard />
            </div>

            <div className="mx-auto flex w-fit justify-center gap-3 sm:gap-4 lg:gap-5">
              <IntegrationCard />
              <IntegrationCard />
            </div>
          </div>

          {/* Text Column (Without Button) */}
          <div className="lg:col-span-5 mx-auto max-w-xl space-y-4 sm:space-y-6 text-center lg:text-left">
            <span className="block type-eyebrow text-ink-muted">
              INTEGRACIONES
            </span>
            <h2 className="text-balance text-3xl sm:text-5xl lg:text-6xl font-display font-normal tracking-tight text-ink leading-[1.06]">
              Integrate with your favorite tools
            </h2>
            <p className="type-lead font-sans font-light text-ink-muted text-base sm:text-lg lg:text-xl leading-relaxed">
              Connect seamlessly with popular platforms and services to
              enhance your workflow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const IntegrationCard = ({
  children,
  className,
  borderClassName,
}: {
  children?: React.ReactNode;
  className?: string;
  borderClassName?: string;
}) => {
  return (
    <div
      className={cn(
        "bg-surface relative flex size-28 sm:size-32 lg:size-36 rounded-2xl shadow-md",
        className,
      )}
    >
      <div
        role="presentation"
        className={cn(
          "absolute inset-0 rounded-2xl border border-ink/10",
          borderClassName,
        )}
      />
      {children && (
        <div className="relative z-20 m-auto size-fit *:size-12 sm:*:size-14 lg:*:size-16">
          {children}
        </div>
      )}
    </div>
  );
};
