import { Article } from "../../pages/article-page/article-type";
import ArticleHeader from "../../atomic-ui/molecules/article-header/article-header";
import ArticleBody from "../../atomic-ui/molecules/article-body/article-body";
import PageHeader from "../../atomic-ui/atoms/page-header/page-header";

interface Props {
  article: Article;
}

const ArticlePageTemplate = (props: Props) => {
  const { article } = props;
  return (
    <section>
      <PageHeader />
      <div className="page-body-wrapper">
        <div className="page-body">
          <ArticleHeader headline={article.headline} date={article.pub_date} />
          <ArticleBody
            description={article.abstract}
            webURL={article.web_url}
          />
        </div>
      </div>
    </section>
  );
};

export default ArticlePageTemplate;
