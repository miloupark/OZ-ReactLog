import { createContext, useContext } from "react";

export const ContextApi = createContext();

export function useContextApi() {
  return useContext(ContextApi);
}
