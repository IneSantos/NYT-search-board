import { connect } from "react-redux";
import { Link } from "react-router-dom";
import CardHeader from "../../molecules/article-card-header/article-card-header";
import "./article-card.css";

interface Props {
  headline: string;
  index: number;
  handleCardClick?: (n: number) => void;
}

const ArticleCard = (props: Props) => {
  const { headline, index, handleCardClick } = props;

  const onCardClick = () => {
    handleCardClick(index);
  };

  return (
    <Link to={`/article/${index}`} style={{ textDecoration: "none" }}>
      <div className="card-wrapper" onClick={onCardClick}>
        <CardHeader headline={headline} />
      </div>
    </Link>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleCardClick: (index: number) =>
      dispatch({ type: "SET_ARTICLE_SHOWN", payload: index }),
  };
};

export default connect(null, mapDispatchToProps)(ArticleCard);
