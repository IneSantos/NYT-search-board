import SearchBar from "../../atomic-ui/organisms/search-bar/search-bar";
import ArticlesList from "../../atomic-ui/organisms/article-list/article-list";
import Pagination from "../../atomic-ui/molecules/pagination/pagination";
import PageHeader from "../../atomic-ui/atoms/page-header/page-header";
import { Article } from "../../pages/article-page/article-type";

interface Props {
  articles: Article[];
  searchInput: string;
  handleSearch: (e: { target: HTMLInputElement }) => void;
}

const HomePageTemplate = (props: Props) => {
  const { searchInput, handleSearch, articles } = props;
  return (
    <section>
      <PageHeader />
      <div className="page-body-wrapper">
        <div className="page-body">
          <SearchBar searchInput={searchInput} handleSearch={handleSearch} />
          <ArticlesList articles={articles} />
          <Pagination />
        </div>
      </div>
    </section>
  );
};

export default HomePageTemplate;
