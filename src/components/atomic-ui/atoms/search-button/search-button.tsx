import { connect } from "react-redux";
import "./search-button.css";

interface Props {
  input: string;
  searchClicked?: () => void;
  clearClicked?: () => void;
}

const SearchButton = ({ input, searchClicked, clearClicked }: Props) => {
  return (
    <>
      {input && input !== "" && (
        <button type="reset" className="clear-button" onClick={clearClicked}>
          clear
        </button>
      )}
      <button type="submit" className="search-button" onClick={searchClicked}>
        <i className="fas fa-search"></i>
      </button>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchClicked: () => dispatch({ type: "SEARCH_CLICKED" }),
    clearClicked: () => dispatch({ type: "CLEAR_CLICKED" }),
  };
};

export default connect(null, mapDispatchToProps)(SearchButton);
