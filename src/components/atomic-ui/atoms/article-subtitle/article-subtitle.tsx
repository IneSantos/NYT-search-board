import "./article-subtitle.css"

interface Props {
  subtitle: string
}

const ArticleSubtitle = (props: Props) => {
  const { subtitle } = props;
  return <div className="subtitle">{subtitle}</div>
}

export default ArticleSubtitle;