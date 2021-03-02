import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import LanguageOutlinedIcon from '@material-ui/icons/LanguageOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';

const Header = () => {
  return(
    <header>
      <div className="nav-wraper">
      <div className="top-nav">
        <div className="top-nav-left">
          <LanguageOutlinedIcon />
          <a>Other countries / Regions</a>
          <LocationOnOutlinedIcon />
          <a>Stores</a>
        </div>
        <div className="top-nav-right">
          <AccountCircleIcon />
          <a>Login</a>
          <FavoriteBorderIcon />
        </div>
      </div>
      <div className="title">
        <h1>SWAROVSKI</h1>
      </div>
      <nav className="main-nav">
        <ul>
          <li><a>Jewelry</a></li>
          <li><a>Watches</a></li>
          <li><a>Accessories</a></li>
          <li><a>Decorations</a></li>
          <li><a>Gifts</a></li>
          <SearchOutlinedIcon />
        </ul>
      </nav>
      </div>
      <div className="gift">
        <div>
          <h2>Swarovski Gift Guide</h2>
          <h3>Seeking inspiration for gift ideas? Our gift guide is the best place to start.</h3>
        </div>
        <div className="cta-buttons">
          <button>Shop now</button>
          <button>Discover more</button>
        </div>
      </div>
    </header>
  )
}

export default Header
