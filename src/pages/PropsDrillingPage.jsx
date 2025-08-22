// src/pages/PropsDrillingPage.jsx
import PropsDrilling from "../components/props-drilling/PropsDrilling";
import { PagesSection, PagesTitle } from "./pages.styles";
export default function PropsDrillingPage() {
  return (
    <PagesSection>
      <PagesTitle>🪏 Props Drilling</PagesTitle>
      <PropsDrilling />;
    </PagesSection>
  );
}
