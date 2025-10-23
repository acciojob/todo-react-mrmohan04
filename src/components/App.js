const items = [
  { name: "Apple", price: 20 },
  { name: "Banana", price: 10 },
  { name: "Neutella", price: 30 },
  { name: "Razor", price: 5 },
  { name: "CornFlakes", price: 15 },
  { name: "Sound Bar", price: 50 },
  { name: "Iphone", price: 80 }
];

const budgetInput = document.getElementById('budgetInput');
const table = document.getElementById('itemsTable');

function renderTable(budget) {
  table.innerHTML = `
    <tr><th>Item</th><th>Price</th></tr>
  `;

  items.forEach(item => {
    const row = document.createElement('tr');
    const colorClass = item.price <= budget ? 'green' : 'red';
    row.innerHTML = `
      <td class="${colorClass}">${item.name}</td>
      <td class="${colorClass}">${item.price}</td>
    `;
    table.appendChild(row);
  });
}

budgetInput.addEventListener('input', (e) => {
  const budget = Number(e.target.value);
  renderTable(budget);
});

// Initialize with no budget entered
renderTable(0);
