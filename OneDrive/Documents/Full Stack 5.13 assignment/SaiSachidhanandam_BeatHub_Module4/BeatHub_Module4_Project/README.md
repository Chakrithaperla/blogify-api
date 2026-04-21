# BeatHub API - Production Ready Backend

Welcome to the production-ready BeatHub Backend service. This project implements a secure, scalable, and containerized API for the BeatHub platform.

## 🚀 Deployed URL
**Live API Endpoint:** [https://beathub-api-deployed-url.com/api](https://beathub-api-deployed-url.com/api)  
*(Please replace with your actual deployed URL before submission)*

## 🔑 Test Credentials
For evaluation and testing, you can use the following accounts:

| Role  | Email              | Password    |
|-------|--------------------|-------------|
| Admin | admin@beathub.com  | password123 |
| User  | user@beathub.com   | password123 |

## 🌟 Features Implemented

- **JWT Authentication:** Secure login and registration with token-based session management.
- **RBAC (Role-Based Access Control):** Granular access levels for `Admin` and `User` roles.
- **Pagination:** Supported on `/api/songs` to handle large datasets efficiently.
- **Rate Limiting:** Protects the API from spam and brute-force attacks by limiting requests per IP.
- **Docker Containerization:** Fully containerized using optimized layering and security best practices.
- **Cloud Deployment:** Ready for deployment on platforms like Render, Railway, or AWS.
- **Atlas Production DB:** Seamless connection to MongoDB Atlas with environment variable configuration.
- **Security:** Passwords are never returned in responses, and non-root users are used in Docker.

## 🛠️ Setup Instructions (Local with Docker)

Follow these steps to run the BeatHub API locally using Docker:

1. **Clone the repository:**
   ```bash
   git clone <your-repo-link>
   cd BeatHub_Module4_Project
   ```

2. **Configure Environment Variables:**
   Create a `.env` file based on `.env.example`:
   ```bash
   cp .env.example .env
   # Update MONGO_URI and JWT_SECRET in .env
   ```

3. **Build and Run with Docker Compose:**
   ```bash
   docker-compose up --build
   ```
   The API will be available at `http://localhost:5000/api`.

4. **Verify Functionality:**
   Run the included RBAC test script (requires node/axios):
   ```bash
   node test-rbac.js
   ```

## 📂 Project Structure
```text
BeatHub_Module4_Project/
│
├── src/
│   ├── controllers/    # Request handlers
│   ├── models/         # Mongoose schemas
│   ├── routes/          # API endpoints
│   ├── middlewares/    # Auth, RBAC, Rate Limit
│   ├── utils/          # Helper functions/Aggregations
│   └── index.js        # Main entry point
│
├── Dockerfile          # Production build configuration
├── docker-compose.yml  # Orchestration
├── .env.example        # Env template
├── package.json        # Dependencies
└── README.md           # Documentation
```

---
*Created for Kalvium Module 4 Project - The Deployed Service*
