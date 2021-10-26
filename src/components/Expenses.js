import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
export default function Expenses(props) {
  return (
    <div className="expenses">
      {props.data.map((expense) => (
        <ExpenseItem
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
        />
      ))}
    </div>
  );
}
