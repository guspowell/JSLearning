var book = {title: 'harry potter', author: 'j k rowling'}

for (var p in book) {
  console.log(p)
  console.log(p + ":" + book[p])
}
