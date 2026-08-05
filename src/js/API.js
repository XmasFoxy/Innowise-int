async function getBooks() {
  const books = [];

  try {
    const response = await fetch('https://openlibrary.org/search.json?q=love&limit=10');
    const booksFromAPI = await response.json();
    for(let value of booksFromAPI.docs) {
      let obj = {};
      obj.author = value.author_name ? value.author_name[0] : 'Автор неизвестен';
      obj.data = value.first_publish_year || 'Год неизвестен';
      obj.title = value.title;
      if (value.cover_i) {
        obj.coverURL = `https://covers.openlibrary.org/b/id/${value.cover_i}-M.jpg`;
      }
      else obj.coverURL = 'No cover';
      books.push(obj);
    }
    console.log(JSON.stringify(books, null, 2));
    return books;
  }
  catch (error){
    console.error('Unsuccessful loading books', error);
    return [];
  }
}

export default getBooks;