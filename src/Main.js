function Main ({ items }) {
  return (
      <section className="main">
        <input className="toggle-all"
               type="checkbox" />
        <ul className="todo-list">
          {items.map( item => (
              <li>
                <div className="view">
                  <input className="toggle"
                         checked={item.completed}
                         type="checkbox" />
                  <label>{item.title}</label>
                  <button onClick={} className="destroy" />
                </div>
                <input className="edit" />
              </li>
          ))}


        </ul>
      </section>
  )
}

export default Main;
