import { noop } from "lodash";
import "./article-action.css";

interface Props {
  name: string;
  cssClass?: string;
  webURL?: string;
  handleAction?: () => void;
}

const ArticleAction = (props: Props) => {
  const { name, cssClass, webURL, handleAction } = props;
  return (
    <a
      href={webURL}
      className={`article-action${
        cssClass ? ` article-action-${cssClass}` : ""
      }`}
      onClick={handleAction}
    >
      {" "}
      {name}{" "}
    </a>
  );
};

ArticleAction.defaultProps = {
  webLink: "",
  handleAction: noop,
};

export default ArticleAction;
