# MongoDB Week 1 Assignment Attempt

This repository contains two main files:

| File Name       | Purpose                                          |
|----------------|--------------------------------------------------|
| `insert_books.js` | Inserts sample book records into MongoDB using Node.js |
| `queries.js`     | Contains MongoDB queries for CRUD, aggregation, and indexing to be run manually in `mongosh` |

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/PLP-MERN-Stack-Development/mongodb-data-layer-fundamentals-and-advanced-techniques-Oliver-Kaka.git
cd mongodb-data-layer-fundamentals-and-advanced-techniques-Oliver-Kaka
```

---

## 📦 Setup & Insert Sample Data

The `insert_books.js` file is designed to be executed using **Node.js**.

### ✅ Steps:

1. Initialize Node.js in the project:

```bash
npm init -y
```

2. Install MongoDB Driver:

```bash
npm install mongodb
```

3. Insert sample data into MongoDB:

```bash
node insert_books.js
```

> ✅ This will connect to your MongoDB instance and automatically populate the `books` collection with predefined documents.

---

## 🧪 Running Queries in `mongosh`

The `queries.js` file contains all query examples (CRUD, sorting, pagination, aggregation, indexing).

### ✅ How to Execute:

1. Open the MongoDB shell:

```bash
mongosh
```

2. Switch to your database:

```js
use your_database_name;
```

3. Open `queries.js` and **copy/paste commands one by one** into `mongosh`.

---

## 📌 Notes

* **Do NOT run `queries.js` with Node.js** — it is meant **only for manual execution inside `mongosh`**.
* If you want to rerun from scratch, you can clear the collection:

```js
db.books.deleteMany({});
```

Then re-run:

```bash
node insert_books.js
```

---

## ✅ Summary of Execution Flow

| Step | Action               | Command                              |
| ---- | -------------------- | ------------------------------------ |
| 1    | Install dependencies | `npm init -y && npm install mongodb` |
| 2    | Insert sample data   | `node insert_books.js`                |
| 3    | Open Mongo shell     | `mongosh`                            |
| 4    | Run queries manually | Copy from `queries.js`               |


