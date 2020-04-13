import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Search } from "./components/Search";
import { Users } from "./components/Users";

function App() {
  return (
    <div className="App">
      <h1>Please submit a person: </h1>
      <Search />
      <Users />
    </div>
  );
}

export default App;
