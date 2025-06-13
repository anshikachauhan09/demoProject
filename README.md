📘 README —  Order Management System
🧩 Project Overview
Freight Order Management System (FOMS) is a full-stack web application that simulates freight order management for logistics companies. It includes user and admin login, order management, and role-based UI rendering — using Angular (frontend) and Node.js (backend) with mocked JSON data (no real DB).

📂 Project Structure
pgsql
Copy
Edit
foms/
├── backend/
│   └── server.js             # Node.js Express API with in-memory data
├── frontend/
│   ├── src/app/
│   │   ├── components/
│   │   │   ├── login/        # Login form UI
│   │   │   ├── dashboard/    # Dashboard for user/admin
│   │   │   └── orders/       # Order CRUD interface
│   │   ├── services/         # Auth & order service
│   │   └── guards/           # Auth guard
│   └── angular.json          # Angular config
└── README.md
💡 Features
Feature	Details
Login System	Simulated login with hardcoded credentials
Role-Based Access	Different dashboards for Admin and User
Orders CRUD	Add, edit, delete, view freight orders (mocked data)
Mock Backend	Node.js Express server storing data in memory
No Database	Ideal for prototypes and simulations

👤 User Accounts
Role	Username	Password
Admin	admin	admin123
User	user	user123

🚀 Getting Started
🔧 1. Setup Backend (Node.js)
bash
Copy
Edit
cd backend
npm install express cors
node server.js
Server will run at: http://localhost:3000

🌐 2. Setup Frontend (Angular)
bash
Copy
Edit
cd frontend
npm install
ng serve
App will run at: http://localhost:4200

🧪 Testing Report
✅ Manual UI Testing
Test Case	Input	Expected Output	Result
Admin Login	admin/admin123	Redirect to Admin Dashboard	✅
User Login	user/user123	Redirect to User Dashboard	✅
Invalid Login	Wrong credentials	Show error message	✅
Add Order	Valid order details	Order added, appears in table	✅
Edit Order	Change destination	Updated record shown in table	✅
Delete Order	Click delete on a row	Order removed from table	✅
Refresh App (Angular)	Reload page	Order data stays until backend restarts	✅
Restart Backend	Stop/start Node.js	Data resets (in-memory)	✅

🔍 Edge Cases
 Form does not allow empty inputs (uses HTML required)

 IDs are auto-generated using Date.now()

 Cancel edit button resets form state

📌 Limitations
No persistent storage — data is lost when backend restarts

Authentication is simulated, not secure for production

No real-time sync or RESTful error handling

🔄 Future Enhancements
Use real database (MongoDB or PostgreSQL)

JWT-based authentication

File upload for shipment documents

Pagination/filtering in orders table

