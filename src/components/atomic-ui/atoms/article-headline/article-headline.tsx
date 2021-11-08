import "./article-headline.css";
interface Props {
  headline: string;
  isSmall?: boolean;
}

const ArticleHeadline = (props: Props) => {
  const { headline, isSmall } = props;
  return <h3 className={`title${isSmall ? "-small" : ""}`}>{headline}</h3>;
};

ArticleHeadline.defaultProps = {
  isSmall: false,
};

export default ArticleHeadline;
