import { useState } from "react";
import Item from "./Item";

function PackageList({ items, onDeleteItem, onCheckedItem, onClearList }) {
  const [sortedBy, setSortedBy] = useState("input");
  let sorteditem = [];

  if (sortedBy === "input") sorteditem = items;

  if (sortedBy === "description") {
    sorteditem = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }

  if (sortedBy === "packed") {
    sorteditem = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <div className="list">
      <ul>
        {sorteditem.map((item) => (
          <>
            <Item
              itemObj={item}
              key={item.id}
              onRemoveItem={onDeleteItem}
              onCheckedItem={onCheckedItem}
            />
          </>
        ))}
      </ul>
      <div className="actions">
        <select value={sortedBy} onChange={(e) => setSortedBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by input Description</option>
          <option value="packed">Sort by input packed</option>
        </select>
        <button onClick={() => onClearList()}>Clear all</button>
      </div>
    </div>
  );
}
export default PackageList;
