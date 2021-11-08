import { connect } from "react-redux";
import ArticleAction from "../../atoms/article-action/article-action";
import "./pagination.css";

interface Props {
  prevPage?: () => void;
  nextPage?: () => void;
}

const Pagination = (props: Props) => {
  const { prevPage, nextPage } = props;

  return (
    <div className="pagination">
      <ArticleAction name={"< Prev page"} handleAction={prevPage} />
      <ArticleAction name={"Next page >"} handleAction={nextPage} />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    prevPage: () => dispatch({ type: "SET_PREV_PAGE" }),
    nextPage: () => dispatch({ type: "SET_NEXT_PAGE" }),
  };
};

export default connect(null, mapDispatchToProps)(Pagination);
