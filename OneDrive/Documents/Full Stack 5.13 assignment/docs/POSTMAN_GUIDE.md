# Postman Collection Guide

This guide provides instructions on how to set up and use the Postman collection for the Creator's Platform API.

## Setup Instructions

1. **Install Postman**: Download and install the Postman desktop app from [postman.com/downloads](https://www.postman.com/downloads).
2. **Import Collection**:
   - Open Postman.
   - Click the **Import** button in the top-left corner.
   - Select the file `docs/Creator-Platform-API.postman_collection.json` from this repository.
3. **Import Environment**:
   - Click the **Import** button again.
   - Select the file `docs/Local-Development.postman_environment.json`.
4. **Select Environment**:
   - In the top-right corner of Postman, click the environment dropdown (it might say "No Environment").
   - Select **Local Development**.

## How to Use

1. **Start the Server**: Ensure your backend server is running (usually triggered by `npm run server` or `npm start`).
2. **Verify Connectivity**: Run the **Health Check** request in the `Health` folder to ensure the API is reachable.
3. **Authentication Flow**:
   - Run **Register User** to create a new account. The authentication token will be automatically saved to your `authToken` environment variable.
   - If you already have an account, run **Login User** to refresh your `authToken`.
4. **Testing Authenticated Routes**:
   - Once the `authToken` is set, you can run any request in the `Posts` folder.
   - The `Authorization` header is pre-configured to use `Bearer {{authToken}}`.

## Request Organization

- **Health**: Contains the health check endpoint to verify server status.
- **Auth**: Contains registration and login endpoints. These include scripts to automatically store the JWT token.
- **Posts**: Contains CRUD operations for posts. All requests here require authentication.

## Variables

- `{{baseURL}}`: The base URL of the API (default: `http://localhost:5000`).
- `{{authToken}}`: The JWT token used for authenticated requests (automatically updated on successful login/registration).

## Automated Tests

Each request includes automated test scripts in the **Tests** tab. After sending a request, you can view the results in the **Test Results** section of the response panel to verify status codes and response structures.
