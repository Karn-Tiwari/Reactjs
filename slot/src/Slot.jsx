import React from "react";
const Slot = (props)=>{
    // let x = '😁';
    // let y = '😁';
    // let z = '😁';
  
    let x = props.x; 
    let y = props.y;
    let z = props.z;
  
    if(x===y && y===z){
      return(
        <>
        <div className="slot_inner">
        <h1>{x} {y} {z}</h1>
        <h1>This is Matching.</h1>
        <hr/>
        </div>
        </>
      );
    }
    else{
      return(
        <>
        <div className="slot_inner">
        <h1>{x} {y} {z}</h1>
        <h1>This is not Matching.</h1>
        <hr/>
        </div>
        </>
      );
    }
  }

export default Slot;


// import React from "react";
// const Slot = (props)=>{
//     // let x = '😁';
//     // let y = '😁';
//     // let z = '😁';
  
//     let x = props.x;
//     let y = props.y;
//     let z = props.z;
//   return (x===y && y===z) ?   <h1> {x} {y} {z} </h1>:<h1>{x} {y} {z} This is not Matching.</h1>;};
   

// export default Slot;