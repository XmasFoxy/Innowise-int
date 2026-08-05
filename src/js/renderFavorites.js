import { getDataFromStorage } from "./localStorage";

function renderFavorites() {
  const favorites = getDataFromStorage();
  const containerShelf = document.querySelector('.main__favorites_shelf_container');
  containerShelf.innerHTML = '';

  //create info text of count books
  const infoText = document.querySelector('.main__favorites_head_paragraph_container p');
  switch (favorites.length) {
    case 0: 
      infoText.textContent = 'No books yet';
      break;
    case 1: 
      infoText.textContent = '1 book saved';
      break;
    default: 
      infoText.textContent = `${favorites.length} books saved`;
  }

  //render favorites books
  favorites.forEach(item => {
    const block = document.createElement('div'); //block for every card
    const contentContainer = document.createElement('div'); //block for images and text
    const textContainer = document.createElement('div');
    const coverContainer = document.createElement('div');
    const cover = document.createElement('img');
    const titleContainer = document.createElement('div');
    const title = document.createElement('h4');
    const authorContainer = document.createElement('div');
    const author = document.createElement('p');
    const yearContainer = document.createElement('div');
    const year = document.createElement('p');
    const heartContainer = document.createElement('div');
    const svgNS = "http://www.w3.org/2000/svg";
    const heart = document.createElementNS(svgNS, "svg");
    const path = document.createElementNS(svgNS, "path");
    heart.classList.add('main-heart')
    heart.setAttribute("viewBox", "0 0 24 24");
    heart.setAttribute("width", "25");
    heart.setAttribute("height", "25");
    path.setAttribute("d", "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z");
    path.setAttribute("fill", "none");
    path.setAttribute("stroke", "#333");
    path.setAttribute("stroke-width", "2");

    contentContainer.classList.add('main__favorites_shelf_content_container');
    textContainer.classList.add('main__favorites_shelf_text_container');
    coverContainer.classList.add('main__favorites_shelf_cover_container');
    titleContainer.classList.add('main__favorites_shelf_title_container');
    authorContainer.classList.add('main__favorites_shelf_author_container');
    yearContainer.classList.add('main__favorites_shelf_year_container');
    heartContainer.classList.add('main__favorites_shelf_heart_container');
    heart.classList.add('filled');
    block.classList.add('main__favorites_shelf_block');

    cover.src = item.coverURL;
    cover.alt = `a cover of the book by ${item.author}`;
    title.textContent = item.title;
    author.textContent = item.author;
    year.textContent = item.data;

    coverContainer.append(cover);
    titleContainer.append(title);
    authorContainer.append(author);
    yearContainer.append(year);
    heart.appendChild(path);
    heartContainer.append(heart);
    textContainer.append(titleContainer, authorContainer, yearContainer);
    contentContainer.append(coverContainer, textContainer);
    block.append(contentContainer, heartContainer);
    containerShelf.append(block);

  })

}

export { renderFavorites };