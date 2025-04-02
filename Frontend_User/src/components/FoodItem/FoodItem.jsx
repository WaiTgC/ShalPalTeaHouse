import React, { useState, useContext } from "react";
import { StoreContext } from "../../context/StoreContextProvider";
import "./FoodItem.css";

const FoodItem = ({ item }) => {
  const { addToCart } = useContext(StoreContext);
  const [selectedOptions, setSelectedOptions] = useState([]);

  // Handle option selection
  const handleOptionChange = (e) => {
    const option = e.target.value;
    if (e.target.checked) {
      setSelectedOptions((prevOptions) => [...prevOptions, option]);
    } else {
      setSelectedOptions((prevOptions) =>
        prevOptions.filter((opt) => opt !== option)
      );
    }
  };

  // Format item name with selected options, if any, and add to cart
  const handleAddToCart = () => {
    const itemNameWithOptions = selectedOptions.length
      ? `${item.name} (${selectedOptions.join(", ")})`
      : item.name;

    addToCart({ ...item, options: selectedOptions });
  };

  if (!item) {
    return <p>Loading...</p>; // Loading state
  }

  return (
    <div className="foodItem">
      <div className="foodItem-card">
        <div className="foodimgcontainer">
          <img src={item.image} alt={item.name} />
        </div>
        <div className="foodinfo">
          <p>{item.name}</p>
          <span>{item.description}</span>
        </div>
        <div className="price-addtocart">
          <p>{item.price}</p>
          <button onClick={handleAddToCart}>
            <i className="bi bi-plus-circle"></i> Add to Cart
          </button>
        </div>
      </div>

      {/* Render options if they exist */}
      {item.options && item.options.length > 0 && (
        <div className="fooditem-checkbox">
          {item.options.map((option, index) => (
            <label key={index} className="checkbox-label">
              <input
                type="checkbox"
                value={option}
                onChange={handleOptionChange}
              />
              {option}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default FoodItem;
