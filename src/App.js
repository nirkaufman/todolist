import {useState} from 'react';

function App() {
  return (
      <section className="todoapp">

        <header className="header">
          <h1>todos</h1>
          <input className="new-todo"
                 placeholder="What needs to be done?"
                 autoFocus />
        </header>

        <section className="main">
          <input className="toggle-all"
                 type="checkbox" />
            <ul className="todo-list">
              <li>
                <div className="view">
                  <input className="toggle"
                         type="checkbox" />
                    <label>Todo Title</label>
                  <button className="destroy" />
                </div>
                <input className="edit" />
              </li>
            </ul>
        </section>

        <footer className="footer">
          <span className="todo-count"><strong>0</strong> items left</span>
          <button className="clear-completed">Clear completed
          </button>
        </footer>

      </section>
  );
}

export default App;
