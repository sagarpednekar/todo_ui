import React from "react";
import { Route } from "react-router-dom";
import Home from "./web/Components/Home";
import AddBucket from "./web/Components/Buckets/AddBucket";

import "antd/dist/antd.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/buckets/add">
          <AddBucket />
        </Route>

        {/* <Home /> */}
      </header>
    </div>
  );
}

export default App;
