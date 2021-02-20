import { Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Details from "./Details";

function Wine(props) {
  const [wines, setWines] = useState([]);

  useEffect(() => {
      if (props.projects) {
    const dataPlease = props.projects?.filter(
      (project) => project.fields.category === "Wine"
    );
        setWines(dataPlease)
      }
    }, [props.projects])
  
return (
      <div className="wines">
        <h2>Wines</h2>
        {wines.map((wine, idx) => (
          <div className="wine">
            <Link key={idx} to={`/project/${wine.id}`}>
              <h4>{wine.fields.title}</h4>
            </Link>
          </div>
        ))}
        </div>
    );
  }


export default Wine;
