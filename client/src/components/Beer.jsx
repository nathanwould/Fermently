import { Link } from "react-router-dom";

function Beer(props) {
  if (!props) {
    return (
      <div>
        <h3>Loading...</h3>
      </div>
    );
  } else {
    const beers = props.projects.records.filter(
      (project) => project.fields.category === "Beer"
    );

    return (
      <div className="Beers">
        <h2>Beers</h2>
        {beers.map((beer, idx) => (
          <div className="Beer">
            <Link key={idx} to={`/${beer.id}`}>
              <h4>{beer.fields.title}</h4>
            </Link>
          </div>
        ))}
      </div>
    );
  }
}

export default Beer;
