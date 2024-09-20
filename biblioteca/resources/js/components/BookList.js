import React from 'react';
import BookItem from './BookItem';

function BookList({ books, onEditBook, onDeleteBook }) {
  return (
    <div className="book-list">
      {books.length === 0 ? (
        <p>Nenhum livro encontrado.</p>
      ) : (
        books.map((book) => (
          <BookItem
            key={book.id}
            book={book}
            onEditBook={onEditBook}
            onDeleteBook={onDeleteBook}
          />
        ))
      )}
    </div>
  );
}

export default BookList;