import SearchButton from "../../atoms/search-button/search-button";
import SearchInput from "../../atoms/search-input/search-input";
import "./search-input-bar.css";

interface Props {
  searchInput: string;
  handleSearch: (e: { target: HTMLInputElement }) => void;
}

const SearchInpuBar = ({ searchInput, handleSearch }: Props) => {
  return (
    <div className="search-wrapper">
      <h2>Type search query term in here: </h2>
      <div className="search">
        <SearchInput input={searchInput} handleSearch={handleSearch} />
        <SearchButton input={searchInput} />
      </div>
    </div>
  );
};

export default SearchInpuBar;
