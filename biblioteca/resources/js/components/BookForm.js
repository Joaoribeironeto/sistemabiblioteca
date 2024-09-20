import React, { useState, useEffect } from 'react';

function BookForm({ onAddBook, onUpdateBook, editingBook }) {
  const [book, setBook] = useState({
    title: '',
    author: '',
    isbn: '',
    pages: '',
    edition: '',
    publisher: ''
  });

  useEffect(() => {
    if (editingBook) {
      setBook(editingBook);
    } else {
      resetForm();
    }
  }, [editingBook]);

  const resetForm = () => {
    setBook({
      title: '',
      author: '',
      isbn: '',
      pages: '',
      edition: '',
      publisher: ''
    });
  };

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingBook) {
      onUpdateBook(book);
    } else {
      onAddBook(book);
    }
    resetForm();
  };

  return (
    <form className="book-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Título"
        value={book.title}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="author"
        placeholder="Autor"
        value={book.author}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="isbn"
        placeholder="ISBN"
        value={book.isbn}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="pages"
        placeholder="Quantidade de páginas"
        value={book.pages}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="edition"
        placeholder="Edição"
        value={book.edition}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="publisher"
        placeholder="Editora"
        value={book.publisher}
        onChange={handleChange}
        required
      />
      <button type="submit">{editingBook ? 'Atualizar Livro' : 'Adicionar Livro'}</button>
    </form>
  );
}

export default BookForm;