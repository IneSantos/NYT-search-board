import {noop} from "lodash";
import "./article-action.css";

interface Props {
  name: string,
  webURL?: string,
  handleAction?: () => void
}

const ArticleAction = (props: Props) => {
  const {name, webURL,  handleAction} = props;
  return (
    <a href={webURL} className={`article-action article-action-${name}`} onClick={handleAction}> {name} </a>
  );
}

ArticleAction.defaultProps ={
  webLink: "",
  handleAction: noop
}

export default ArticleAction;