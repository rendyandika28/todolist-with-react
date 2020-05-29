import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="frame">
        <section className="header">
          <button className="header-btn">Add</button>
          <h1 className="header-title">Todo List</h1>
          <button className="header-btn">Clear</button>
        </section>

        <section className="add">
          <form className="add-form">
            <input type="text" className="add-input" />
            <button className="add-button">Add</button>
          </form>
        </section>

        <section className="todos">
          <div className="todo">
            <span className="todo-item">
              Learn React
            </span>
          </div>

        </section>
      </div>
    </div>
  );
}

export default App;
