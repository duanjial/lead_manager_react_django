import React, { Component, Fragment } from "react";
import ReactDom from "react-dom";
import Header from "./layout/Header";
import Dashboard from "./leads/Dashboard";

import store from "../store";
import { Provider } from "react-redux";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <Header></Header>
          <div className="container">
            <Dashboard></Dashboard>
          </div>
        </Fragment>
      </Provider>
    );
  }
}

ReactDom.render(<App />, document.getElementById("app"));
