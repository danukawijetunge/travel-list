import { useState } from "react";

function Form({ addNewItem }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function resetFormData() {
    setDescription("");
    setQuantity(1);
  }
  function handleSubmit(e) {
    e.preventDefault();
    let newItem = {
      id: Math.random().toString(16).slice(2),
      description,
      quantity,
      packed: false,
    };

    addNewItem(newItem);
    resetFormData();
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip? '</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((i) => (
          <option value={i}>{i}</option>
        ))}
      </select>
      <input
        type="text"
        placeholder="item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>ADD</button>
    </form>
  );
}
export default Form;
