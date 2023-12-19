// DateRangeContext.tsx
'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface GuestContextType {
  adultGuestContext: number;
  childrenGuestContext: number;
  totalGuestContext: number;
  allowTotalGuestContext: number;
  setAdultGuestContext: (guest: number) => void;
  setChildrenGuestContext: (guest: number) => void;
  setTotalGuestContext: (guest: number) => void;
  setAllowTotalGuestContext: (guest: number) => void;
}

const GuestContext = createContext<GuestContextType | undefined>(undefined);

export function useGuest() {
  const context = useContext(GuestContext);
  if (!context) {
    throw new Error('useDateRange must be used within a DateRangeProvider');
  }
  return context;
}

interface GuestProviderProps {
  children: ReactNode;
}

export function GuestProvider({ children }: GuestProviderProps) {
  const [adultGuestContext, setAdultGuestContext] = useState<number>(1);
  const [childrenGuestContext, setChildrenGuestContext] = useState<number>(0);
  const [totalGuestContext, setTotalGuestContext] = useState<number>(1);
  const [allowTotalGuestContext, setAllowTotalGuestContext] = useState<number>(0);

  return (
    <GuestContext.Provider
      value={{
        adultGuestContext,
        childrenGuestContext,
        totalGuestContext,
        allowTotalGuestContext,
        setAdultGuestContext,
        setChildrenGuestContext,
        setTotalGuestContext,
        setAllowTotalGuestContext,
      }}
    >
      {children}
    </GuestContext.Provider>
  );
}
