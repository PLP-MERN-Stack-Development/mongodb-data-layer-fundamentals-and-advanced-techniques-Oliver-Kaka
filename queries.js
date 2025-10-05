//Task 2: Basic CRUD Operations
// Find all books in a specific genre
db.books.find({genre: "Fiction"}, {title: true, author: true, price: true});

//  Find books published after a certain year
db.books.find({published_year: {$gt: 2000}}, {title: true, author: true, price: true});

// Find books by a specific author
db.books.find({author: "George Orwell"}, {title: true, author: true, price: true});

//Update the price of a specific book
db.books.updateOne({title: "1984"}, {$set: {price: 9.00}});

// Delete a book by its title
db.books.deleteOne({title: "1984"});

//Task 3: Advanced Queries
// Write a query to find books that are both in stock and published after 2010
db.books.find({in_stock: true, published_year: {$gt: 2010}}, {title: true, author: true, price: true});

// Use projection to return only the title, author, and price fields in your queries
// (Already apllied to the queries above)

// Implement sorting to display books by price (both ascending and descending)
// Ascending
db.books.find({}, {title: true, author: true, price: true}).sort({price: 1});
// Descending
db.books.find({}, {title: true, author: true, price: true}).sort({price: -1});

// Use the limit and skip methods to implement pagination (5 books per page)
for (let page = 1; page <= 3; page++){
    const skip = (page - 1) * 5;
    print(`\n--- Page ${page} ---\n`);
    db.books.find({},{title: true,  author: true, price: true}).skip(skip).limit(5).forEach(doc => printjson(doc));
}

//Task 4: Aggregation Pipeline
//Create an aggregation pipeline to calculate the average price of books by genre.
db.books.aggregate([
    {$group: {_id: "$genre", averagePrice: {$avg: "$price"}}}
]);

//Create an aggregation pipeline to find the author with the most books in the collection
db.books.aggregate([
    {$group: {_id: "$author", bookCount: {$count: {}}}},
    {$sort: {bookCount: -1}},{$limit: 1}
])

//Implement a pipeline that groups books by publication decade and counts them
db.books.aggregate([
  {
    $group: {
      _id: {
        $concat: [
          {
            $toString: {
              $multiply: [
                { $floor: { $divide: ["$published_year", 10] } },
                10
              ]
            }
          },
          "s"
        ]
      },
      count: { $sum: 1 }
    }
  },
  { $sort: { _id: 1 } }
]);

//Task 5: Indexing
//Create an index on the title field for faster searches
db.books.createIndex({title: 1});

//Create a compound index on author and published_year
db.books.createIndex({author: 1, published_year: -1});

//Use the explain() method to demonstrate the performance improvement with your indexes
db.books.find({title: "The Great Gatsby"}).explain("executionStats");
db.books.find({author: "George Orwell", published_year: {$gt: 1940}}).explain("executionStats");