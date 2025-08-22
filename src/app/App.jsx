import { Link, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import PropsDrillingPage from "../pages/PropsDrillingPage";
import ReduxPage from "../pages/ReduxPage";
import ContextPage from "../pages/Contextpage";
import styled from "styled-components";

export default function App() {
  return (
    <Section>
      <Nav>
        <h1>React 상태관리</h1>
        <ul>
          <Link to="/">🏠 Home</Link>
          <Link to="/props-drilling">Props Drilling</Link>
          <Link to="/redux">Redux</Link>
          <Link to="/context">Context</Link>
        </ul>
      </Nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/props-drilling" element={<PropsDrillingPage />} />
        <Route path="/redux" element={<ReduxPage />} />
        <Route path="/context" element={<ContextPage />} />
      </Routes>
    </Section>
  );
}

const Section = styled.section`
  height: 100%;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  padding: 32px 20px;
  border-bottom: 1px solid #555555;
  h1 {
    color: #fff;
    font-size: 24px;
  }
  ul {
    display: flex;
    align-items: center;
    font-size: 20px;
    gap: 40px;
    font-weight: 600;

    a {
      color: #9ecbff;
    }
  }
`;
