import { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Article } from "../../components/pages/article-page/article-type";
import ArticlePage from "../../components/pages/article-page/article-page";
import "normalize.css";
import "./article-page.css";

interface Props {
  article: Article;
}

const ArticlePageView = (props: Props) => {
  const { article } = props;
  const navigate = useNavigate();

  useEffect(() => {
    if (article.headline === "") {
      navigate("/article/error");
    }
  }, [article, navigate]);

  return <> {article.headline !== "" && <ArticlePage article={article} />} </>;
};

const mapStateToProps = (state) => {
  return {
    article: state.article.article,
  };
};

export default connect(mapStateToProps)(ArticlePageView);
