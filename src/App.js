import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import {useState} from "react";

function App() {
  const [items, setItems] = useState([]);

  function addNewItem(itemTitle) {
    setItems( [...items, {title: itemTitle}] );
  }

  function removeItem(item) {
    const updateItems = items.filter( currentItem => item.title === currentItem.title)
    setItems(updateItems);
  }

  return (
      <section className="todoapp">
        <Header title="Todobom" addItem={addNewItem} />
        <Main items={items} />
        <Footer/>
      </section>
  );
}

export default App;
