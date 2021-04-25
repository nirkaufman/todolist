import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import {useState} from "react";

function App() {
  const [items, setItems] = useState([
    { title: 'first task', completed: false },
    { title: 'second task', completed: false },
    { title: 'third task', completed: false },
  ]);

  return (
      <section className="todoapp">
        <Header title="Todobom"/>
        <Main items={items}/>
        <Footer/>
      </section>
  );
}

export default App;
