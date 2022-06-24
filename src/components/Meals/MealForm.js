import styles from "./MealForm.module.css";
import Input from "../UI/Input";
import { useRef, useState } from "react";

const MealForm = (props) => {
  const amountInputRef = useRef();
  const [amountValid, setAmountValid] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;

    if (
      enteredAmount.trim().length === 0 ||
      +enteredAmount < 0 ||
      +enteredAmount > 5
    ) {
        setAmountValid(false);
        return;
    }
    
    props.onAddToCart(+enteredAmount);
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: `"amount"${props.mealId}`,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button type="submit">+ Add</button>
      {!amountValid && <p>Please enter a valid amount(1-5).</p>}
    </form>
  );
};

export default MealForm;
