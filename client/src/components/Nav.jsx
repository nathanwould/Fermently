import { Link } from "react-router-dom";


function Nav(props) {
  return (
    <div className="nav">
      <ul className="nav-ul">
      <Link to="/">
        <li id="siteTitle">Fermently</li>
      </Link>
        <Link to="/New">
          <li className="navNew">Add New</li>
        </Link>
        <Link className="navMisc" to="/misc">
          <li>Misc</li>
        </Link>
        <Link to="/pickles">
          <li className="navPickles">Pickles</li>
        </Link>
        <Link to="/beer">
          <li className="navBeer">Beer</li>
        </Link>
        <Link to="/wine">
          <li className="navWine">Wine</li>
        </Link>
        </ul>
    </div>
  );
}

export default Nav;
