
import { Article } from "./article-type";
import ArticlePageTemplate from "../../templates/article-page/article-page";
import "./article-page.css";

interface Props {
    article: Article
}

const ArticlePage = (props: Props) => {
    const { article } = props;
    return <ArticlePageTemplate article={article} />
}

export default ArticlePage;