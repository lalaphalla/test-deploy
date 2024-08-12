import logo from "./logo.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  useEffect(() => {
    axios.get(`http://localhost:3001/api/v1/test`).then((response) => {
      const { data } = response.data;
      setTitle(data[0].name);
      console.log(title);
      // this.setState({ posts });
    });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <h1> {title}</h1>
      </header>
    </div>
  );
}

export default App;
