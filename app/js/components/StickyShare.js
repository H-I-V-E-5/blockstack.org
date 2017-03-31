import { Component, PropTypes } from 'react'
import {
  ShareButtons,
  ShareCounts,
  generateShareIcon
} from 'react-share';

const { FacebookShareButton, TwitterShareButton } = ShareButtons;
const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');

class StickyShare extends Component {
  static propTypes: {
    description: PropTypes.string,
    imgUrl: PropTypes.string.isRequired,
    shareUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props)
  }

  render() {
    const {
      description,
      imgUrl,
      shareUrl,
      title,
    } = this.props;

    return (
      <div className="sticky-share">
        <FacebookShareButton
          url={shareUrl}
          picture={imgUrl}
          title={title}
          description={description}
        >
          <FacebookIcon
            size="30"
            iconBgStyle={{fill: 'transparent'}}
            logoFillColor="#fff"
            round
          />
        </FacebookShareButton>
        <br/>
        <TwitterShareButton
          url={shareUrl}
          title={title}
        >
          <TwitterIcon
            size="30"
            iconBgStyle={{fill: 'transparent'}}
            logoFillColor="#fff"
            round
          />
        </TwitterShareButton>
      </div>
    );
  }
}

export default StickyShare
