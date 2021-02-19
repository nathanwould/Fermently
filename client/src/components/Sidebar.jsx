import { Route, Link } from "react-router-dom";
import Wine from "./Wine";
import Beer from "./Beer";
import Pickles from "./Pickles";
import Form from "./Form";

function Sidebar(props) {
  const projects = props.projects;
  // console.log(projects);
  return (
    <div className="sideBar">
      <Link to="/wine">
        <h4>Wine</h4>
      </Link>
      <Link to="/beer">
        <h4>Beer</h4>
      </Link>
      <Link to="/pickles">
        <h4>Pickles</h4>
      </Link>
      <Link to="/New">
      <h3>Add New</h3>
      </Link>
    </div>
  );
}

export default Sidebar;
