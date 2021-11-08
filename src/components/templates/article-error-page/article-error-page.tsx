import ArticleDescription from "../../atomic-ui/atoms/article-description/article-description";
import ArticleAction from "../../atomic-ui/atoms/article-action/article-action";
import PageHeader from "../../atomic-ui/atoms/page-header/page-header";

const ArticlePageTemplate = () => {
  return (
    <section>
      <PageHeader />
      <div className="page-body-wrapper">
        <div className="page-body">
          <div className="article-error">
            <ArticleAction name={"< Go to results page"} webURL={"/"} />
            <ArticleDescription description="Invalid URL please go back to the Results Page" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticlePageTemplate;
