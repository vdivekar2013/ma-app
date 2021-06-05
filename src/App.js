import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function App() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="App">
      <header className="App-header">
        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
        <h3 className="App-logo">Hello React JS</h3>

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
