import express from 'express';
import  CreateHomepageTemplate  from './views/Home.js';
import  CreateBookListTemplate  from './views/BooksList.js';
import  CreateBookTemplate  from './views/Book.js';
import  CreateEditBookTemplate  from './views/EditBook.js';
import  BOOKS_DATA  from './data/data.js';
// create app
const app = express();
app.use(express.urlencoded({extended: false}));

// static assets
app.use(express.static('public'));

// routes
app.get('/', (req, res) => {
  res.send(CreateHomepageTemplate());
});
app.get('/books', (req, res) => {
  res.send(CreateBookListTemplate(BOOKS_DATA));
});
app.post('/books', (req, res) => {
  const {title, author} = req.body;
  const id = Math.random().toString();
  BOOKS_DATA.push({id, title, author});
  res.redirect(`/books/${id}`);
});
app.get('/books/:id', (req, res) => {
  const {id} = req.params;
  const book = BOOKS_DATA.find((book) => book.id === id);
  res.send(CreateBookTemplate(book));
})
app.get('/books/edit/:id', (req, res) => {
  const {id} = req.params;
  const book = BOOKS_DATA.find((book) => book.id === id);
  res.send(CreateEditBookTemplate(book));
})
app.put('/books/:id', (req, res) => {
  const {id} = req.params;
  const {title, author} = req.body;
  const book = BOOKS_DATA.find((book) => book.id === id);
  book.title = title;
  book.author = author;
  res.send(CreateBookTemplate(book));
})
app.delete('/books/:id', (req, res) => {
  const {id} = req.params;
  const bookId = BOOKS_DATA.findIndex((book) => book.id === id);
  if (bookId === -1) {
    res.status(404).send();
    return;
  }else{
    BOOKS_DATA.splice(bookId, 1);
    res.send();
  }
})
app.post('/books/search', (req, res) => {
  const {search} = req.body;
  const filteredBooks = BOOKS_DATA.filter((book) => book.title.toLowerCase().includes(search.toLowerCase()));
  res.send(CreateBookListTemplate(filteredBooks));
})
// listen to port
app.listen(3000, () => {
  console.log('App listening on port 3000');
});