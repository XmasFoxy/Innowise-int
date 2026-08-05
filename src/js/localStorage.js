const localKey = 'favorites';

export function getDataFromStorage() {
  return JSON.parse(localStorage.getItem(localKey)) || [];
}

export function setFavoriteBook(favorites) {
  localStorage.setItem(localKey, JSON.stringify(favorites));
}

//check is a book favorite by ID 
export function isBookFavorite(bookId) {
  const favorites = getDataFromStorage();
  return favorites.some(book => book.id === bookId);
}

export function addFavorite(book) {
  const favorites = getDataFromStorage();
  const isExist = favorites.some(fav => fav.id === book.id);

  if(!isExist) {
    favorites.push(book);
    setFavoriteBook(favorites);
  }  
}

export function removeFavorite(bookId) {
  let favorites = getDataFromStorage();
  favorites = favorites.filter(book => book.id !== bookId); //all books except the book with bookId
  setFavoriteBook(favorites);
}





