import { ShareButtonRectangle, ShareBlockStandard } from "react-custom-share";

interface Props {
  webURL: string;
}

const ShareAction = (props: Props) => {
  const { webURL } = props;
  const FaTwitter = () => <i className="fab fa-twitter-square"></i>;
  const FaFacebook = () => <i className="fab fa-facebook-square"></i>;
  const FaEmail = () => <i className="fas fa-envelope-square"></i>;

  const shareBlockProps = {
    url: webURL,
    button: ShareButtonRectangle,
    buttons: [
      { network: "Twitter", icon: FaTwitter },
      { network: "Facebook", icon: FaFacebook },
      { network: "Email", icon: FaEmail },
    ],
    text: `Give it a try`,
    longtext: `Take a look at this super cool article I have just found.`,
  };

  return <ShareBlockStandard {...shareBlockProps} />;
};

export default ShareAction;
