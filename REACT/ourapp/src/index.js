// var React = require("react");// react module chahiye
// import React from 'react';// to humne import kar liya
// var ReactDOM = require('react-dom');
// import ReactDOM from 'react-dom';
// // webpack and babel ko alag se install karne ki jaroorat nhi ahi jab node module install karte hai to ye dono usme mill jata hia
// //webpack ->file folder ko bundle bana k rakhta hai
// //Babel -> babel hamari js ko kuch iss tarh se convert karta hai ki browser ko samajh me aaye
// // Reactdom.render me 3 parameter hote hai kya dikhana hia kaha dikhana hai callback funtion
// ReactDOM.render(
//   <h1> Hello World </h1>,document.getElementById('root'));

// import React from 'react';
// import ReactDOM from 'react-dom';

// ReactDOM.render(
// <div>
//   <h1>Hello World</h1>
//   <p>This is a paragraph</p>

// </div>
// ,document.getElementById('root'));

// // showing same output as above code BY PURE JAVASCRIPT

// var h1 = document.createElement('h1');
// h1.innerHTML = "Same Output by pure javascript";
// document.getElementById('root').appendChild(h1);

// Template literals => backtick ka use karte hai isse ye fayda hai ki hum string and variable ko ek sath use kar sakte hai

// import React from 'react';
// import ReactDOM from 'react-dom';

// const fname = "Karn"
// const lname = "Singh"

// ReactDOM.render(
// <div>
//   <h1>My name is {fname + " " + lname}</h1>
//   <h1> {`My name is ${fname} ${lname}`}</h1>

// </div>
// ,document.getElementById('root'));

// CHALLENGE 1

// import React from 'react';
// import ReactDOM from 'react-dom';

// const fname = "Karn";
// const lname = "Tiwari";
// const currDate = new Date().toLocaleDateString();
// const(currDate = new Date().toLocaleTimeString();
// ReactDOM.render(
// <>
// <h1>{`My name is ${fname} ${lname}`}</h1>
// <p>Current date is = {currDate}</p>
// <p>Current time is = (currDate}</p>
// </>
// ,document.getElementById('root'));

//Attribute in Reactjs
// contentEditable is a global attribute by which we can edit the ouput which is showing in the browser

// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";

// const name = "Karn Tiwari";
// const img1 = "https://picsum.photos/200/300";
// const img2 = "https://picsum.photos/250/300";
// const img3 = "https://picsum.photos/300/300";
// const link1 = "https://www.facebook.com/karn.tiwari.581";
// const link2 = "https://www.instagram.com/karn_tiwari_/";
// const link3 = "https://www.linkedin.com/in/karn-tiwari-2b1b4b1b3/";

// // Im writing internal css in this page 1.camelcase 2. consider as object 3. use double curly braces

// const heading ={
//   color:"red",
//   textAlign:"center",
//   textTransform:"capitalize",
//   fontWeight:"bold",
//   textShadow:"0px 2px 4px #ffe9c5",
//   margin:"70px 0",
//   fontFamily:"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"
// }
// ReactDOM.render(
//   <>
//     {/* <h1 className="heading">My name is {name}</h1> */}
//     {/* <h1 style={{color:"red",textAlign:"center",textTransform:"capitalize"} }>My name is {name}</h1> */}
//     <h1 style={heading}>My name is {name}</h1>
//     <div className="img_div">
//       <a href={link1} target="_blank">
//         <img src={img1} alt="randomImage" />
//       </a>

//       <a href={link2} target="_blank">
//         <img src={img2} alt="randomImage" />
//       </a>

//       <a href={link3} target="_blank">
//         <img src={img3} alt="randomImage" />
//       </a>
//     </div>
//   </>,

//   document.getElementById("root")
// );

// CHALLENGE 3

// Create a react app from scratch and show heading Hey Karn, Good Morning, it time is between 1 to 11 am and Afternood if 12pm to 7pm and Good Night if time is 8pm to 12am and Apply  CSS in it dynamically change the color of greeting message only applying inline css

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

let curDate = new Date(2022, 6, 31, 21);
curDate = curDate.getHours();
let greeting = "";
const cssStyle ={};

if(curDate>=1 && curDate<12)
{
  greeting = "Good Morning";
cssStyle.color = "green";
cssStyle.textAlign = "center";
}
else if(curDate>=12 && curDate<19)
{
  greeting = "Good Afternoon";
cssStyle.color = "red";
cssStyle.textAlign = "center";
}
else
{
  greeting = "Good Night";
cssStyle.color = "blue";
cssStyle.textAlign = "center"; 
}
ReactDOM.render(
  <div className="heading">
    <h1>Hey Karn, <span style={cssStyle}>{greeting}</span></h1>
  </div>,
    document.getElementById("root")
);