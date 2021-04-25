function Main () {
  return (
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
  )
}

export default Main;
