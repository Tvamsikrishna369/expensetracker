import React, { useState } from 'react';

function AddExpenseForm({ onAddExpense }) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');
  const [date, setDate] = useState(new Date());

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddExpense({ title, amount, category, date });
    setTitle('');
    setAmount(0);
    setCategory('');
    setDate(new Date());
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
      </label>
      <label>
        Amount:
        <input type="number" value={amount} onChange={(event) => setAmount(event.target.value)} />
      </label>
      <label>
        Category:
        <input type="text" value={category} onChange={(event) => setCategory(event.target.value)} />
      </label>
      <label>
        Date:
        <input type="date" value={date} onChange={(event) => setDate(event.target.value)} />
      </label>
      <button type="submit">Add Expense</button>
    </form>
  );
}

export default AddExpenseForm;