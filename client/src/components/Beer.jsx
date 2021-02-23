import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Beer(props) {
  const [beers, setBeer] = useState([]);

  useEffect(() => {
      if (props.projects) {
    const dataPlease = props.projects?.filter(
      (project) => project.fields.category === "Beer"
    );
        setBeer(dataPlease)
      }
  }, [props.projects])
  
    return (
      <div className="categoryContainer">
      <h2>Beers</h2>
      <div className="category">
        {beers.map((beer, idx) => (
          <div className="card">
            <Link key={idx} to={`/project/${beer.id}`}>
              <h4>{beer.fields.title}</h4>
              <p id="cardDate">{beer.fields.date}</p>
            </Link>
          </div>
        ))}
        </div>
        </div>
    );
}

export default Beer;
