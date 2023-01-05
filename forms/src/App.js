import React from "react";
import "./index.css";
import { useState } from "react";
const App = () => {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [emailName, setemailName] = useState("");
  const [passName, setpassName] = useState("");

  const inputEvent = (event) => {
    console.log(event.target.value);
    setName1(event.target.value);
    setName2(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    setemailName(name1);
    setpassName(name2);
  };
  return (
    <>
      <div className="main_div">
        <form onSubmit={onSubmit}>
          <div>
           
            <h1>Email Id {emailName}</h1>
            <input
              type="text"
              placeholder="Enter your Mail Id"
              onChange={inputEvent}
              value={name1}
            />
            <br />
            <h1>Password{passName}</h1>
            <input
              type="text"
              placeholder="Enter your password"
              onChange={inputEvent}
              value={name2}
            />
            <br />
            <button>Submit 👍</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default App;
