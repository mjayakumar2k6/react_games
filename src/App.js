import React from 'react'
import MemoryGame from './MemoryGame';
import Minesweeper from './Minesweeper'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>

        <div className="nav">
          <input type="checkbox" id="nav-check"/>
          <div className="nav-header">
            <div className="nav-title">
              Games
            </div>
          </div>
          <div className="nav-btn">
            <label htmlFor="nav-check">
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>

          <div className="nav-links">
            <a href="/memory">Memory</a>
            <a href="/minesweeper">Minesweeper</a>
          </div>
        </div>

        <Switch>
          <Route exact path="/">
            <MemoryGame></MemoryGame>
          </Route>
          <Route path="/memory">
            <MemoryGame></MemoryGame>
          </Route>
          <Route path="/minesweeper">
            <Minesweeper></Minesweeper>
          </Route>
        </Switch>        
      </div>
    </Router>
  );
}

export default App;
