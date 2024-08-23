import React, { useState } from "react";

const Parent = ({ itemsArray, setItemsArray }) => {
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState("");

  const [id, setId] = useState(1);

  function implementSubmit(e) {
    e.preventDefault();
    setItemsArray([
      ...itemsArray,
      { id: id, itemName: itemName, itemPrice: itemPrice },
    ]);
    setItemName("");
    setItemPrice("");
    setId(id + 1);

  }

  return (
    <div className="parent">
      <h1> Parent Component </h1>
      <form onSubmit={implementSubmit}>
        ItemName:{" "}
        <input
          type="text"
          name="itemName"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
        ItemPrice:{" "}
        <input
          type="text"
          name="itemPrice"
          value={itemPrice}
          onChange={(e) => setItemPrice(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Parent;
