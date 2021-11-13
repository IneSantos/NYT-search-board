import { useEffect } from "react";
import { connect } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { Article } from "../../components/pages/article-page/article-type";
import ArticlePage from "../../components/pages/article-page/article-page";
import "normalize.css";
import "./article-page.css";
import { getArticleURL } from "../../utilities/utilities";

interface Props {
  article: Article;
}

const ArticlePageView = (props: Props) => {
  const { article } = props;
  //@ts-ignore
  const { id } = useParams();
  const navigate = useNavigate();
  const articleURl = getArticleURL(article.id, 0);

  useEffect(() => {
    if (article.headline === "" || id !== articleURl) {
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
