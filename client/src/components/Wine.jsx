import { Route, Link } from "react-router-dom";
import Details from "./Details";

function Wine(props) {
  if (!props) {
    return (
      <div>
        <h3>Loading...</h3>
      </div>
    );
  } else {
    const wines = props.projects.records.filter(
      (project) => project.fields.category === "Wine"
    );

    return (
      <div className="wines">
        <h2>Wines</h2>
        {wines.map((wine, idx) => (
          <div className="wine">
            <Link key={idx} to={`/${wine.id}`}>
              <h4>{wine.fields.title}</h4>
            </Link>
            <Details />
          </div>
        ))}
        </div>
    );
  }
}

export default Wine;
