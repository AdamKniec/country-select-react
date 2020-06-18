import React from "react";
import "./App.scss";
import Nav from "./components/Nav";
import CountryList from "./components/CountryList";

function App() {
  return (
    <div className="App">
      <Nav />
      <div>
        <CountryList />
      </div>
    </div>
  );
}

export default App;
