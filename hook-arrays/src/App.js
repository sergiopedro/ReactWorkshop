import React from "react";
import "./App.css";


const App = () => {
    const [stock, setStock] = React.useState([]);
    const addStock = () => {
        setStock(prevStock => {
            console.log("Adding new item...");
            prevStock.push("New Item");
            return prevStock;
        });
    };
  return (
      <div className="App">
          {stock.map((s, i) => (
              <p key={i}>{s}</p>
          ))}
          <button onClick={addStock}>Add New Item</button>
      </div>
  );
};
export default App;
