import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getArticleURL } from "../../../../utilities/utilities";
import { Article } from "../../../pages/article-page/article-type";
import CardHeader from "../../molecules/article-card-header/article-card-header";
import "./article-card.css";

interface Props {
  article: Article;
  index: number;
  handleCardClick?: (n: Article) => void;
}

const ArticleCard = (props: Props) => {
  const { article, index, handleCardClick } = props;
  const articleURl = getArticleURL(article.id, index);

  const onCardClick = () => {
    handleCardClick(article);
  };

  return (
    <Link to={`/article/${articleURl}`} style={{ textDecoration: "none" }}>
      <div className="card-wrapper" onClick={onCardClick}>
        <CardHeader headline={article.headline} />
      </div>
    </Link>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleCardClick: (article: Article) =>
      dispatch({ type: "SET_ARTICLE", payload: article }),
  };
};

export default connect(null, mapDispatchToProps)(ArticleCard);
