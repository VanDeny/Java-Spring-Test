import React from 'react';
import TodoList from './todo-list/todo-list';
import './App.css';
import Modal from "react-modal";

Modal.setAppElement('#root')

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <div>Absolutne overcomplicated debilníček</div>
          <TodoList/>
      </header>
    </div>
  );
}

export default App;
