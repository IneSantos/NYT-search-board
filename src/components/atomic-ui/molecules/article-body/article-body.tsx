import ArticleDescription from "../../atoms/article-description/article-description";
import ArticleAction from "../../atoms/article-action/article-action";
import "./article-body.css";

interface Props {
  description: string;
  webURL: string;
}

const ArticleBody = (props: Props) => {
  const { description, webURL } = props;
  return (
    <div className="article-body">
      <ArticleDescription description={description} />
      <ArticleAction name={"Read the full article"} webURL={webURL} />
    </div>
  );
};

export default ArticleBody;
