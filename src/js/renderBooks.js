function renderBooks(booksArr) {
  const gridShelf = document.querySelector('.main__shelf_block');
  booksArr.forEach((item) => {
    const book = document.createElement('div');
    const coverContainer = document.createElement('div');
    const cover = document.createElement('img');
    const titleContainer = document.createElement('div');
    const title = document.createElement('h3');
    const yearContainer = document.createElement('div');
    const year = document.createElement('p');
    const authorContainer = document.createElement('div');
    const author = document.createElement('p');

    book.className = 'main__shelf_book';
    cover.src = item.coverURL;
    cover.alt = `A cover of the book by ${item.author}`;
    coverContainer.className = 'main__shelf_book_cover_container';
    titleContainer.className = 'main__shelf_book_title_container';
    title.className = 'main__shelf_book_title';
    title.textContent = item.title;
    yearContainer.className = 'main__shelf_book_year_container';
    year.className = 'main__shelf_book_year';
    year.textContent = item.data;
    authorContainer.className = 'main__shelf_book_author_container';
    author.className = 'main__shelf_book_author';
    author.textContent = item.author;

    coverContainer.append(cover);
    titleContainer.append(title);
    yearContainer.append(year);
    authorContainer.append(author);
    book.append(coverContainer, titleContainer, yearContainer, authorContainer);
    gridShelf.append(book);
  });
}

export default renderBooks;