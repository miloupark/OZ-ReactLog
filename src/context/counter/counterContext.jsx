import { createContext, useContext } from "react";

export const CounterContext = createContext();

export function useCounter() {
  return useContext(CounterContext);
}
