import React from "react";
import { Router, Route } from "react-router-dom";
import StreamCreate from "./stream/StreamCreate";
import StreamEdit from "./stream/StreamEdit";
import StreamDelete from "./stream/StreamDelete";
import StreamList from "./stream/StreamList";
import StreamShow from "./stream/StreamShow";
import Header from "./Header";
import history from "../history";

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Route path="/" exact component={StreamList}></Route>
          <Route path="/streams/new" exact component={StreamCreate}></Route>
          <Route path="/streams/edit" exact component={StreamEdit}></Route>
          <Route path="/streams/delete" exact component={StreamDelete}></Route>
          <Route path="/streams/show" exact component={StreamShow}></Route>
        </div>
      </Router>
    </div>
  );
};

export default App;
