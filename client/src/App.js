import axios from "axios";
import { useState, useEffect } from "react";
import { Link, Route } from "react-router-dom";
import { baseURL, config } from "./services/index.js";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import './App.css';

// console.log(baseURL, config)

function App() {
  const [projects, setProjects] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const resp = await axios.get(baseURL, config);
      setProjects(resp.data)
      // console.log(projects)
    };
    getData();
  }, [toggleFetch]);
  
    return (
      <div className="App">
        <Nav />
        <Sidebar id="sideBar" projects={projects} setToggleFetch={setToggleFetch}/>
        <Home />
      </div>
    );
}

export default App;
