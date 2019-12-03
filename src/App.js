import React from "react";
import { Route } from "react-router-dom";
import { Container } from "semantic-ui-react";

import Navbar from "./web/Components/Navbar";
import ListBuckets from "./web/Components/Buckets/ListBuckets";
import BucketsWrapper from "./containers/Buckets";
const buckets = [
  {
    id: 1,
    title: "This is Title",
    tasks: [
      { id: 1, title: "Done this tommorow", status: false },
      { id: 2, title: "This is for today", status: false }
    ]
  }
];
function App(props) {
  console.log(props);
  return (
    <div className="App">
      <Navbar />
      <header className="App-header" style={{ marginTop: "7em" }}>
        <Container text style={{ marginTop: "7em" }}>
          <Route exact path="/">
            <BucketsWrapper />
            {/* <ListBuckets buckets={buckets} /> */}
          </Route>
        </Container>
      </header>
    </div>
  );
}

export default App;
