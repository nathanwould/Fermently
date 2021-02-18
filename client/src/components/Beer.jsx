import { Link } from "react-router-dom";

function Beer(props) {
  console.log(props.projects);
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
    console.log(beers);
    return (
      <div className="Beers">
        <h2>Beers</h2>
        {beers.map((beer, idx) => (
          <div className="Beer">
            <Link key={idx} to={`/beer/${beer.fields.title}`}>
              <h4>{beer.fields.title}</h4>
            </Link>
          </div>
        ))}
      </div>
    );
  }
}

export default Beer;
