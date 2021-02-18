import { Link } from "react-router-dom";

function Wine(props) {
  console.log(props.projects);
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
    console.log(wines);
    return (
      <div className="wines">
        <h2>Wines</h2>
        {wines.map((wine, idx) => (
          <div className="wine">
            <Link key={idx} to={`/wine/${wine.fields.title}`}>
              <h4>{wine.fields.title}</h4>
            </Link>
          </div>
        ))}
      </div>
    );
  }
}

export default Wine;
