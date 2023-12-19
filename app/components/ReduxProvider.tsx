"use client";
import React from "react";
import { Provider } from "react-redux";
import { store } from '@/app/redux/store';

type ProvidersProps = {
  children: React.ReactNode
}
export default function ReduxProvider({ children }: ProvidersProps) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}
