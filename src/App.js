import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Data from "./components/data";
function App() {
  const [products, setProducts] = useState([]);
  const [isDeleted, setIsDeleted] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:4000/item/listall")
      .then(({ data }) => {
        setProducts(data.result);
        setIsDeleted(false);
        console.log(data.result);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [isDeleted, isAdded]);

  const el = products.map((data) => (
    <Data {...data} setIsDeleted={setIsDeleted} key={data.id} />
  ));
  console.log(el);

  return (
    <div className="App">
      {el}
      <button>add</button>
    </div>
  );
}

export default App;
