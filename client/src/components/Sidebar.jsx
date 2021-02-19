import { Link } from "react-router-dom";
import Wine from "./Wine";
import Beer from "./Beer";
import Pickles from "./Pickles";
import Form from "./Form";

function Sidebar(props) {
  const projects = props.projects;
  // console.log(projects);
  return (
    <div className="sideBar">
      <Wine projects={projects} />
      <Beer projects={projects} />
      <Pickles projects={projects} />
      <Form projects={projects} setToggleFetch={props.setToggleFetch}/>
    </div>
  );
}

export default Sidebar;
