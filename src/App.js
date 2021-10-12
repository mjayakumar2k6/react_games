import React from 'react'
import MemoryGame from './Memory/MemoryGame';
import Minesweeper from './Minesweeper/Minesweeper'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBomb, faLightbulb } from '@fortawesome/free-solid-svg-icons'

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
            <a href="/memory">              
              <FontAwesomeIcon icon={faLightbulb} />
              <span>Memory</span>
            </a>
            <a href="/minesweeper">
              <FontAwesomeIcon icon={faBomb}/>
              <span>Minesweeper</span>
            </a>
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
