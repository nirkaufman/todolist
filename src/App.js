import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import {useState} from "react";

function App() {
  const [items, setItems] = useState([]);


  return (
      <section className="todoapp">
        <Header title="Todobom"/>
        <Main/>
        <Footer/>
      </section>
  );
}

export default App;
