import getBooks from "./API";
import renderBooks from "./renderBooks";
import { renderFavorites } from "./renderFavorites";

async function bookManager() {
  try {
    const books = await getBooks();
    renderBooks(books);
    renderFavorites();
  }
  catch(error) {
    console.error('Books not rendered', error);
  }
}

bookManager();