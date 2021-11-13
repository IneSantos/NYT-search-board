import { connect } from "react-redux";
import ArticleAction from "../../atoms/article-action/article-action";
import "./pagination.css";

interface Props {
  page: number;
  prevPage?: () => void;
  nextPage?: () => void;
}

const Pagination = (props: Props) => {
  const { page, prevPage, nextPage } = props;

  return (
    <div className="pagination">
      <ArticleAction
        name={"Next page >"}
        cssClass="next-page"
        handleAction={nextPage}
      />
      {page === 0 && (
        <ArticleAction
          name={"< Prev page"}
          cssClass="prev-page"
          handleAction={prevPage}
        />
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    page: state.article.page,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    prevPage: () => dispatch({ type: "SET_PREV_PAGE" }),
    nextPage: () => dispatch({ type: "SET_NEXT_PAGE" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
