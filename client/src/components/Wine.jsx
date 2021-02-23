import { Link } from "react-router-dom";
import { useEffect, useState } from "react";


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
      <div className="categoryContainer">
    <h2>Wines</h2>
    <div className="category">
        {wines.map((wine, idx) => (
            <Link key={idx} to={`/project/${wine.id}`}>
          <div className="card">
              <h4>🥂 {wine.fields.title}</h4>
              <p id="cardDate">{wine.fields.date}</p>
              <p className="cardCTA">View Details</p>
          </div>
            </Link>
        ))}
          </div>
        </div>
    );
  }

export default Wine;