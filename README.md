School Management API
--------------------------
A simple RESTful API built with Node.js, Express.js, and MySQL, designed to manage school records with location-based filtering. This project demonstrates backend API design, database connectivity, and deployment attempts using Render and Railway.

Postman collection link
-----------------------------------
https://grey-comet-94316.postman.co/workspace/school_management~c71ff815-0db5-4b16-96de-37f0179eee89/collection/40449288-6b7d9033-1da8-46d1-920c-b915d3e84f02?action=share&creator=40449288

Features
Add a new school with name, address, latitude, and longitude

List all schools

Get nearby schools based on user’s location and distance

API tested using Postman

.env file for secure configuration

CORS-enabled for frontend integration

Project Structure
go<br>
Copy<br>
Edit<br>
school-management-api/<br>
│
├── routes/<br>
│   └── schoolRoutes.js       // All API routes<br>
├── controllers/<br>
│   └── schoolController.js   // Route logic (optional split)<br>
├── db.js                     // MySQL DB connection config<br>
├── app.js                    // Main server file<br>
├── .env                      // Secrets and config variables<br>
└── package.json              // Project dependencies<br>
Tech Stack<br>
Node.js<br>

Express.js

MySQL (hosted on Railway)

dotenv for environment configuration

CORS for cross-origin access

Environment Variables
Create a .env file in the root:

ini
Copy
Edit
DB_HOST=your-db-host
DB_USER=your-db-user
DB_PASSWORD=your-db-password
DB_NAME=your-db-name
DB_PORT=3306
PORT=3000
API Endpoints
GET /
Check if the server is running.

GET /db-test
Test if the database connection is working.

POST /api/schools
Add a new school

Request Body:

json
Copy
Edit
{
  "name": "ABC School",
  "address": "Bangalore",
  "latitude": 12.9716,
  "longitude": 77.5946
}
POST /api/addschool
Alternate route to add schools.

GET /api/listschools?lat=12.9716&lng=77.5946
Get all schools and calculate distance from user-provided location.

Run Locally
Clone the repository:

bash
Copy
Edit
git clone <your-repo-url>
cd school-management-api
Install dependencies:

nginx
Copy
Edit
npm install
Add your .env file

Start the server:

sql
Copy
Edit
npm start
Visit: http://localhost:3000

Deployment Notes
MySQL database was hosted on Railway and connected successfully during local testing.

Render was used to deploy the backend, and the server was live.

Render could not connect to the Railway database due to a connect ETIMEDOUT error.

Public networking was enabled and correct credentials were used.

A /db-test endpoint was added for debugging.

Telnet and firewall checks were performed.

The issue was likely a cross-platform networking limitation between Render and Railway.

Final Submission Note
While full deployment wasn’t successful due to platform networking issues, the backend API logic and DB operations were fully functional locally with successful integration.

Author<br>
Kanchana B<br>
Third-Year CSIT Student<br>
Passionate about backend APIs, real-world data-driven apps, and learning through building.

