# MongoDB Script Execution Guide

This README explains how to run the MongoDB scripts provided in this project. The commands cover CRUD operations, advanced querying, aggregation pipelines, and index usage.

---

## ✅ Requirements

Before running the scripts, ensure:

- You have **MongoDB installed** on your system.
- You can access the shell using:

```bash
mongosh
````

* Your database contains a books collection. If not, insert some sample data:

```js
db.books.insertMany([
  { title: "1984", author: "George Orwell", genre: "Dystopian", price: 8.99, published_year: 1949, in_stock: true },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Classic", price: 10.99, published_year: 1925, in_stock: true },
  { title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction", price: 12.99, published_year: 1960, in_stock: false }
]);
```

---

## ▶️ How to Run the Scripts

### 1️⃣ Open MongoDB Shell

```bash
mongosh
```

### 2️⃣ Select Your Database

```js
use your_database_name;
```

---

## 📌 Running Each Task

### 🟩 Task 2: CRUD Operations

Copy and paste each command **one by one** into `mongosh`.

Example:

```js
db.books.find({ genre: "Fiction" }, { title: true, author: true, price: true });
db.books.updateOne({ title: "1984" }, { $set: { price: 9.0 } });
```

---

### 🟦 Task 3: Advanced Queries

Simply paste each query.

💡 For pagination, paste the entire loop at once:

```js
for (let page = 1; page <= 3; page++) {
  const skip = (page - 1) * 5;
  print(`\n--- Page ${page} ---\n`);
  db.books.find({}, { title: true, author: true, price: true })
    .skip(skip)
    .limit(5)
    .forEach(doc => printjson(doc));
}
```

---

### 🟨 Task 4: Aggregation Pipelines

Example:

```js
db.books.aggregate([
  { $group: { _id: "$genre", averagePrice: { $avg: "$price" } } }
]);
```

---

### 🟥 Task 5: Indexing & Performance Testing

```js
db.books.createIndex({ title: 1 });
db.books.find({ title: "The Great Gatsby" }).explain("executionStats");
```

Compare the `executionStats` *before and after* creating indexes to observe performance changes.

---

## ✅ Tips

| Task                                                | How to Execute                              |
| --------------------------------------------------- | ------------------------------------------- |
| Single-line query                                   | Paste into mongosh                          |
| Multi-line script (like `for` loops or `aggregate`) | Paste entire block                          |
| Undo/Retry                                          | Use `db.books.deleteMany({})` to clear data |

---

## 🎯 Conclusion

You can run all commands **directly inside the MongoDB shell**. There is no need for separate `.js` files unless you want to automate the process — in that case, you can wrap commands in a `.js` file and run:

```bash
mongosh queries.js
