"use client";

import ErrorContentBox from "@/components/ErrorContentBox";
import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";

type ErrorMessageContextType = {
  error: Error | null;
  setError: (err: Error | null) => void;
  clearError: () => void;
};

const ErrorMessageContext = createContext<ErrorMessageContextType | undefined>(
  undefined
);

export const useErrorMessage = (): ErrorMessageContextType => {
  const context = useContext(ErrorMessageContext);
  if (!context) {
    throw new Error("useErrorMessage must be used within ErrorMessageProvider");
  }
  return context;
};

export const ErrorMessageProvider = ({ children }: { children: ReactNode }) => {
  const [error, setErrorState] = useState<Error | null>(null);

  const setError = useCallback((err: Error | null) => {
    setErrorState(err);
  }, []);

  const clearError = useCallback(() => {
    setErrorState(null);
  }, []);

  return (
    <ErrorMessageContext.Provider value={{ error, setError, clearError }}>
      {error ? (
          <ErrorContentBox error={error} />
      ) : (
        children
      )}
    </ErrorMessageContext.Provider>
  );
};
