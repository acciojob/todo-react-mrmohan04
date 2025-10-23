import React, { useState } from 'react';

const items = [
  { name: "Apple", price: 20 },
  { name: "Banana", price: 10 },
  { name: "Neutella", price: 30 },
  { name: "Razor", price: 5 },
  { name: "CornFlakes", price: 15 },
  { name: "Sound Bar", price: 50 },
  { name: "Iphone", price: 80 }
];

const App = () => {
  const [budget, setBudget] = useState(0);

  const handleBudgetChange = (e) => {
    setBudget(Number(e.target.value));
  };

  return (
    <div>
      <h1>Shopping List</h1>
      <div>
        <label htmlFor="budgetInput">Enter Budget: </label>
        <input
          id="budgetInput"
          type="number"
          value={budget}
          onChange={handleBudgetChange}
          placeholder="Enter your budget"
        />
      </div>
      <table id="itemsTable">
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => {
            const isAffordable = item.price <= budget;
            const rowStyle = {
              color: isAffordable ? 'green' : 'red',
              fontWeight: 'bold'
            };

            return (
              <tr key={index} style={rowStyle}>
                <td>{item.name}</td>
                <td>{item.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default App;
