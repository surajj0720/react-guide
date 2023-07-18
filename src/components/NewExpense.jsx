import React from "react";
import "../styles/newExpense.scss";
import ExpenseForm from "./ExpenseForm";

const NewExpense = () => {
  return (
    <div className="new-expense">
      <ExpenseForm />
    </div>
  );
};

export default NewExpense;
