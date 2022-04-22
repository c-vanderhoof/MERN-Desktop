import React, { useState } from 'react';
import './App.css';

function App() {
  /* below array destructure syntax is equivalent to:
  const newTodoStateArr = useState("");
  const newTodo = newTodoStateArr[0]; useState always returns an array with two items in it. This is shorthand syntax considering we wont use these variables.
  const setNewTodo = newTodoStateArr[1];
  */
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleNewTodoSubmit = (event) => {
    event.preventDefault();
    if (newTodo.length === 0) {
      return;
    } 

    const todoItem = {
      text: newTodo,
      complete: false 
    };
    setTodos([...todos, todoItem])
    setNewTodo("");
  };

  const handleTodoDelete = (delIndex)=> {
    const filteredTodos = todos.filter((todo, index) =>{
      return i !== delIndex;
    });
    setTodos(filteredTodos);
  };

  const handleToggleComplete = (idx) => {
    const updatedTodos = todos.map((todo, i) =>{
      if (idx === i) {
        todo.complete = ! todo.complete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  return (
    <div>
      <form onSubmit={(event) => {
        handleNewTodoSubmit(event);
      }}>
        <input onChange={(event) => {
          setNewTodo(event.target.value);
        }} type="text" />
        <div>
          <button>Add</button>
        </div>
      </form>

      {todos.map((todo, i) => {
        const todoClasses = ["bold", "italic"];
        
        if (todo.complete) {
          todoClasses.push("line-through");
        }

        return (
          <div key={i} >
            <input onChange= {(event) => {
              handleToggleComplete(i);
            }} checked = {todo.complete} type="checkbox" />
            <span className={todoClasses.join("")}>{todo.text}</span>
            <button onClick={(event)=> {
              handleTodoDelete(i);
            }}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
