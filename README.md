# Book Library application

A simple web-application for searching and saving books

-----------------------------------------------------------------

##Task

This project was created as a test project for **Innowise Frontend Intershi**

**Requirements:**
- Implement a book search using the [Open Library API](https://openlibrary.org/swagger/docs#/)
- Display book cards (cover, author, title, publication year)
- Add books to a "Favorites" and save data to `localStorage`
- Display and remove books from "Favorites"
- No libraries and frameworks
- Build with Vite

[Full assigment description](https://drive.google.com/file/d/1RBRcuH-_oAvtjem5Xs0c4NXZ8I38aYyH/view)

-----------------------------------------------------------------

##How to run the project:##

###Download:###
- [Node.js](https://nodejs.org/en/download)
- [git (git Bush)](https://git-scm.com/install/)

###Installation:###

1. Clone the repository:
  Open git Bash and use those commands:
  - git clone https://github.com/XmasFoxy/Innowise-int.git
  - cd Innowise-int

2. Install dependencies and build the project:
  Open git Bash and use the commands:
  - npm install
  - npm run dev
  - run build
  - run preview

----------------------------------------------------------------

##Project Structure:##

project
|
|-- src/                        # Source code
|   |-- js/                     # JavaScript modules
|   |   |-- main.js             # Entry point
|   |   |-- API.js              # Functions for getting data from Open Library API
|   |   |-- renderBooks.js      # Renders book cards
|   |   |-- renderFavorites.js  # Renders the favorites list and updates
|   |   |-- localStorage.js     # LocalStorage operations
|   |   
|   |
|   |-- css/                    # Stylesheets
|       |-- style.css           # All styles
|
|-- assets/                     # Images, icons, logos
|   |-- book-logo.svg
|   |-- heart-outline.svg
|   |-- search.svg
|
|-- index.html                  # Main HTML file
|-- package.json                # Project dependencies and scripts
|-- vite.config.js              # Vite configuration (with proxy settings)
|-- README.md                   # This file