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
// const currTime = new Date().toLocaleTimeString();
// ReactDOM.render(
// <>
// <h1>{`My name is ${fname} ${lname}`}</h1>
// <p>Current date is = {currDate}</p>
// <p>Current time is = {currTime}</p>
// </>
// ,document.getElementById('root'));



//Attribute in Reactjs 
// contentEditable is a global attribute by which we can edit the ouput which is showing in the browser

import React from 'react';
import ReactDOM from 'react-dom';

const name = "Karn Tiwari";
const img1 = "https://picsum.photos/200/300";
const img2 = "https://picsum.photos/250/300";
const img3 = "https://picsum.photos/300/300";
const link1 = "https://www.facebook.com/karn.tiwari.581";
const link2 = "https://www.instagram.com/karn_tiwari_/";
const link3 = "https://www.linkedin.com/in/karn-tiwari-2b1b4b1b3/";

ReactDOM.render(
  <>
<h1 contentEditale="true">My name is {name}</h1>
<a href = {link1} target="_blank">
<img src={img1} alt="randomImage"/>
</a>

<a href={link2} target="_blank">
<img src={img2} alt="randomImage"/>
</a>

<a href={link3} target="_blank">
<img src={img3} alt="randomImage"/>
</a>
  </>,

document.getElementById('root')

);
