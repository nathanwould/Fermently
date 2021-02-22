import axios from "axios";
import { Route, Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { baseURL, config } from "../services";

function Details(props) {
  const params = useParams();

  const project = props.projects.find((project) => project.id === params.id)
  console.log(project)

  const deleteProject = async () => {
    const projectURL = `${baseURL}/${props.projects.id}`;
    await axios.delete(projectURL, config);
    props.setToggleFetch((curr) => !curr)
  }

  return (
    <div id="details">
      <h2 id="detailTitle">{project.fields.title}</h2>
      <h4 id="date">Date: {project.fields.date}</h4>
      <div id="fields">
        <h4>{project.fields.field1}</h4>
        <h4>{project.fields.field2}</h4>
        <h4>{project.fields.field3}</h4>
        <h4>{project.fields.field4}</h4>
        <h4>{project.fields.field5}</h4>
        <h4>{project.fields.field6}</h4>
        <h4>{project.fields.field7}</h4>
        <h4>{project.fields.field8}</h4>
        </div>
      <div className="ingredientsDiv">
      <h4>Ingredients</h4>
        <p>{project.fields.ingredient1}</p>
        <p>{project.fields.ingredient2}</p>
        <p>{project.fields.ingredient3}</p>
        <p>{project.fields.ingredient4}</p>
        <p>{project.fields.ingredient5}</p>
        <p>{project.fields.ingredient6}</p>
        <p>{project.fields.ingredient7}</p>
        <p>{project.fields.ingredient8}</p>
        <p>{project.fields.ingredient9}</p>
        <p>{project.fields.ingredient10}</p>
        <p>{project.fields.ingredient11}</p>
        <p>{project.fields.ingredient12}</p>
      </div>
      <div className="methodDiv">
      <h4>Method</h4>
        <p>{project.fields.method1}</p>
        <p>{project.fields.method2}</p>
        <p>{project.fields.method3}</p>
        <p>{project.fields.method4}</p>
        <p>{project.fields.method5}</p>
        <p>{project.fields.method6}</p>
        <p>{project.fields.method7}</p>
        <p>{project.fields.method8}</p>
      </div>
      <p>Notes: {project.fields.notes}</p> 
      <Link to={`/edit/${project.id}`}>
        <button id="editButton">Edit</button>
      </Link>
      <button onClick={deleteProject}>Delete Project</button>
    </div>
  )
}

export default Details;