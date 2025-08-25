import ContextApi from "../components/contextapi/ContextAPI";
import ContextCounter from "../components/contextapi/ContextCounter";
import { ContextApiProvider } from "../context/contextapi/ContextApiProvider";
import { CounterProvider } from "../context/counter/CounterProvider";
import { PagesTitle } from "./pages.styles";

export default function ContextPage() {
  return (
    <>
      <PagesTitle>Context API</PagesTitle>
      <ContextApiProvider>
        <ContextApi />
      </ContextApiProvider>
      <PagesTitle>Props Drilling에서 Context API로 전환</PagesTitle>
      <CounterProvider>
        <ContextCounter />
      </CounterProvider>
    </>
  );
}
