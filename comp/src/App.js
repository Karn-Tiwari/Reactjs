// import React from 'react';
// import Heading from './Heading';
// import Para from './Para';
// import List from './List';

// function App()
// {
//   return(
//     <>
//     <Heading/>
//     <Para/>
//     <List/>
//     </>
//   );
// }

// export default App;

import React from "react";

function App() {
  let curDate = new Date();
  curDate = curDate.getHours();
  let greeting = "";
  const cssStyle = {};
  if (curDate >= 1 && curDate < 12) {
    greeting = "Good Morning";
    cssStyle.color = "Red";
   cssStyle.backgroundColor="rgb(246, 246, 246)";
  } else if (curDate >= 12 && curDate < 17) {
    greeting = "Good Afternoon";
    cssStyle.color = "brown";
    cssStyle.backgroundColor="rgb(246, 246, 246)";
  } else if(curDate>=17 && curDate <=24) {
    greeting = "Good Night";
    cssStyle.color = "green";
    cssStyle.backgroundColor="rgb(246, 246, 246)";
  }

  return (
    <>
      <div className="heading">
        <h1 >
          Hey Karn,<span style={cssStyle}>{greeting}</span>
        </h1>
      </div>
    </>
  );
}
export default App;
