import HomePageTemplate from "../../templates/home/homepage";
import { Article } from "../article-page/article-type";
import "./homepage.css";

interface Props {
  articles: Article[];
  searchInput: string;
  handleSearch: (e: { target: HTMLInputElement }) => void;
}

const HomePage = (props: Props) => {
  const { searchInput, handleSearch, articles } = props;
  return (
    <HomePageTemplate
      searchInput={searchInput}
      handleSearch={handleSearch}
      articles={articles}
    />
  );
};

export default HomePage;
