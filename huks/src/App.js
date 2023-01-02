// import React, { useState } from 'react';

// const App=()=>{
//     // useState is a hook so it shoult be used in functional component
// const state = useState();
// // console.log(state);

// // let count = 1;
// const [count, setCount] = useState(0);


// const Incum = ()=>{
//     // count++;// jab state change karna hota tha to loog class component use karne lagte the lekin ab hooks ki help se hum state ko change kar sakte hai in functional component mein
//    // console.log(count++  + " " + "times clicked");
//     setCount(count+1);
// }; 


//     return(
//         <>
//         <h1>{count}</h1>
//         <button onClick={Incum}>Click Me</button>
//         </>
//     );
// }



// import React from 'react';
// import './index.css';
// import { useState } from 'react';
// const App = ()=>{
//     const state = useState();
//     // console.log(state);
//     let newTime = new Date().toLocaleTimeString();
//     const [ctime, setCtime] = useState(newTime);

//     // ye click karne pe machine ka update time show karega
//     const updateTime = ()=>{
//       let  newCTime = new Date().toLocaleTimeString();
//         setCtime(newCTime);
//     };

//     return (
//         <>
//         <h1>{ctime}</h1>
//         <button onClick={updateTime}>Get Time</button>
//         </>

//     );
// }

// export default App;


import React from 'react';
import './index.css';
import { useState } from 'react';
const App = ()=>{
    const state = useState();
    // console.log(state);
    let newTime = new Date().toLocaleTimeString();
    const [ctime, setCtime] = useState(newTime);

    // ye click karne pe machine ka update time show karega
    const updateTime = ()=>{
        let  newCTime = new Date().toLocaleTimeString();
        setCtime(newCTime);
    };
    setInterval(updateTime, 1000);// ye ek update Time ek callback function hai aur har ek second pe ye call hota raehga aur update machine time deta ragega

    return (
        <>
        <h1>{ctime}</h1>
        </>

    );
}

export default App;
