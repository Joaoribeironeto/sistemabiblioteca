import React from 'react';

function BookItem({ book, onEditBook, onDeleteBook }) {
  return (
    <div className="book-item">
      <h2>{book.title}</h2>
      <p><strong>Autor:</strong> {book.author}</p>
      <p><strong>ISBN:</strong> {book.isbn}</p>
      <p><strong>Páginas:</strong> {book.pages}</p>
      <p><strong>Edição:</strong> {book.edition}</p>
      <p><strong>Editora:</strong> {book.publisher}</p>
      <button className="edit-btn" onClick={() => onEditBook(book)}>Editar</button>
      <button onClick={() => onDeleteBook(book.id)}>Excluir</button>
    </div>
  );
}

export default BookItem;