import SearchInputBar from "../../molecules/search-input-bar/search-input-bar";

interface Props {
  searchInput: string;
  handleSearch: (e: { target: HTMLInputElement }) => void;
}

const SearchBar = ({ searchInput, handleSearch }: Props) => {
  return (
    <div className="header-wrapper">
      <SearchInputBar searchInput={searchInput} handleSearch={handleSearch} />
    </div>
  );
};

export default SearchBar;
