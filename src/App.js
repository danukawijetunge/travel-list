import { useState } from "react";
import "./index.css";
import Logo from "./Logo";
import Form from "./Form";
import PackageList from "./PackageList";
import Stats from "./Stats";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: true },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 1, packed: false },
];

function App() {
  const [items, setItems] = useState([]);

  function addItem(item) {
    setItems([...items, item]);
  }

  function handleRemoveItem(i) {
    setItems((items) => items.filter((item) => item.id != i.id));
  }

  function handleCheckedItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    let confirmed = window.confirm(
      "Are you sure ! you wnat to delete all the list"
    );
    const done = confirmed ? setItems([]) : "";
  }

  return (
    <div className="app">
      <Logo />
      <Form addNewItem={addItem} />
      <PackageList
        items={items}
        onDeleteItem={handleRemoveItem}
        onCheckedItem={handleCheckedItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
