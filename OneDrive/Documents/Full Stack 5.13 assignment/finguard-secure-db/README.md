# FinGuard Secure Connection

This project demonstrates how to securely connect to a MongoDB Atlas production cluster using environment variables and network isolation (IP whitelisting).

## Prerequisites

1.  **MongoDB Atlas Project**: Ensure you have created a project and an M0 cluster on MongoDB Atlas.
2.  **IP Whitelisting**: Go to "Network Access" in Atlas and add ONLY your current IP address. (Never use 0.0.0.0/0).
3.  **Database User**: Create a user `finguard_app` with a strong password.

## Setup

1.  Create a file named `.env` in the root of this project.
2.  Copy your connection string from MongoDB Atlas ("Connect" -> "Connect your application" -> "Node.js").
3.  Add it to your `.env` like this (replace placeholders with your real credentials):

    ```env
    DB_URI=mongodb+srv://finguard_app:<password>@cluster0.abcde.mongodb.net/?retryWrites=true&w=majority
    ```

## Execution

Run the script to verify the connection:

```bash
node secure-connect.js
```

Upon success, you should see:
`Secure Connection Established to FinGuard Cluster`
