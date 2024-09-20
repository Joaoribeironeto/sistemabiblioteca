import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookList from './BookList';
import BookForm from './BookForm';

function App() {
  const [books, setBooks] = useState([]);
  const [editingBook, setEditingBook] = useState(null);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get('/books');
      setBooks(response.data);
    } catch (error) {
      console.error('Erro ao buscar livros', error);
    }
  };

  const addBook = async (book) => {
    try {
      const response = await axios.post('/books', book);
      setBooks([...books, response.data]);
    } catch (error) {
      console.error('Erro ao adicionar livro', error);
    }
  };

  const updateBook = async (updatedBook) => {
    try {
      await axios.put(`/books/${updatedBook.id}`, updatedBook);
      setBooks(books.map((book) => (book.id === updatedBook.id ? updatedBook : book)));
      setEditingBook(null);
    } catch (error) {
      console.error('Erro ao atualizar livro', error);
    }
  };

  const deleteBook = async (id) => {
    try {
      await axios.delete(`/books/${id}`);
      setBooks(books.filter((book) => book.id !== id));
    } catch (error) {
      console.error('Erro ao excluir livro', error);
    }
  };

  const editBook = (book) => {
    setEditingBook(book);
  };

  return (
    <div className="app-container">
      <h1>Gerenciamento de Livros - Biblioteca Municipal</h1>
      <BookForm onAddBook={addBook} onUpdateBook={updateBook} editingBook={editingBook} />
      <BookList books={books} onEditBook={editBook} onDeleteBook={deleteBook} />
    </div>
  );
}

export default App;
