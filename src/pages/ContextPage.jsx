import ContextApi from "../components/contextapi/ContextAPI";
import { CounterProvider } from "../context/counter/CounterProvider";
import { PagesTitle } from "./pages.styles";

export default function ContextPage() {
  return (
    <CounterProvider>
      <PagesTitle>Context API</PagesTitle>
      <ContextApi />
    </CounterProvider>
  );
}
