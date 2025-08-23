import { Link, Outlet, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import PropsDrillingPage from "../pages/PropsDrillingPage";
import ReduxPage from "../pages/ReduxPage";
import ContextPage from "../pages/ContextPage";
import styled from "styled-components";
import CafePage from "../pages/CafePage";

// 공통 레이아웃
function DefaultLayout() {
  return (
    <>
      <Layout>
        <Header>
          <h1>React 상태관리</h1>
          <ul>
            <Link to="/">🏠 Home</Link>
            <Link to="/props-drilling">Props Drilling</Link>
            <Link to="/cafe">Cafe</Link>
            <Link to="/redux">Redux</Link>
            <Link to="/context">Context</Link>
          </ul>
        </Header>
        <Main>
          <Outlet />
        </Main>
      </Layout>
    </>
  );
}

// 카페 레이아웃
function CafeLayout() {
  return (
    <Layout $isCafe>
      <Main>
        <Outlet />
      </Main>
    </Layout>
  );
}

export default function App() {
  return (
    <Routes>
      {/* 공통 레이아웃 사용 라우트 */}
      <Route element={<DefaultLayout />}>
        <Route index element={<Home />} />
        <Route path="/props-drilling" element={<PropsDrillingPage />} />
        <Route path="/redux" element={<ReduxPage />} />
        <Route path="/context" element={<ContextPage />} />
      </Route>

      {/* 카페 레이아웃 */}
      <Route element={<CafeLayout />}>
        <Route path="/cafe/*" element={<CafePage />} />
      </Route>
    </Routes>
  );
}

const Layout = styled.div`
  min-height: 100svh;
  min-height: 100dvh;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${({ $isCafe }) => ($isCafe ? "#ffffff" : "transparent")};
`;

const Header = styled.header`
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

const Main = styled.main`
  flex: 1;
  padding: 20px;
`;
