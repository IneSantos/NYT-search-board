import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
import ArticlePage from "../views/article-page/article-page";
import HomePage from '../views/home/homepage';

const AppRoutes = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={ <HomePage /> } />
                <Route path="/article/:id" element={<ArticlePage />} />
            </Routes>
        </Router>
    )
 }
 
 export default AppRoutes;