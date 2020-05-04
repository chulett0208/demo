import React, {useState} from 'react';

const colors=["red", "blue", "green"];

function ColorButton() {
  const[colorIndex, setColorIndex]=useState(0);

  function getColor()
  {
    return colors[colorIndex % 3];
  }

  return(
    <div>
        <button style={{color: getColor()}}
        onClick={()=>setColorIndex(colorIndex+1)}>Change</button>
    </div>
  );
}

export default ColorButton;