import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBomb, faFlag } from '@fortawesome/free-solid-svg-icons'
import "./Minesweeper.css";
import { deflateRaw } from 'zlib';

function Minesweeper() {
    const [tileSize, setTileSize] = useState(50); 
    const [flagCount, setFlagCount] = useState(10); 

    let bombsArray = shuffle([ ...Array(100).keys() ].map( i => i+1));
    bombsArray.length = 10    
    const [bombs, setBombs] = useState(bombsArray);
    let grid = []; 
    [ ...Array(100).keys() ].forEach(function(index){
        let insertIndex = parseInt(index/10);
        if(!grid[insertIndex]) {
            grid[insertIndex] = []
        }
        grid[insertIndex].push({id:index, hasBomb: bombsArray.indexOf(index) > -1, opend: false, flagged: false});
    });
    const [tiles, setTile] = useState(grid);  
    

    function getRandomBombs(length) {
        let bombsArray = shuffle([ ...Array(100).keys() ].map( i => i+1));
        bombsArray.length = length;
        return bombsArray;
    }

    function setTileSizeOnChange(e) {
        setTileSize(Number(e.target.value));
        if(Number(e.target.value) === 50) {
            setFlagCount(10);
            setBombs(getRandomBombs(10));
        } else if(Number(e.target.value) === 25) {
            setFlagCount(40);
            setBombs(getRandomBombs(40));
        } else {
            setFlagCount(99);
            setBombs(getRandomBombs(99));
        }
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

      function openTd(t) {
        setGameBegin(true);
        const newTiles = [...tiles];
        if(newTiles[parseInt(t.id/10)][t.id%10].opend) {
            return;
        }
        newTiles[parseInt(t.id/10)][t.id%10].opend = true; 
        if(t.hasBomb) {

        } else {
            checkAdjacentTiles(t);            
        }
        setTile(newTiles);
      }

      function checkAdjacentTiles(t) {
          let bombCount = 0;
          const topIndex = t.id - 10;
          let topItem;
          
          if(topIndex >= 0) {
            topItem = tiles[parseInt(topIndex/10)][topIndex%10];
            if(topItem.hasBomb) {
                bombCount++;
            }
          }

          const topLeftIndex = topIndex - 1;
          let topLeftItem;
          
          if(topLeftIndex > 0 && parseInt(topIndex/10) === parseInt(topLeftIndex/10)) {
            topLeftItem = tiles[parseInt(topLeftIndex/10)][topLeftIndex%10];
            if(topLeftItem.hasBomb) {
                bombCount++;
            }
          }

          const topRightIndex = topIndex + 1;
          let topRightItem;
          
          if(topRightIndex > 0 && parseInt(topIndex/10) === parseInt(topRightIndex/10)) {
            topRightItem = tiles[parseInt(topRightIndex/10)][topRightIndex%10];
            if(topRightItem.hasBomb) {
                bombCount++;
            }
          }

          const bottomIndex = t.id + 10;
          let bottomItem;
          
          if(bottomIndex<tiles.length*10) {
            bottomItem = tiles[parseInt(bottomIndex/10)][bottomIndex%10];
            if(bottomItem.hasBomb) {
                bombCount++;
            }
          }

          const bottomLeftIndex = bottomIndex - 1;
          let bottomLeftItem;
          
          if(bottomLeftIndex<tiles.length*10 && parseInt(bottomIndex/10) === parseInt(bottomLeftIndex/10)) {
            bottomLeftItem = tiles[parseInt(bottomLeftIndex/10)][bottomLeftIndex%10];
            if(bottomLeftItem.hasBomb) {
                bombCount++;
            }
          }

          const bottomRightIndex = bottomIndex + 1;
          
          let bottomRightItem;
          if(bottomRightIndex<tiles.length*10 && parseInt(bottomIndex/10) === parseInt(bottomRightIndex/10)) {
            bottomRightItem = tiles[parseInt(bottomRightIndex/10)][bottomRightIndex%10];
            if(bottomRightItem.hasBomb) {
                bombCount++;
            }
          }

          const previousIndex = t.id - 1;
          
          let previousItem;
          if(t.id%10>0) {
            previousItem = tiles[parseInt(previousIndex/10)][previousIndex%10];
            if(previousItem.hasBomb) {
                bombCount++;
            }
          }

          const nextIndex = t.id + 1;
          
          let nextItem;
          if(t.id%10<9) {
            nextItem = tiles[parseInt(nextIndex/10)][nextIndex%10];
            if(nextItem.hasBomb) {
                bombCount++;
            }
          }
          if(bombCount === 0) {
              t.bombCount = 0; //open all the cells
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

      const [gameBegin, setGameBegin] = useState(false);
      const [counter, setCounter] = useState(0);
      useEffect(() => {
        
        let intervalId;
        if(gameBegin) {
            intervalId = setInterval(() => {
                setCounter(counter => counter + 1);
            }, 1000)
        }

        return () => clearInterval(intervalId);
        
        
    }, [gameBegin,  counter])      
    return(
        <div className="m-auto">

            <div className="m-header">
                <select onChange={(event)=>setTileSizeOnChange(event)}>
                    <option value="50">Easy</option>
                    <option value="25">Medium</option>
                    <option value="20">Hard</option>
                </select>
                <div className="time">{counter > 9 ? counter : "0"+counter}</div>
                <div className="flag"><FontAwesomeIcon icon={faFlag} />{flagCount}</div>
            </div>            
            
            <table>
                <tbody>
                    {
                        tiles.map((tile, index) => {
                            return <tr key={index}>{
                                tile.map(t=> {return <td className={t.opend ? `opened bomb-${t.bombCount}` : ""} onClick={() => {openTd(t)}} key={t.id}>
                                    {
                                        t.hasBomb && t.opend ? <FontAwesomeIcon icon={faBomb} /> : ""
                                    }
                                    {
                                        t.opend && !t.hasBomb && t.bombCount > 0 ?  t.bombCount : ""
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
