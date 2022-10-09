import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setTitle] = useState("");
  const [enteredamount, setenteredamount] = useState("");
  const [entereddate, setentereddate] = useState("");
  const titlechangehandler = (event) => {
    setTitle(event.target.value);
  };

  const amountchangehandler = (event) => {
    setenteredamount(event.target.value);
  };
  const datechangehandler = (event) => {
    setentereddate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expensedata = {
      title: enteredTitle,
      amount: enteredamount,
      date: new Date(entereddate),
    };

    props.OnsaveExpenseData(expensedata);
    setTitle("");
    setenteredamount("");
    setentereddate("");
  };
  return (
    <form onSubmit={submitHandler}>
      \
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titlechangehandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredamount}
            min="0.01"
            step="0.01"
            onChange={amountchangehandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={entereddate}
            min="2019-01-01"
            max="2022-12-31"
            onChange={datechangehandler}
          />
        </div>
      </div>
      <div>
        <button onClick={props.onCancel}>Cancel</button>
        <button className="new-expense__actions">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
