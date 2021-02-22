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
      <div className="category">
        <h2>Misc.</h2>
        {projects.map((project, idx) => (
          <div className="card">
            <Link key={idx} to={`/project/${project.id}`}>
              <h4>{project.fields.title}</h4>
            </Link>
          </div>
        ))}
        </div>
    );
  }


export default Misc;