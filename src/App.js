import React from "react";
import { Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import Navbar from "./web/Components/Navbar";
import AddBucket from "./web/Components/Buckets/AddBucket";
import ListBuckets from "./web/Components/Buckets/ListBuckets";
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
function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header" style={{ marginTop: "7em" }}>
        <Container text style={{ marginTop: "7em" }}>
          <Route path="/"></Route>
          <Route exact path="/buckets/add">
            <AddBucket />
          </Route>
          <Route exact path="/buckets/list">
            <ListBuckets buckets={buckets} />
          </Route>
        </Container>
      </header>
    </div>
  );
}

export default App;
