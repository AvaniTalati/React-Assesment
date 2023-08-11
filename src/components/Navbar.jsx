import React, { useState } from "react";
import "./navbar.css";

const Navbar = () => {

  const [inputValue, setInputValue] = useState("");

  const [addTimer, setAddTimer] = useState(false);
  const [val, setVal] = useState(addTimer);

  const handleChange = (e) => {
    const value = e.target.value;
    if (/^[0-9]*$/.test(value)) {
      setInputValue(value);
    }
  };

  return (
    <div className="navbarContainer">
      <div className="linkContainer">
        <a className="link">Home</a>
        <a className="link">World Clock</a>
        <a className="link">Time Zones</a>
        <a className="link">Calender</a>
        <a className="link">Weather</a>
        <a className="link">Sun & Moon</a>

        <a className="link">Timers</a>

        <a className="link">Calculators</a>

        <a className="link">Apps & API</a>
        <a className="link">Free Fun</a>
      </div>
      <div className="subLinkContainer">
        <span>Online Timer with Alarm</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia eum
          sed recusandae! Eaque molestias voluptate laudantium illo commodi,
          laboriosam voluptatum.
        </p>
      </div>
      <div className="editTimerContainer">
        <div className="timerContainer">
          <input
            type="number"
            className="inputField"
            placeholder="00:02:00"
           
            value={inputValue}
            onChange={handleChange}
          />
          <button className="startBtn"> Start</button>
          <button className="resetBtn"> Reset</button>
        </div>
        <div className="editContainer">
          <span className="text">Timer 1 (00:02:00) </span>
          <p className="editText">Edit</p>
        </div>
      </div>
      <div className="startedContainer">
        <span className="timerText">(not started)</span>
      </div>
      <div
        className="anotherText"
        value={addTimer}
        onClick={() => setAddTimer(true)}
      >
        + Add Another Timer
      </div>
      {val === !addTimer ? (
        <>
          <div className="editTimerContainer">
            <div className="timerContainer">
              <input
                type="text"
                className="inputField"
                placeholder="00:02:00"
                value={inputValue}
                onChange={handleChange}
              />
              <button className="startBtn"> Start</button>
              <button className="resetBtn"> Reset</button>
            </div>
            <div className="editContainer">
              <span className="text">Timer 1 (00:02:00) </span>
              <p className="editText">Edit</p>
            </div>
          </div>
          <div className="startedContainer">
            <span className="timerText">(not started)</span>
          </div>
        </>
      ) : (
        ""
      )}

      <div className="addTimer">
        <span className="timerOrder">Timer Order</span>
        <select className="dropdownText">
          Manually
          <option>Manually</option>
          <option>Partially</option>
        </select>
      </div>
      <div className="cardContainer">

      </div>
    </div>
  );
};

export default Navbar;
