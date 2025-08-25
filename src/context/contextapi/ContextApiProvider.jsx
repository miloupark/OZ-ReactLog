import { useState } from "react";
import { ContextApi } from "./contextApi";

export function ContextApiProvider({ children }) {
  const [counter, setCounter] = useState(0);

  return (
    <ContextApi.Provider value={[counter, setCounter]}>
      {children}
    </ContextApi.Provider>
  );
}
