import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBomb, faFlag, faFlagCheckered, faSadCry } from '@fortawesome/free-solid-svg-icons'
import "./Minesweeper.css";
import { faSmileWink } from '@fortawesome/free-regular-svg-icons';

function Minesweeper() {
    document.addEventListener('contextmenu', handelRightClick);

    const [score, setScore] = useState(0);

    const [tileSize, setTileSize] = useState(50); 
    const [flagCount, setFlagCount] = useState(10); 
    const [gameOver, setGameOver] = useState(false);
    let bombsArray = shuffle([ ...Array(100).keys() ].map( i => i+1));
    bombsArray.length = 10    
    const [bombs, setBombs] = useState(bombsArray);
    
    let grid = []; 
    let nb = [];
    const rowColumnCount = flagCount === 10 ? 10 : (flagCount === 40 ? 18 : 24);
    [ ...Array(100).keys() ].forEach(function(index){
        let insertIndex = parseInt(index/rowColumnCount);
        if(!grid[insertIndex]) {
            grid[insertIndex] = []
        }
        if(bombs.indexOf(index)===-1) {
            nb.push(index)
        }
        grid[insertIndex].push({id:index, hasBomb: bombs.indexOf(index) > -1, opend: false, flagged: false});
    });
    const [noneBombTiles, setNoneBombTiles] = useState(nb);
    const [tiles, setTile] = useState(grid); 
    const [win, setWin] = useState(false);
    
    function playAgain() {
        const count = parseInt(document.getElementById("level").value);
        setFlagCount(count);

        setCounter(0);
        setGameOver(false);

        let arrayLength = count === 10 ? 100 : (count === 40 ? 324 : 576);
        const rowColumnCount = count === 10 ? 10 : (count === 40 ? 18 : 24);
        let bombsArray = shuffle([ ...Array(arrayLength).keys() ].map( i => i+1));
        bombsArray.length = count;
        setBombs(bombsArray);
        let grid = []; 
        let nb = [];
        [ ...Array(arrayLength).keys() ].forEach(function(index){
            let insertIndex = parseInt(index/rowColumnCount);
            if(!grid[insertIndex]) {
                grid[insertIndex] = []
            }
            if(bombsArray.indexOf(index)===-1) {
                nb.push(index)
            }
            grid[insertIndex].push({id:index, hasBomb: bombsArray.indexOf(index) > -1, opend: false, flagged: false});
        });
        setNoneBombTiles(nb);
        setTile(grid);      
        
        getHighScore();
    }

    function getHighScore() {

        const getScoreFromLS = localStorage.getItem("score");
        if(getScoreFromLS) {
            const level = document.getElementById("level").value;
            const s = JSON.parse(getScoreFromLS)[level];
            if(s) {
                setScore(s);
            } else {
                setScore(0);
            }
        }          
    }

    function setHighScore() {
        let getScoreFromLS = localStorage.getItem("score");
        const level = document.getElementById("level").value;
        if(!getScoreFromLS) {
            getScoreFromLS = {};
            getScoreFromLS[level] = {};
            getScoreFromLS[level] = counter;
        } else {
            getScoreFromLS = JSON.parse(getScoreFromLS);
            if(getScoreFromLS[level]) {
                if(counter < getScoreFromLS[level]) {
                    getScoreFromLS[level] = counter;
                }
            } else {
                getScoreFromLS[level] = {};
                getScoreFromLS[level] = counter;
            }
        }
        localStorage.setItem("score", JSON.stringify(getScoreFromLS));
        setScore(getScoreFromLS[level]);        
    }
    

    function setTileSizeOnChange(e) {
        setTileSize(Number(e.target.value));
        if(Number(e.target.value) === 10) {
            setFlagCount(10);
        } else if(Number(e.target.value) === 40) {
            setFlagCount(40);
        } else {
            setFlagCount(99);
        }
        playAgain();
    }

    function shuffle(array) {
        var counter = array.length, temp, index;
    
        // While there are elements in the array
        while (counter--) {
          // Pick a random index
          index = (Math.random() * counter) | 0;
    
          // And swap the last element with it
          temp = array[counter];
          array[counter] = array[index];
          array[index] = temp;
        }
    
        return array;
      }

    function openAllBombsOnGamveOver() {
        const newTiles = [...tiles];
        newTiles.forEach(element => {
            element.forEach(element1 => {
                if(element1.hasBomb) {
                    element1.opend = true;
                }                
            });
        });
        setTile(newTiles);
    }

      function openTdOnClick(t) {
        const rowColumnCount = flagCount === 10 ? 10 : (flagCount === 40 ? 18 : 24);
        if(tiles[parseInt(t.id/rowColumnCount)][t.id%rowColumnCount].opend || tiles[parseInt(t.id/rowColumnCount)][t.id%rowColumnCount].flagged) {
            return;
        }     
        if(t.hasBomb) {
            setGameBegin(false);
            setGameOver(true);
            openAllBombsOnGamveOver();
        } else {
            openTd(t);
        }
      }

      function openTd(t) {
        if(gameOver) {
            return;
        }
        setGameBegin(true);
        const rowColumnCount = flagCount === 10 ? 10 : (flagCount === 40 ? 18 : 24);
        const newTiles = [...tiles];
        if(newTiles[parseInt(t.id/rowColumnCount)][t.id%rowColumnCount].opend || newTiles[parseInt(t.id/rowColumnCount)][t.id%rowColumnCount].flagged) {
            return;
        }
        newTiles[parseInt(t.id/rowColumnCount)][t.id%rowColumnCount].opend = true; 
        //remove from array if opened from array to track winning
        const nbIndex = noneBombTiles.indexOf(newTiles[parseInt(t.id/rowColumnCount)][t.id%rowColumnCount].id);
        let nb = noneBombTiles;
        nb.splice(nbIndex, 1);
        setNoneBombTiles(nb);
        if(noneBombTiles.length === 0) {            
            setHighScore();
            setWin(true);
            setGameBegin(false);
            partyPoppers();
        }
        
        if(t.hasBomb) {
            setGameBegin(false);
            setGameOver(true);
        } else {
            checkAdjacentTiles(t);            
        }
        setTile(newTiles);
      }

      function partyPoppers() {
        window.party.confetti(document.body);
        window.party.confetti(document.body);
        window.party.confetti(document.body);
        window.party.confetti(document.body);
        setTimeout(() => {
          window.party.confetti(document.body);
          window.party.confetti(document.body);
          window.party.confetti(document.body);              
        }, 1000);
        setTimeout(() => {
          window.party.confetti(document.body);
          window.party.confetti(document.body);
          window.party.confetti(document.body); 
        }, 2000);          
      }

      function checkAdjacentTiles(t) {
          //Check nearby tiles has bomb 
          const rowColumnCount = flagCount === 10 ? 10 : (flagCount === 40 ? 18 : 24);
          let bombCount = 0;
          const topIndex = t.id - rowColumnCount;
          let topItem;
          
          if(topIndex >= 0) {
            topItem = tiles[parseInt(topIndex/rowColumnCount)][topIndex%rowColumnCount];
            if(topItem.hasBomb) {
                bombCount++;
            }
          }

          const topLeftIndex = topIndex - 1;
          let topLeftItem;
          
          if(topLeftIndex > 0 && parseInt(topIndex/rowColumnCount) === parseInt(topLeftIndex/rowColumnCount)) {
            topLeftItem = tiles[parseInt(topLeftIndex/rowColumnCount)][topLeftIndex%rowColumnCount];
            if(topLeftItem.hasBomb) {
                bombCount++;
            }
          }

          const topRightIndex = topIndex + 1;
          let topRightItem;
          
          if(topRightIndex > 0 && parseInt(topIndex/rowColumnCount) === parseInt(topRightIndex/rowColumnCount)) {
            topRightItem = tiles[parseInt(topRightIndex/rowColumnCount)][topRightIndex%rowColumnCount];
            if(topRightItem.hasBomb) {
                bombCount++;
            }
          }

          const bottomIndex = t.id + rowColumnCount;
          let bottomItem;
          
          if(bottomIndex<tiles.length*rowColumnCount) {
            bottomItem = tiles[parseInt(bottomIndex/rowColumnCount)][bottomIndex%rowColumnCount];
            if(bottomItem.hasBomb) {
                bombCount++;
            }
          }

          const bottomLeftIndex = bottomIndex - 1;
          let bottomLeftItem;
          
          if(bottomLeftIndex<tiles.length*rowColumnCount && parseInt(bottomIndex/rowColumnCount) === parseInt(bottomLeftIndex/rowColumnCount)) {
            bottomLeftItem = tiles[parseInt(bottomLeftIndex/rowColumnCount)][bottomLeftIndex%rowColumnCount];
            if(bottomLeftItem.hasBomb) {
                bombCount++;
            }
          }

          const bottomRightIndex = bottomIndex + 1;
          
          let bottomRightItem;
          if(bottomRightIndex<tiles.length*rowColumnCount && parseInt(bottomIndex/rowColumnCount) === parseInt(bottomRightIndex/rowColumnCount)) {
            bottomRightItem = tiles[parseInt(bottomRightIndex/rowColumnCount)][bottomRightIndex%rowColumnCount];
            if(bottomRightItem.hasBomb) {
                bombCount++;
            }
          }

          const previousIndex = t.id - 1;
          
          let previousItem;
          if(t.id%rowColumnCount>0) {
            previousItem = tiles[parseInt(previousIndex/rowColumnCount)][previousIndex%rowColumnCount];
            if(previousItem.hasBomb) {
                bombCount++;
            }
          }

          const nextIndex = t.id + 1;
          
          let nextItem;
          if(t.id%rowColumnCount<rowColumnCount-1) {
            nextItem = tiles[parseInt(nextIndex/rowColumnCount)][nextIndex%rowColumnCount];
            if(nextItem.hasBomb) {
                bombCount++;
            }
          }
          if(bombCount === 0) {
              t.bombCount = 0; //open all the cells when bomb count is zero
              if(topItem) {
                openTd(topItem);
              }
              if(bottomItem) {
                openTd(bottomItem);
              }
              if(previousItem) {
                openTd(previousItem);
              }
              if(nextItem) {
                openTd(nextItem);
              }
          } else {
              t.bombCount = bombCount;
          }
          
      }

      function onTdMouseDown(e, t) {        
        const count = parseInt(document.getElementById("level").value);
        const rowColumnCount = count === 10 ? 10 : (count === 40 ? 18 : 24);
        const newTiles = [...tiles];
        if(flagCount === 0 && !newTiles[parseInt(t.id/rowColumnCount)][t.id%rowColumnCount].flagged) {
            return;//Flag count is zero and we don't allow flags anymore
        }
        if(newTiles[parseInt(t.id/rowColumnCount)][t.id%rowColumnCount].opend || e.nativeEvent.which!==3) {
            return;
        }
        let fC = flagCount;
        newTiles[parseInt(t.id/rowColumnCount)][t.id%rowColumnCount].flagged = !newTiles[parseInt(t.id/rowColumnCount)][t.id%rowColumnCount].flagged; 
        if(newTiles[parseInt(t.id/rowColumnCount)][t.id%rowColumnCount].flagged) {
            fC -= 1;
            setFlagCount(fC);
        } else {
            fC += 1;
            setFlagCount(fC);
        }
        setTile(newTiles);
        
      }
      function handelRightClick(e) {
          e.preventDefault();
      }

      const [gameBegin, setGameBegin] = useState(false);
      const [counter, setCounter] = useState(0);
      useEffect(() => {
        let intervalId;
        if(gameBegin) {
            intervalId = setInterval(() => {
                setCounter(counter => counter + 1);
            }, 1000)
        }
        
        getHighScore();

        return () => {
            clearInterval(intervalId);
            document.removeEventListener('contextmenu', handelRightClick);
        }
        
        
    }, [gameBegin,  counter]);

    function getClassName() {
        return bombs.length === 10 ? "easy" : "medium";
    }

    return(
        <div className="m-auto">
            <div className="m-header">
                <select id="level" onChange={(event)=>setTileSizeOnChange(event)}>
                    <option value="10">Easy</option>
                    <option value="40">Medium</option>
                    <option value="99">Hard</option>
                </select>
                <div className="time">
                    {counter > 9 ? counter : "0"+counter}
                    {gameOver ? <FontAwesomeIcon icon={faSadCry} /> : ""}
                    {win ? <FontAwesomeIcon icon={faSmileWink} /> : ""}
                </div>
                <div className="flag"><FontAwesomeIcon icon={faFlag} />{flagCount}</div>
            </div>            
            <div className='score'>
                <div>
                    Score: <span>{score}</span>
                </div>
                
                <button className='playagain' onClick={playAgain}>Play again</button>
            </div>            
            <table className={getClassName()}>
                <tbody>
                    {
                        tiles.map((tile, index) => {
                            return <tr key={index}>{
                                tile.map(t=> {return <td className={t.opend ? `opened bomb-${t.bombCount}` : ""} onMouseDown={(e)=>{onTdMouseDown(e, t)}} onClick={() => {openTdOnClick(t)}} key={t.id}>
                                    {
                                        t.hasBomb && t.opend ? <FontAwesomeIcon icon={faBomb} /> : ""
                                    }
                                    {
                                        t.opend && !t.hasBomb && t.bombCount > 0 ?  t.bombCount : ""
                                    }
                                    {
                                        !t.opend && t.flagged ?  <FontAwesomeIcon icon={faFlagCheckered} /> : ""
                                    }
                                </td>})
                            }</tr>
                        })
                    }
                </tbody>
            </table>

            
        </div>
    )    
}
export default Minesweeper;
