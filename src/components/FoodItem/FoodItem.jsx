import React, { useState, useContext } from "react";
import { StoreContext } from "../../context/StoreContextProvider";
import "./FoodItem.css";

const FoodItem = ({ item }) => {
  const { addToCart } = useContext(StoreContext);
  const [selectedOption, setSelectedOption] = useState(null); // Change to a single value (null or a string)

  // Handle option selection (only one option can be selected)
  const handleOptionChange = (option) => {
    setSelectedOption((prevOption) => {
      if (prevOption === option) {
        // If the option is already selected, deselect it
        return null;
      } else {
        // Select the new option (replacing any previous selection)
        return option;
      }
    });
  };

  // Add to cart with the selected option
  const handleAddToCart = () => {
    // Pass the selected option as an array with a single item (or empty array if none selected)
    const options = selectedOption ? [selectedOption] : [];
    addToCart({ ...item, options });
  };

  if (!item) {
    return <p>Loading...</p>; // Loading state
  }

  return (
    <div className="foodItem">
      <div className="foodimgcontainer">
        <img src={item.image} alt={item.name} />
      </div>
      <div className="foodinfo">
        <p>{item.name}</p>
        <span>{item.description}</span>
        {item.options && item.options.length > 0 && (
          <div className="fooditem-options">
            {item.options.map((option, index) => (
              <button
                key={index}
                className={`option-button ${
                  selectedOption === option ? "selected" : ""
                }`}
                onClick={() => handleOptionChange(option)}
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </div>
      <div className="price-addtocart">
        <p>{item.price}</p>
        <button onClick={handleAddToCart}>
          <i className="bi bi-plus-circle"></i>
        </button>
      </div>
    </div>
  );
};

export default FoodItem;
