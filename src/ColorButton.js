import React, {useState} from 'react';
import './App.css';

const colors=["red", "blue", "green"];
function ColorButton() {
  const[colorIndex, setColorIndex]=useState(0);
  function getColor()
  {
    return colors[colorIndex % 3]
  }
  return(
    <div>
      <p style={{color: getColor()}}>Change Color</p>
  <button onClick={()=>setColorIndex(colorIndex + 1)}>Change</button>
    </div>
  );
}

export default ColorButton;