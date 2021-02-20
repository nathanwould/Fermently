import axios from "axios";
import { useState, useEffect } from "react";
import { Link, Route } from "react-router-dom";
import { baseURL, config } from "./services/index.js";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import Wine from "./components/Wine";
import Beer from "./components/Beer";
import Pickles from "./components/Pickles";
import Form from "./components/Form";
import './App.css';
import Details from "./components/Details.jsx";

// console.log(baseURL, config)

function App() {
  const [projects, setProjects] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const resp = await axios.get(baseURL, config);
      setProjects(resp.data.records)
      // console.log(projects)
    };
    getData();
  }, [toggleFetch]);

    return (
      <div className="App">
        <Nav />
        <Sidebar id="sideBar" projects={projects} setToggleFetch={setToggleFetch}/>
        <Route exact path="/">
          <Home id="home" />
        </Route>
        <Route path="/wine">
          <Wine projects={projects} />
        </Route>
        <Route path="/beer">
          <Beer projects={projects} />
        </Route>
        <Route path="/pickles">
          <Pickles projects={projects} />
        </Route>
        <Route path="/new">
        <Form projects={projects} setToggleFetch={setToggleFetch}/>
        </Route>
        <Route id="details" path="/project/:id">
          <Details projects={projects} setToggleFetch={setToggleFetch}/>
        </Route>
        <Route id="edit" path="/edit/:id">
          <Form projects={projects} setToggleFetch={setToggleFetch}/>
        </Route>
      </div>
    );
}

export default App;
