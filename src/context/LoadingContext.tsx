"use client";

import React, { createContext, useContext, useState, useCallback } from "react";

export type LoadingMode = "full" | "quick";

interface LoadingContextType {
  isLoading: boolean;
  loadingMode: LoadingMode;
  startLoading: (mode?: LoadingMode) => void;
  stopLoading: () => void;
}

const LoadingContext = createContext<LoadingContextType>({
  isLoading: false,
  loadingMode: "quick",
  startLoading: () => {},
  stopLoading: () => {},
});

export const LoadingProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMode, setLoadingMode] = useState<LoadingMode>("quick");

  const startLoading = useCallback((mode: LoadingMode = "quick") => {
    setLoadingMode(mode);
    setIsLoading(true);
  }, []);

  const stopLoading = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <LoadingContext.Provider
      value={{ isLoading, loadingMode, startLoading, stopLoading }}
    >
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => useContext(LoadingContext);
