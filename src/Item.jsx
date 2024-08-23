function Item({ itemObj, key, onRemoveItem, onCheckedItem }) {
  return (
    <li key={key}>
      <input
        type="checkbox"
        checked={itemObj.packed}
        onClick={() => onCheckedItem(itemObj.id)}
      />
      <span style={itemObj.packed ? { textDecoration: "line-through" } : {}}>
        {itemObj.quantity} {itemObj.description}
      </span>
      <button onClick={() => onRemoveItem(itemObj)}>❌</button>
    </li>
  );
}

export default Item;
