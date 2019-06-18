import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Elements/Header/Header";
import Home from "./Elements/Home/Home";
import NotFound from "./Elements/NotFound/NotFound";
import Movie from "./Elements/Movie/Movie";
import "./App.css";

function App() {
  return (
    // <div className="">
    //   {/* <Header />
    //   <Home /> */}

    // </div>
    <BrowserRouter>
      <React.Fragment>
        <Header />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/:movieId" component={Movie} exact />
          <Route component={NotFound} />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
