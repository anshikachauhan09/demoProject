
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

let orders = [
  { id: 1, customer: 'Alice', status: 'Pending' },
  { id: 2, customer: 'Bob', status: 'Shipped' }
];

const users = {
  admin: { password: 'admin123', role: 'admin' },
  user: { password: 'user123', role: 'user' }
};

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  if (users[username] && users[username].password === password) {
    res.json({ success: true, role: users[username].role });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});

app.get('/api/orders', (req, res) => {
  res.json(orders);
});

app.post('/api/orders', (req, res) => {
  const newOrder = { id: Date.now(), ...req.body };
  orders.push(newOrder);
  res.json(newOrder);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
