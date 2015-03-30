// http://jsonlint.com/ validates a JSON

{
  "title": "A tale of two cities",
  "author": "Charles Dickens",
  "price": 29
}

var bookAsString = '{"title": "A tale of two cities", "author": "Charles Dickens", "price": 29}';
var book = JSON.parse(bookAsString);
