'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface DateRange {
  startDate: Date;
  endDate: Date;
  key: string;
}

interface SearchApartmentContextType {
  resortIdContext: any;
  setResortIdContext: (resortId: any) => void;
  dateRangeSearchContext: DateRange;
  setDateRangeSearchContext: (dateRange: any) => void;
  guestContext: number;
  setGuestContext: (guest: number) => void;
}

const SearchApartmentContext = createContext<SearchApartmentContextType | undefined>(undefined);

export function useSearchApartmentContext() {
  const context = useContext(SearchApartmentContext);
  if (!context) {
    throw new Error('useDateRange must be used within a DateRangeProvider');
  }
  return context;
}

interface DateRangeProviderProps {
  children: ReactNode;
}

export function DateRangeProvider({ children }: DateRangeProviderProps) {
  const [resortIdContext, setResortIdContext] = useState<any>(null);
  const [dateRangeSearchContext, setDateRangeSearchContext] = useState<any>(null);
  const [guestContext, setGuestContext] = useState<number>(1);

  return (
    <SearchApartmentContext.Provider
      value={{
        resortIdContext,
        dateRangeSearchContext,
        guestContext,
        setResortIdContext,
        setDateRangeSearchContext,
        setGuestContext,
      }}
    >
      {children}
    </SearchApartmentContext.Provider>
  );
}
