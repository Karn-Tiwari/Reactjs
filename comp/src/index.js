// // import React from 'react';
// // import ReactDOM from 'react-dom';
// // import App from  './App';
// // ReactDOM.render(
// //   <App/>,
// //   document.getElementById("root")
// // );

// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import './index.css';
// ReactDOM.render(<App/>, document.getElementById('root'));

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";


// function ncard(val)
// {
//     return(
//         <Card
//         // Why key=> key help react identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity:
//         key={val.id}
//         imgsrc={val.imgsrc}
//         title={val.title}
//         sName={val.sName}
//         link={val.link}
//         watch={val.watch}
//         />
//     );
// }

// ReactDOM.render(
//   <>
    {/* <h1 className="heading_style">Netflix Series</h1> */}
    {/* <Card
     imgsrc={Sdata[0].imgsrc}
        title={Sdata[0].title}
        sName={Sdata[0].sName}
        link={Sdata[0].link}
        watch={Sdata[0].watch}
    />
    <Card
        imgsrc={Sdata[1].imgsrc}
        title={Sdata[1].title}
        sName={Sdata[1].sName}
        link={Sdata[1].link}
        watch={Sdata[1].watch}
     />
    <Card
        imgsrc={Sdata[2].imgsrc}
        title={Sdata[2].title}
        sName={Sdata[2].sName}
        link={Sdata[2].link}
        watch={Sdata[2].watch}
     />
    <Card
        imgsrc={Sdata[3].imgsrc}
        title={Sdata[3].title}
        sName={Sdata[3].sName}
        link={Sdata[3].link}
        watch={Sdata[3].watch}
        />
    <Card
        imgsrc={Sdata[4].imgsrc}
        title={Sdata[4].title}
        sName={Sdata[4].sName}
        link={Sdata[4].link}
        watch={Sdata[4].watch}
        />
    <Card
        imgsrc={Sdata[5].imgsrc}
        title={Sdata[5].title}
        sName={Sdata[5].sName}
        link={Sdata[5].link}
        watch={Sdata[5].watch}
        />
        <Card
        imgsrc={Sdata[6].imgsrc}
        title={Sdata[6].title}
        sName={Sdata[6].sName}
        link={Sdata[6].link}
        watch={Sdata[6].watch}
        /> */}
{/* ye map function ka use kiya gaya jiski help se hum ncard function ko call karke ek ek card ko render kar sakte hai by val parameter */}
        {/* {Sdata.map(ncard)} */}
       
     
 
  {/* </>,
  document.getElementById("root")
); */}


ReactDOM.render(<App/>,document.getElementById("root"));

