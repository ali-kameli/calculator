import React, { useState } from "react";
import styles from "./Calculator.module.css"

const Calculator = () => {
  const [current, setCurrent] = useState("");
  const [previous, setPrevious] = useState("");
  const [operation, setOperation] = useState("");

  const calcut = (event) => {
    const value = event.target.getAttribute("data");
    if (value === "." && current.includes(".")) return;
    setCurrent(current + value);
  };

  const handleDelete = () => {
    setCurrent(String(current).slice(0, -1));
  };
  const handleAc = () => {
    setCurrent("");
    setPrevious("");
    setOperation("");
  };
  const operate = (event) => {
    if (current === "") return;
    if (previous !== "") {
      let value = compute();
      setPrevious(value);
    } else {
      setPrevious(current);
    }
    setCurrent("");
    setOperation(event.target.getAttribute("data"));
  };

  const compute = () => {
    let result;
    let prevNumber = parseFloat(previous);
    let currNumber = parseFloat(current);
    if (isNaN(prevNumber) || isNaN(current)) return;
    switch (operation) {
      case "+":
        result = prevNumber + currNumber;
        break;
      case "-":
        result = prevNumber - currNumber;
        break;
      case "÷":
        result = prevNumber / currNumber;
        break;
      case "×":
        result = prevNumber * currNumber;
        break;

      default:
        return;
    }
    return result;
  };

  const equal = () => {
    let value = compute();
    if (value === undefined || value === null) return;
    setCurrent(value);
    setPrevious("");
    setOperation("");
  };

  return (
    <div className={styles.App}>
      <div>
          <div>
              
        {previous}
        {operation}
          </div>
      </div>
      <div>{current}</div>
      <button onClick={handleAc} className={styles.deleter}>AC</button>
      <button onClick={handleDelete } className={styles.deleter}>DEL</button>
      <button data={"÷"} className={styles.operation} onClick={operate}>
        ÷
      </button>
      <br />
      <button className={styles.btnNumber} data={"7"} onClick={calcut}>
        7
      </button>
      <button className={styles.btnNumber} data={"8"} onClick={calcut}>
        8
      </button>
      <button className={styles.btnNumber} data={"9"} onClick={calcut}>
        9
      </button>
      <button data={"×"} className={styles.operation} onClick={operate}>
        ×
      </button>
      <br />
      <button className={styles.btnNumber} data={"4"} onClick={calcut}>
        4
      </button>
      <button className={styles.btnNumber} data={"5"} onClick={calcut}>
        5
      </button>
      <button className={styles.btnNumber} data={"6"} onClick={calcut}>
        6
      </button>
      <button data={"+"} className={styles.operation} onClick={operate}>
        +
      </button>
      <br />
      <button className={styles.btnNumber} data={"1"} onClick={calcut}>
        1
      </button>
      <button className={styles.btnNumber} data={"2"} onClick={calcut}>
        2
      </button>
      <button className={styles.btnNumber} data={"3"} onClick={calcut}>
        3
      </button>
      <button data={"-"} className={styles.mines} onClick={operate}>
        -
      </button>
      <br />
      <button data={"."} className={styles.btnNumber} onClick={calcut}>
        .
      </button>
      <button data={"0"} className={styles.btnNumber} onClick={calcut}>
        0
      </button>
      <button className={styles.equal} onClick={equal}>=</button>
    </div>
  );
};

export default Calculator;
