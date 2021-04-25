
function Header ({ title, addItem }) {

  function handleEnter(event) {
    if(event.code === 'Enter') {
      addItem(event.target.value);
    }
  }

  return (
      <header className="header">
        <h1>{title}</h1>
        <input className="new-todo"
               onKeyDown={handleEnter}
               placeholder="What needs to be done?"
               autoFocus />
      </header>
  )
}

export default Header;
