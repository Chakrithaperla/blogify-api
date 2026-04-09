import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [qty, setQty] = useState("");

  const addItem = () => {
    if (!name || !qty) return;

    const newItem = {
      id: Date.now(),
      name,
      totalQuantity: Number(qty),
      availableQuantity: Number(qty),
      requests: [],
    };

    setItems([...items, newItem]);
    setName("");
    setQty("");
  };

  // STEP 2
const requestPortion = (itemId, amount) => {
  setItems(items.map(item => {
    if (item.id === itemId) {
      const newRequest = {
        id: Date.now(),
        qty: amount,
        status: "pending",
      };
      return {
        ...item,
        requests: [...item.requests, newRequest],
      };
    }
    return item;
  }));
};

// STEP 3
const approveRequest = (itemId, requestId) => {
  setItems(items.map(item => {
    if (item.id === itemId) {
      const req = item.requests.find(r => r.id === requestId);

      if (item.availableQuantity >= req.qty) {
        return {
          ...item,
          availableQuantity: item.availableQuantity - req.qty,
          requests: item.requests.map(r =>
            r.id === requestId
              ? { ...r, status: "approved", approvedAt: Date.now() }
              : r
          ),
        };
      } else {
        return {
          ...item,
          requests: item.requests.map(r =>
            r.id === requestId
              ? { ...r, status: "rejected" }
              : r
          ),
        };
      }
    }
    return item;
  }));
};

// STEP 5
const cleanExpired = () => {
  const EXPIRY = 10000;

  setItems(items.map(item => {
    let restoredQty = 0;

    const updatedRequests = item.requests.map(r => {
      if (
        r.status === "approved" &&
        Date.now() - r.approvedAt > EXPIRY
      ) {
        restoredQty += r.qty; // restore only once
        return { ...r, status: "expired" };
      }
      return r;
    });

    return {
      ...item,
      availableQuantity: item.availableQuantity + restoredQty,
      requests: updatedRequests,
    };
  }));
};

// STEP 7
const markFinished = (itemId) => {
  setItems(items.map(item =>
    item.id === itemId
      ? { ...item, availableQuantity: 0 }
      : item
  ));
};
  return (
    <div style={{ padding: "20px" }}>
      <h1>FridgePolice</h1>

      <input
        placeholder="Item name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Quantity"
        type="number"
        value={qty}
        onChange={(e) => setQty(e.target.value)}
      />
      <button onClick={addItem}>Add Item</button>
      <button onClick={cleanExpired}>Clean Expired</button>
      <h2>Items</h2>
      {items.map((item) => (
        <div key={item.id} style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
  <p><b>{item.name}</b></p>
  <p>Available: {item.availableQuantity}</p>

  {/* STEP 2 BUTTON */}
  <button onClick={() => requestPortion(item.id, 10)}>
    Request 10
  </button>

  {/* STEP 7 BUTTON */}
  <button onClick={() => markFinished(item.id)}>
    Mark Finished
  </button>

  {/* STEP 4: SHOW REQUESTS */}
  {item.requests.map(req => (
    <div key={req.id}>
      <span>Request: {req.qty} - {req.status}</span>

      {req.status === "pending" && (
        <button onClick={() => approveRequest(item.id, req.id)}>
          Approve
        </button>
      )}
    </div>
  ))}
        </div>
      ))}
    </div>
  );
}

export default App;