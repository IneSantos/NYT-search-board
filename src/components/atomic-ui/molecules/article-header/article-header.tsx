import React from "react";
import { formatDate } from "../../../../utilities/utilities";
import ArticleAction from "../../atoms/article-action/article-action";
import ArticleHeadline from "../../atoms/article-headline/article-headline";
import ArticleSubtitle from "../../atoms/article-subtitle/article-subtitle";
import "./article-header.css"

interface Props {
    headline: string,
    date: string
}

const ArticleHeader = (props: Props) => {
    const { headline, date } = props;
    return (
        <div className="article-header-wrapper">
            <ArticleAction name={"< Go to results page"} webURL={"/"}/>
            <div className="article-header">
                <ArticleHeadline headline={headline} />
                <ArticleSubtitle subtitle={formatDate(date)}/>
            </div>
        </div>
    );
}

export default ArticleHeader;
