import React from 'react';
import Slot from './Slot';
const App = (props) => {
  return (
    <>
     <h1 className="heading_style">
      🎰 Welcome to{""}  <span style={{fontWeight:"bold"}}>Slot Machine Game 🎰</span>
      </h1>
     <div className="slotmachine">
     <Slot x='😁' y='😁' z='😁'/>
     <Slot x='😊' y='😆' z='😊'/>
     <Slot x='🍎' y='🍌' z='🍎'/> 
     <Slot x='👪' y='👪' z='👪'/>
     </div>
    </>
     
  );
}

export default App;