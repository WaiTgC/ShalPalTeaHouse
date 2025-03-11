import React, { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContextProvider";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = ({ category, customClass }) => {
  const { food_list } = useContext(StoreContext);

  const filteredItems = food_list.filter((item) => item.category === category);
  return (
    <div className={`foodDisplay ${customClass}`}>
      <div className="foodDisplaylist">
        {filteredItems.map((item) => {
          return (
            <FoodItem
              key={item._id}
              item={item}
              name={item.name}
              price={item.price}
              image={item.image}
              description={item.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
