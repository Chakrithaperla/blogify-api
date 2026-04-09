# FridgePolice 🧊

A simple roommate food tracking app that helps manage shared food items and prevents conflicts.

---

## 🚀 Features

* Add food items
* Request portions
* Approve or reject requests
* Prevent double allocation of food
* Expire unused approvals
* Handle duplicate food items
* Manual inventory correction

---

## 🛠 Tech Stack

* React (Vite)
* JavaScript
* Local State Management

---

## ⚙️ Setup Instructions

```bash
npm install
npm run dev
```

---

## 🧪 How to Test

### Scenario 1

* Add item with limited quantity
* Make multiple requests
* Approve → only one should succeed

### Scenario 2

* Approve request
* Wait 10 seconds
* Click "Clean Expired"

### Scenario 3

* Add same item name twice
* Both should behave independently

### Scenario 4

* Click "Mark Finished"
* Quantity becomes 0

---

## 📌 Notes

This is a prototype focused on handling real-world edge cases in shared resource management.
