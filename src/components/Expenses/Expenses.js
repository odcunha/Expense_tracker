import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";
const Expenses = (props) => {
  const [year, setYear] = useState("2021");

  //filterChangeHandler
  const filterChangeHandler = (changedYear) => {
    setYear(changedYear);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter
        onFilterChange={filterChangeHandler}
        selectedYear={year}
      />
      {props.data.map((expense) => (
        <ExpenseItem
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
        />
      ))}
    </Card>
  );
};
export default Expenses;
