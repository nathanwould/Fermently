import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Pickles(props) {
  const [pickles, setPickles] = useState([]);

  useEffect(() => {
      if (props.projects) {
    const dataPlease = props.projects?.filter(
      (project) => project.fields.category === "Pickles"
    );
        setPickles(dataPlease)
      }
    }, [props.projects])

    return (
      <div className="categoryContainer">
        <h2>Pickles</h2>
        {pickles.map((pickle, idx) => (
            <Link key={idx} to={`/project/${pickle.id}`}>
          <div className="card">
              <h4>{pickle.fields.title}</h4>
              <p id="cardDate">{pickle.fields.date}</p>
              <p className="cardCTA">View Details</p>
          </div>
            </Link>
        ))}
      </div>
    );
  }


export default Pickles;
