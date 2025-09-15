Book Management

A simple Node.js backend application that provides CRUD APIs for managing books with JWT-based authentication, containerization, and cloud deployment.

    ⚙️ Tech Stack

        * Runtime: Node.js

        * Framework: Express.js

        * Database: MongoDB Atlas (or local MongoDB for dev)

        * Authentication: JWT (JSON Web Token)

        * Containerization: Docker

        * Deployment: Render (Free Tier) / Azure App Service

  ⚙️ How to Run Locally

Clone the repo

git clone https://github.com/sathish884/book_management.git
cd book-management


Install dependencies

npm install


Setup environment variables
Create a .env file:

NODE_ENV=production
PORT=8080
MONGO_URI=mongodb+srv://<User_Name>:<Password>@cluster0.dgvve.mongodb.net/book_management
JWT_SECRET=yourjwtsecret


Start the server

node index.js


Server will run at: http://localhost:8080 (Local) or https://book-management-3-abp1.onrender.com (Production)

🔑 Authentication Flow

Create User (POST /api/createuser) → User provides details for registeration → API responds with a Success message.

Login (POST /api/login) → User provides credentials → API responds with a JWT token.

Protected routes (POST /books, PUT /books/:id, DELETE /books/:id) → Require Authorization: Bearer <token> in the header.

Public routes (GET /books, GET /books/:id) → No authentication required.

🚀 Deployment Steps

Build Docker image

docker build -t book-management .


Run container locally (optional)

docker run -p 8080:8080 book-management


Push to Render/Azure

On Render → create a new Web Service → connect GitHub repo → add environment variables from .env.

On Azure → use App Service → Container Deployment → set environment variables.

App will be available at:
[https://<your-service-name>.onrender.com](https://book-management-3-abp1.onrender.com)

📖 Application Overview

Provides CRUD operations for books:

POST /createuser → Create User

POST /login → Login user and generate JWT

GET /books → List all books

GET /books/:id → Get book by ID

POST /books → Create new book (JWT required)

PUT /books/:id → Update book (JWT required)

DELETE /books/:id → Delete book (JWT required)

Each book has:

title

author

isbn

publishedDate
