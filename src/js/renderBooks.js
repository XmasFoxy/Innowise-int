import { getDataFromStorage, setFavoriteBook,  isBookFavorite, addFavorite, removeFavorite } from "./localStorage.js";
import { renderFavorites } from "./renderFavorites.js";

function renderBooks(booksArr) {
  const gridShelf = document.querySelector('.main__shelf_block');
  booksArr.forEach((item) => {
    //create elements
    const book = document.createElement('div');
    const coverContainer = document.createElement('div');
    const cover = document.createElement('img');
    const titleContainer = document.createElement('div');
    const title = document.createElement('h3');
    const yearContainer = document.createElement('div');
    const year = document.createElement('p');
    const authorContainer = document.createElement('div');
    const author = document.createElement('p');
    const heartContainer = document.createElement('div');
    const svgNS = "http://www.w3.org/2000/svg";
    const heart = document.createElementNS(svgNS, "svg");
    const path = document.createElementNS(svgNS, "path");

    //add attributes
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
    heartContainer.className = 'main-heart-container';
    heart.setAttribute("viewBox", "0 0 24 24");
    heart.setAttribute("width", "25");
    heart.setAttribute("height", "25");
    heart.classList.add('main-heart');
    path.setAttribute("d", "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z");
    path.setAttribute("fill", "none");
    path.setAttribute("stroke", "#333");
    path.setAttribute("stroke-width", "2");

    //render favorite/not favorite books
    const bookId = `${item.title}_${item.author}`;
    const bookData = {
      id: bookId,
      title: item.title,
      author: item.author,
      coverURL: item.coverURL,
      data: item.data
    }

    if (isBookFavorite(bookId)) {
      heart.classList.add('filled'); //fill heart with CSS
    }

    heartContainer.addEventListener('click', () => {
      let favorites = getDataFromStorage();
      const bookIndex = favorites.findIndex(fav => fav.id === bookId);

      //correct localStorage
      if (bookIndex === -1) {
        favorites.push(bookData);
      }
      else {
        favorites = favorites.filter(fav => fav.id !== bookId);
      }
      setFavoriteBook(favorites);

      heart.classList.toggle('filled'); //change class of the book

      renderFavorites(); // update list of the favorite books
    });


    //append elements
    coverContainer.append(cover);
    titleContainer.append(title);
    authorContainer.append(author);
    yearContainer.append(year);
    heart.appendChild(path);
    heartContainer.append(heart);
    book.append(coverContainer, heartContainer, titleContainer, authorContainer, yearContainer);
    gridShelf.append(book);
    
  });
}

export default renderBooks;