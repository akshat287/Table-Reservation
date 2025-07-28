# 🪑 Table Reservation Lock API

This project provides a simple in-memory locking mechanism for table reservations, built with Node.js and Express.js.

## 🚀 Overview

This API prevents double-booking of tables by allowing users to temporarily lock tables during booking operations.

---

## 📦 Tech Stack

- Node.js
- Express.js
- In-Memory JS Object for Data Store (no external DB)
- Postman for API testing

---

## 🔗 API Endpoints

### 1. `POST /api/tables/lock`

**Purpose:** Lock a table for a user.

**Request Body:**
```json
{
  "tableId": "t1",
  "userId": "u1",
  "duration": 30
}
```

**Responses:**
- ✅ 200 OK if locked successfully:
```json
{
  "success": true,
  "message": "table booked successfully!!"
}
```
- ❌ 409 Conflict if already locked:
```json
{
  "success": false,
  "message": "table is locked"
}
```

---

### 2. `POST /api/tables/unlock`

**Purpose:** Unlock a table if user matches the lock.

**Request Body:**
```json
{
  "tableId": "t1",
  "userId": "u1"
}
```

**Responses:**
- ✅ 200 OK if unlocked:
```json
{
  "success": true,
  "message": "table Unlocked"
}
```
- ❌ 401 Unauthorized if wrong user:
```json
{
  "success": false,
  "message": "Unauthorized access"
}
```

---

### 3. `GET /api/tables/:tableId/status`

**Purpose:** Check lock status of a table.

**Example:** `GET /api/tables/t1/status`

**Responses:**
- If locked:
```json
{ "isLocked": true }
```
- If not locked:
```json
{ "isLocked": false }
```

---

## 🧪 Testing Flow (with Postman)

1. Lock table `t1` with user `u1`.
2. Try locking `t1` again with another user → fails.
3. Check `t1` status → should be locked.
4. Unlock `t1` with wrong user → fails.
5. Unlock `t1` with correct user → succeeds.
6. Check `t1` status again → unlocked.

---

## 📁 Postman Collection

Import the included JSON file `Table_Reservation_Lock_API.postman_collection.json` into Postman.

---
