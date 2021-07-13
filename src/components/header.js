import "./styles/header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="area">
      <nav className="main-menu">
        <ul>
          <li className="side-brand">
            <i className="fa">
              <img
                src="/news_logo.png"
                width="56"
                height="56"
                alt="Brand logo"
              />
            </i>
            <span className="nav-text menubar-brand">T NEWS</span>
          </li>
          <li>
            <Link to="/">
              <i className="fa fa-home fa-2x"></i>
              <span className="nav-text">Home</span>
            </Link>
          </li>

          <li className="has-subnav">
            <Link to="/headlines/business">
              <i className="fa fas fa-briefcase fa-2x"></i>
              <span className="nav-text">business</span>
            </Link>
          </li>

          <li className="has-subnav">
            <Link to="/headlines/entertainment">
              <i className="fa fas fa-film fa-2x"></i>
              <span className="nav-text">entertainment</span>
            </Link>
          </li>

          <li className="has-subnav">
            <Link to="/headlines/general">
              <i className="fa far fa-comments fa-2x"></i>
              <span className="nav-text">general</span>
            </Link>
          </li>

          <li className="has-subnav">
            <Link to="/headlines/health">
              <i className="fa fas fa-heartbeat fa-2x"></i>
              <span className="nav-text">health</span>
            </Link>
          </li>

          <li className="has-subnav">
            <Link to="/headlines/science">
              <i className="fa fas fa-atom fa-2x"></i>
              <span className="nav-text">science</span>
            </Link>
          </li>

          <li className="has-subnav">
            <Link to="/headlines/sports">
              <i className="fa fas fa-football-ball fa-2x"></i>
              <span className="nav-text">sports</span>
            </Link>
          </li>

          <li className="has-subnav">
            <Link to="/headlines/technology">
              <i className="fa fas fa-space-shuttle fa-2x"></i>
              <span className="nav-text">technology</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
