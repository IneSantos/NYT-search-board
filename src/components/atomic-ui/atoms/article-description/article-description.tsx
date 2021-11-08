import "./article-description.css";

interface Props {
  description: string;
}

const ArticleDescription = (props: Props) => {
  const { description } = props;
  return <div className="description">{description}</div>;
};

export default ArticleDescription;
