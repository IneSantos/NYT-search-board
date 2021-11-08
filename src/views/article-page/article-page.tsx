import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { Article } from "../../components/pages/article-page/article-type";
import ArticlePage from "../../components/pages/article-page/article-page";
import "normalize.css";
import "./article-page.css";

interface Props {
  articles: Article[];
}

const initialArticle = {
  id: "",
  headline: "",
  abstract: "",
  keywords: [],
  section: "",
  snippet: "",
  pub_date: "",
  source: "",
  web_url: "",
};

const ArticlePageView = (props: Props) => {
  const { articles } = props;

  //@ts-ignore
  const { id } = useParams();
  const navigate = useNavigate();

  const [article, setArticle] = useState(initialArticle);

  useEffect(() => {
    if (article.headline === "" && +id >= 0 && +id <= articles.length) {
      setArticle(articles[id]);
    }

    if (+id < 0 || +id > articles.length) navigate("/article/error");
  }, [articles, article, id, navigate]);

  return <ArticlePage article={article} />;
};

const mapStateToProps = (state) => {
  return {
    articles: state.article.articleList,
  };
};

export default connect(mapStateToProps)(ArticlePageView);
