import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ArticleErrorPage from "../views/article-error-page/article-error-page";
import ArticlePage from "../views/article-page/article-page";
import HomePage from "../views/home/homepage";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/article/:id" element={<ArticlePage />} />
        <Route path="/article/error" element={<ArticleErrorPage />} />
        <Route path="*" element={<ArticleErrorPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
