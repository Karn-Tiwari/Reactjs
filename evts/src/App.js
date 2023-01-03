import React from 'react';
import './index.css';
import { useState } from 'react';


const App = ()=>{
  const purple = "#8e44ad";

  const[bg,setBg] = useState(purple);
  const[name,setName] = useState("Click Me");


  const bgChange = ()=>{
   // console.log("clicked");
  let newBg = "#34495e";
  setBg(newBg);
  setName("Ouch!! 😧");

  };
  const bgBack = ()=>{
    setBg(purple);
    setName("Aww!! 😥");
  };
  return (
    <>
    <div style={{background:bg}}>
      <button onClick = {bgChange} onDoubleClick = {bgBack}>{name}</button>

    </div>
    </>
  );
}

export default App;
