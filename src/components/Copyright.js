import FacebookIcon from '@material-ui/icons/Facebook';
import PinterestIcon from '@material-ui/icons/Pinterest';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';

const Copyright = () => {
  return(
    <div className="copyright-container">
      <div className="copyright">
        <div className="copyright-text">
          <p>Copyright ⓒ 2021 Swarovski. All rights reserved. SWAROVSKI and the SWAN logo are registered and trademarks of Swarovski AG</p>
        </div>
        <div className="social">
          <a><FacebookIcon fontSize="medium"/></a>
          <a><PinterestIcon fontSize="medium"/></a>
          <a><TwitterIcon fontSize="medium"/></a>
          <a><InstagramIcon fontSize="medium"/></a>
          <a><YouTubeIcon fontSize="large"/></a>
        </div>
      </div>
    </div>
  )
}

export default Copyright
