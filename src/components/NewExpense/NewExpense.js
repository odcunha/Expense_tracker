import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  const expenseSaveDataHandler = (enteredExpenseData) => {
    const expenseData = { ...enteredExpenseData, id: Math.random().toString() };
    setIsEditing(false);
    props.onAddExpense(expenseData);
  };

  //cancel button handler triggered from Expense Form
  const onCancelHandler = () => {
    setIsEditing(false);
  };

  // display form on click
  const newExpenseHandler = () => {
    setIsEditing(true);
  };

  // create to denote if user is entering info in the form or not
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={newExpenseHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={expenseSaveDataHandler}
          onCancelHandler={onCancelHandler}
        />
      )}
    </div>
  );
};
export default NewExpense;
