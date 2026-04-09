# FridgePolice Prototype

## Overview

FridgePolice is a simple roommate food tracking application. It allows users to add food items, request portions, approve usage, and maintain accurate fridge inventory.

The application is built using React and uses local state for managing data.

---

## Scenario 1: Prevent Double Allocation

To prevent multiple users from consuming the same last portion, the system re-checks available quantity during approval.

If the requested quantity exceeds available quantity:

* The request is rejected
* Only one request can successfully consume the final portion

This ensures correct allocation even when multiple users request simultaneously.

---

## Scenario 2: Handling Expired Approvals

Approved requests may not always be consumed. To handle this:

* Each approved request stores a timestamp (`approvedAt`)
* A cleanup function checks if the request has expired
* Expired requests are marked as "expired"
* The unused quantity is restored back to inventory

This prevents stale approvals from blocking inventory.

---

## Scenario 3: Duplicate Items

Multiple identical items (e.g., two ketchup bottles) are handled using unique IDs.

Even if item names are the same:

* Each item is tracked separately
* Operations are performed using `id`, not name

This avoids conflicts between identical items.

---

## Scenario 4: Inventory Correction

The system allows manual correction of inventory using a "Mark Finished" action.

This helps when:

* Food is consumed without being recorded
* The app state does not match real-world fridge state

Users can reset quantity to maintain accuracy.

---

## Engineering Decisions

* Used React local state instead of database for simplicity
* No authentication implemented (not required for prototype)
* Focused on correctness of logic rather than UI design
* Used timestamps to manage expiry instead of background jobs

---

## Assumptions

* Quantities are numeric and represent portions
* Requests are approved manually
* Expiry time is set to 10 seconds for demonstration
