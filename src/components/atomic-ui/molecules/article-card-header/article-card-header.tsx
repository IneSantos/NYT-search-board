import ArticleHeadline from "../../atoms/article-headline/article-headline";
import "./article-card-header.css"

interface Props {
    headline: string
}

const ArticleCardHeader = (props: Props) => {
    const { headline } = props;
    return (
        <div className="card-header" >
            <ArticleHeadline headline={headline} isSmall/>
        </div>
    );
}

export default ArticleCardHeader;