import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import ArticlePage from "./pages/ArticlePage.jsx";
import UrgentNewsPage from "./pages/UrgentNewsPage.jsx";
import LocationScoutPage from "./pages/LocationScoutPage.jsx";
import InsightPage from "./pages/InsightPage.jsx";
import MonsterDetailPage from "./pages/MonsterDetailPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

function App() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <Link to="/" className="brand-link">
          New-axis Newsroom
        </Link>
        <nav className="site-nav">
          <Link to="/" className="nav-link">
            Newsroom
          </Link>
          <Link to="/location-scout" className="nav-link">
            Location Scout
          </Link>
          <Link to="/insights" className="nav-link">
            Insights
          </Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/article/:id" element={<ArticlePage />} />
        <Route path="/urgent-news" element={<UrgentNewsPage />} />
        <Route path="/location-scout" element={<LocationScoutPage />} />
        <Route path="/insights" element={<InsightPage />} />
        <Route path="/insights/:monsterId" element={<MonsterDetailPage />} />
        <Route
          path="*"
          element={
            <NotFoundPage
              title="Page not found"
              message="The link you followed is broken or the dispatch has gone dark. Return to the newsroom and try a different signal."
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
