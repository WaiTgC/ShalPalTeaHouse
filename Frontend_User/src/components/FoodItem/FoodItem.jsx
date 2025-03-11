import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContextProvider";
import "./FoodItem.css";

const FoodItem = ({ item }) => {
  const { addToCart } = useContext(StoreContext);

  if (!item) {
    return <p>Loading...</p>; // Prevent errors if item is undefined
  }

  return (
    <div className="foodItem">
      <div className="foodimgcontainer">
        <img src={item.image} alt={item.name} />
      </div>
      <div className="foodinfo">
        <p>{item.name}</p>
        <span>{item.description}</span>
      </div>
      <div className="price-addtocart">
        <p>{item.price}</p>
        <button onClick={() => addToCart(item)}>
          <i className="bi bi-plus-circle"></i>
        </button>
      </div>
    </div>
  );
};

export default FoodItem;
