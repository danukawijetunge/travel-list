function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        <em>Adding some items to your packing list</em>
      </footer>
    );

  let noOfItem = items.length;
  let noOfPackedItem = items.reduce((acq, item) => {
    return item.packed ? acq + 1 : acq + 0;
  }, 0);
  let precentage = Math.ceil((noOfPackedItem / noOfItem) * 100);

  return (
    <footer className="stats">
      <em>
        {precentage === 100 ? (
          "You got every thing, ready to go.."
        ) : (
          <>
            👜 You have {noOfItem} items on your list, and you allready packed{" "}
            {noOfPackedItem} ({precentage}%) 🛩️
          </>
        )}
      </em>
    </footer>
  );
}

export default Stats;
