import { connect } from 'react-redux';
import './search-button.css'

interface Props {
  searchClicked?: () => void
}

const SearchButton = ({searchClicked}: Props) => {
  return (
    <button type="submit" className="search-button" onClick={searchClicked}>
      <i className="fas fa-search"></i>
    </button>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    searchClicked: () => dispatch({ type: 'SEARCH_CLICKED'})
  }
};

export default connect(null, mapDispatchToProps)(SearchButton);