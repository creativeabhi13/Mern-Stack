import React, { useEffect } from "react";

const Child = ({ itemsArray, setItemsArray }) => {
  function removeItem(id) {
    setItemsArray(itemsArray.filter((item) => item.id != id));
  }

  return (
    <div>
      <h1>Child Component</h1>
      <ul>
        {itemsArray.length > 0 &&
          itemsArray.map((item, index) => (
            <li key={item.id}>
              <span>
                {" "}
                {item.itemName} - {item.itemPrice}{" "}
              </span>
              <button onClick={() => removeItem(item.id)}> Remove </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Child;
