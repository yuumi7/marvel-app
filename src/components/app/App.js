import { useState, useEffect, useRef } from "react";
import AppHeader from "../appHeader/AppHeader";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MainPage, ComicsPage, Page404, SingleComicPage } from "../pages";

const App = () => {
  return (
    <Router>
      <div className="app">
        <AppHeader />
        <main>
          <Switch>
            <Route exact path="/">
              <MainPage />
            </Route>
            <Route exact path="/comics">
              <ComicsPage />
            </Route>
            <Route exact path="/comics/:comicId">
              <SingleComicPage />
            </Route>
          </Switch>
          <Route>
            <Route path="*">
              <Page404 />
            </Route>
          </Route>
        </main>
      </div>
    </Router>
  );
};
export default App;
