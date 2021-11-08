import ArticleCard from "../../organisms/article-card/article-card";
import { Article } from "../../../pages/article-page/article-type";
import "./article-list.css";

interface Props {
    articles: Article[]
}

const ArticlesList = (props: Props) => {
    const { articles } = props;

    const hasResults = articles.length > 0;
    return (
        <div className="articles-list">
            <h2>Results:</h2>
            {articles.map((article, index) => {
                return <ArticleCard key={`${article.id}-index-${index}`} headline={article.headline} index={index}/>
            })}
            {!hasResults &&
                <div className="empty-list">
                    <h3>No results.</h3>
                    <span>Search again or try removing filters.</span>
                </div>
            }
        </div>
    )
}

export default ArticlesList;