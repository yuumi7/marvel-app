import { useState, useEffect, useRef } from "react";
import AppHeader from "../appHeader/AppHeader";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="app">
        <AppHeader />
        <main>
          <Routes>
            <Route path="/" element={<MainPage />}></Route>
            <Route path="/comics" element={<ComicsPage />}></Route>
          </Routes>
          <Route>
            <Route path="*"></Route>
          </Route>
        </main>
      </div>
    </Router>
  );
};
export default App;
