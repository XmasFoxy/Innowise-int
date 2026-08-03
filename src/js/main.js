import getBooks from "./API";
import renderBooks from "./renderBooks";

async function bookManager() {
  try {
    const books = await getBooks();
    renderBooks(books);
  }
  catch(error) {
    console.error('Books not rendered', error);
  }
}

bookManager();