import React from 'react'

const BookCard = ({ title, author, coverId, notShelf, onAddToShelf }) => {
  const coverUrl = coverId
    ? `https://covers.openlibrary.org/b/id/${coverId}-L.jpg`
    : 'https://via.placeholder.com/150'

  return (
    <div className="max-w-xs w-full rounded overflow-hidden shadow-lg bg-slate-200 px-10 py-4 max-sm:px-5">
      <img className="xs:w-60 h-64" src={coverUrl} alt={title} />
      <div className="py-4">
        <div className="font-bold text-lg mb-1">{title}</div>
        <p className="text-gray-700 text-base mb-1">{author}</p>
        {notShelf && (
          <button
            className="bg-green-600 hover:bg-green-500 p-2 text-xs rounded-lg"
            onClick={onAddToShelf}
          >
            Add to Bookshelf
          </button>
        )}
      </div>
    </div>
  )
}

export default BookCard
