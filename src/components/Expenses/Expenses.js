import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

import React, { useState } from "react";
const Expenses = (props) => {
  const [year, setYear] = useState("2021");
  let filteredExpenses = props.data.filter(
    (e) => e.date.getFullYear().toString() === year
  );
  //filterChangeHandler
  const filterChangeHandler = (changedYear) => {
    setYear(changedYear);
  };

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          onFilterChange={filterChangeHandler}
          selectedYear={year}
        />
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </li>
  );
};
export default Expenses;
