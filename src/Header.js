
function Header ({ title }) {
  return (
      <header className="header">
        <h1>{title}</h1>
        <input className="new-todo"
               placeholder="What needs to be done?"
               autoFocus />
      </header>
  )
}

export default Header;
