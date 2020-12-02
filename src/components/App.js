import React, { useState } from "react";
import "../styles/App.css";

const App = () => {
  const [errorMessage, setErrorMessage] = useState("All fields are mandatory");
  return (
    <div id="main">
      <h1>{errorMessage}</h1>
      <input type="text" data-testid="name" placeholder="Enter name" />
      <br />
      <input type="text" data-testid="email" placeholder="Enter email" />
      <br />
      <input type="text" data-testid="gender" placeholder="Enter gender" />
      <br />
      <input
        type="text"
        data-testid="phonenumber"
        placeholder="Enter phone number"
      />
      <br />
      <input
        type="password"
        data-testid="password"
        placeholder="Enter password"
      />
      <br />
      <button data-testid="submit">Submit</button>
    </div>
  );
};

export default App;
