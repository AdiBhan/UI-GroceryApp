import axios from "axios";
import React, { useEffect, useState } from "react";
function TestComponent() {
  const mynum = 5;

  // Starts every time we refresh page or save
  useEffect(() => {
    if (counter > 0) {
      console.log("In...");
      console.log(counter);
      setCounter(counter - 1);
    } else {
      try {
        axios.get("https://api.adviceslip.com/advice").then((response) => {
          let data = response;
          // parsing the data
          let data2 = data["data"]["slip"]["advice"];
          console.log(data2);

          console.log(response.status);
        });
      } catch (error) {
        console.log(error);
      }
    }
  });

  const [counter, setCounter] = useState(10);
  const increment = () => {
    setCounter(counter + 1);
  };
  return (
    <div className="m-3">
      <h1>Test Component</h1>
      <input></input>
    </div>
  );
}
export default TestComponent;
