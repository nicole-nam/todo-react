import React, { useState } from "react";

function App() {
  const [newInput, setNewInput] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(e) {
    const input = e.target.value;
    console.log(input);
    setNewInput(input);
  }

  function handleClick() {
    setItems((prev) => {
      return [...prev, newInput];
    });
    console.log(items);
    setNewInput("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={newInput} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
