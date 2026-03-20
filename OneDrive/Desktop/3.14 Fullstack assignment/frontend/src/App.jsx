import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { createItem, fetchSecure } from './api';

export default function App() {
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);

  const handleCreate = async () => {
    setLoading(true);
    try {
      const result = await createItem({ name });
      toast.success(`Created item: ${result.data.name}`);
    } catch (error) {
      // Error is handled in api.js with a consistent shape.
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSecure = async () => {
    setLoading(true);
    try {
      const result = await fetchSecure();
      toast.success(`Secret: ${result.data.secret}`);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', padding: 20, maxWidth: 480, margin: '0 auto' }}>
      <h1>Fullstack Error Handling Demo</h1>
      <p>This demo shows how backend errors become frontend toast notifications.</p>

      <div style={{ marginBottom: 20 }}>
        <label style={{ display: 'block', marginBottom: 6 }}>
          Item name (required):
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Enter a name and click Create"
            style={{ width: '100%', padding: 8, marginTop: 4 }}
          />
        </label>
        <button onClick={handleCreate} disabled={loading} style={{ padding: '8px 14px' }}>
          {loading ? 'Saving…' : 'Create Item (400 on missing name)'}
        </button>
      </div>

      <div>
        <button onClick={handleSecure} disabled={loading} style={{ padding: '8px 14px' }}>
          {loading ? 'Checking…' : 'Call protected endpoint (401)'}
        </button>
      </div>

      <ToastContainer position="top-right" theme="colored" />
    </div>
  );
}
