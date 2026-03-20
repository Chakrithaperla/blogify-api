# Fullstack Error Handling Demo

This workspace demonstrates centralized error handling in an Express backend and user-friendly error feedback in a React frontend using toast notifications.

## ✅ What’s Included

### Backend (Express)

- Global error-handling middleware (`(err, req, res, next)`)
- Consistent error response format:
  ```json
  { "success": false, "message": "Error description" }
  ```
- Routes that deliberately fail to demonstrate error handling
  - `POST /api/items` returns 400 when `name` is missing
  - `GET /api/secure` returns 401 (unauthorized)

### Frontend (React + Vite)

- Uses `react-toastify` for toast notifications
- API calls wrapped in `try...catch`
- Error messages extracted from backend responses
- Toast notifications displayed on failure

## 🚀 Running Locally

### 1) Start the backend

```bash
cd backend
npm install
npm run dev
```

The backend runs on `http://localhost:4000`.

### 2) Start the frontend

```bash
cd frontend
npm install
npm run dev
```

The frontend runs on `http://localhost:5173` and proxies `/api` to the backend.

## 🧪 Demo (What to try)

1. Open the app in the browser.
2. Click **Create Item** without entering a name to trigger a 400 error.
3. Click **Call protected endpoint** to trigger a 401 error.
4. Observe toast notifications showing user-friendly messages from the backend.

---

## 🎥 Video Walkthrough Notes

When recording your video (~2 minutes), cover:

1. Triggering a backend error (e.g., send missing required field).
2. How the error reaches the error middleware and how the response is structured.
3. The frontend `try...catch` catching the error and showing a toast.
4. Explain how this provides consistent UX compared to silent failures.
