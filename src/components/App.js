import React, { useState } from "react";
import TodoItem from "./TodoItem";
import InputArea from "./InputArea";

function App() {
  const [items, setItems] = useState([]);

  function handleClick(newInput) {
    setItems((prev) => {
      return [...prev, newInput];
    });
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
      <InputArea onAdd={handleClick} />
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
