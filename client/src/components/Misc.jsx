import { Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";


function Misc(props) {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
      if (props.projects) {
    const dataPlease = props.projects?.filter(
      (project) => project.fields.category === "Misc"
    );
        setProjects(dataPlease)
      }
    }, [props.projects])
  
return (
      <div className="categoryContainer">
        <h2>Misc.</h2>
        {projects.map((project, idx) => (
            <Link key={idx} to={`/project/${project.id}`}>
          <div className="card">
              <h4>{project.fields.title}</h4>
              <p id="cardDate">{project.fields.date}</p>
              <p className="cardCTA">View Details</p>
          </div>
            </Link>
        ))}
        </div>
    );
  }


export default Misc;