import axios from 'axios';

const client = axios.create({
  baseURL: '/api',
  timeout: 8000,
});

// A helper to normalize error messages from backend responses.
function normalizeError(err) {
  if (err.response?.data?.message) {
    return { message: err.response.data.message, status: err.response.status };
  }

  if (err.message) {
    return { message: err.message, status: err.response?.status ?? 500 };
  }

  return { message: 'An unknown error occurred', status: 500 };
}

export async function createItem(payload) {
  try {
    const response = await client.post('/items', payload);
    return response.data;
  } catch (err) {
    throw normalizeError(err);
  }
}

export async function fetchSecure() {
  try {
    const response = await client.get('/secure');
    return response.data;
  } catch (err) {
    throw normalizeError(err);
  }
}
