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
      <div className="category">
        <h2>Pickles</h2>
        {pickles.map((pickle, idx) => (
          <div className="card">
            <Link key={idx} to={`/misc/${pickle.id}`}>
              <h4>{pickle.fields.title}</h4>
            </Link>
          </div>
        ))}
      </div>
    );
  }


export default Pickles;
