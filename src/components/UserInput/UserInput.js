import React, { useState } from "react";
import "./UserInput.css";
export default function UserInput() {
  const initialUserInput = {
    "current-savings": 10000,
    "yearly-contribution": 1200,
    "expected-return": 7,
    duration: 10,
  };
  const [userInput, setUserInput] = useState(initialUserInput);
  const submitHandler = () => {
    console.log("submit");
  };
  const resetHandler = () => {
    setUserInput(initialUserInput);
  };
  const onInputChange = (input, value) => {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [input]: value,
      };
    });
    console.log(setUserInput);
  };
  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input
              type="number"
              id="current-savings"
              onChange={(event) => {
                onInputChange("current-savings", event.target.value);
              }}
              value={userInput["current-savings"]}
            />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input
              type="number"
              id="yearly-contribution"
              onChange={(event) => {
                onInputChange("yearly-contribution", event.target.value);
              }}
              value={userInput["yearly-contribution"]}
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input
              type="number"
              id="expected-return"
              onChange={(event) => {
                onInputChange("expected-return", event.target.value);
              }}
              value={userInput["expected-return"]}
            />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input
              type="number"
              id="duration"
              onChange={(event) => {
                onInputChange("duration", event.target.value);
              }}
              value={userInput["duration"]}
            />
          </p>
        </div>
        <p className="actions">
          <button type="reset" className="buttonAlt" onClick={resetHandler}>
            Reset
          </button>
          <button type="submit" className="button">
            Calculate
          </button>
        </p>
      </form>
    </div>
  );
}
