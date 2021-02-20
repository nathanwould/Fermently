import axios from "axios";
import { Route, Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { baseURL, config } from "../services";

function Details(props) {
  const params = useParams();
  // const [project, setProject] = useState([])

  // useEffect(() => {
  //   if (props.projects) {
  // const dataPlease = props.projects.find((project) => params.id === project.id)
  //     setProject(dataPlease)
  //   }
  // }, [props.projects])

  const project = props.projects.find((project) => project.id === params.id)
  console.log(project)



  const deleteProject = async () => {
    const projectURL = `${baseURL}/${props.projects.id}`;
    await axios.delete(projectURL, config);
    props.setToggleFetch((curr) => !curr)
  }

  return (
    <div id="details">
      <h2>{project.fields.title}</h2>
      <h4>{project.fields.date}</h4>
      <h4>{project.fields.field1}</h4>
      <h4>{project.fields.field2}</h4>
      <h4>{project.fields.field3}</h4>
      <h4>{project.fields.field4}</h4>
      <h4>{project.fields.field5}</h4>
      <h4>{project.fields.field6}</h4>
      <h4>{project.fields.field7}</h4>
      <h4>{project.fields.field8}</h4>
      <p>{project.fields.ingredients}</p>
      <p>{project.fields.method}</p>
      <p>{project.fields.notes}</p> 
      <Link to={`/edit/${project.id}`}>
        <button id="editButton">Edit</button>
      </Link>
      <button onClick={deleteProject}>Delete Project</button>
    </div>
  )
}

export default Details;