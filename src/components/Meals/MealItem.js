import CartContext from "../../Context/cart-context";
import styles from "./MealItem.module.css";
import MealForm from "./MealForm";
import { useContext } from "react";

const MealItem = (props) => {
  const price = `$${props.meal.price.toFixed(2)}`;

  const cartCtx = useContext(CartContext);

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      ...props.meal,
      amount: amount,
    });
  };
  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.meal.name}</h3>
        <div className={styles.description}>{props.meal.description}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <div>
        <MealForm mealId={props.meal.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
