import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setisEditing] = useState(false);
  const saveExpenseDataHandler = (EnteredExpenseData) => {
    const expensedata = {
      ...EnteredExpenseData,
      id: Math.random().toString(),
    };
    props.OnAddExpense(expensedata);
  };

  const startEditingHandler = () => {
    setisEditing(true);
  };

  const stopEditingHandler = () => {
    setisEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler} onCancel={stopEditingHandler}>
          Add New Expense
        </button>
      )}
      {isEditing && <ExpenseForm OnsaveExpenseData={saveExpenseDataHandler} />}
    </div>
  );
};

export default NewExpense;
