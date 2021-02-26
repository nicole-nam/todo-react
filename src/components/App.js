import React, { useState } from "react";
import TodoItem from "./TodoItem";

function App() {
  const [newInput, setNewInput] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(e) {
    const input = e.target.value;
    setNewInput(input);
  }

  function handleClick() {
    setItems((prev) => {
      return [...prev, newInput];
    });
    setNewInput("");
  }

  function removeItem(id) {
    setItems((prev) => {
      return prev.filter((item, index) => {
        return index !== id;
      });
    });
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
          {items.map((item, index) => {
            return (
              <TodoItem
                key={index}
                id={index}
                text={item}
                remove={removeItem}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
