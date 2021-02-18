import { Link } from "react-router-dom";

function Pickles(props) {
  console.log(props.projects);
  if (!props) {
    return (
      <div>
        <h3>Loading...</h3>
      </div>
    );
  } else {
    const pickles = props.projects.records.filter(
      (project) => project.fields.category === "Pickles"
    );

    return (
      <div className="Pickles">
        <h2>Pickles</h2>
        {pickles.map((pickle, idx) => (
          <div className="pickle">
            <Link key={idx} to={`/pickle/${pickle.fields.title}`}>
              <h4>{pickle.fields.title}</h4>
            </Link>
          </div>
        ))}
      </div>
    );
  }
}

export default Pickles;
