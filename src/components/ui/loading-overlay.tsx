"use client";

import React, { useEffect, useState } from "react";
import { useLoading } from "@/context/LoadingContext";
import { IsotipoIcon } from "@/components/ui/logo-isotipo";
import { cn } from "@/lib/utils";

export const LoadingOverlay: React.FC = () => {
  const { isLoading, stopLoading } = useLoading();
  const [visible, setVisible] = useState(false);
  const [animatingOut, setAnimatingOut] = useState(false);

  useEffect(() => {
    if (isLoading) {
      setVisible(true);
      setAnimatingOut(false);

      // Auto-hide after 800ms for fast transitions unless manually controlled
      const timer = setTimeout(() => {
        setAnimatingOut(true);
        const hideTimer = setTimeout(() => {
          setVisible(false);
          stopLoading();
        }, 400);
        return () => clearTimeout(hideTimer);
      }, 700);

      return () => clearTimeout(timer);
    } else if (visible) {
      setAnimatingOut(true);
      const hideTimer = setTimeout(() => {
        setVisible(false);
      }, 400);
      return () => clearTimeout(hideTimer);
    }
  }, [isLoading, stopLoading]);

  if (!visible) return null;

  return (
    <div
      aria-hidden="true"
      className={cn(
        "fixed inset-0 z-[100] bg-dark flex items-center justify-center pointer-events-auto transition-transform duration-500 ease-in-out opacity-100",
        animatingOut ? "-translate-y-full" : "translate-y-0"
      )}
    >
      <div className="flex flex-col items-center gap-4 animate-pulse">
        <IsotipoIcon className="w-16 h-16 sm:w-20 sm:h-20 text-brand" />
      </div>
    </div>
  );
};
