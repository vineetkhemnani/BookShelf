import { useState, useEffect } from 'react'
import BookCard from './BookCard'
import { Link } from 'react-router-dom'

const BookShelf = () => {
  const [bookshelf, setBookshelf] = useState([])

  useEffect(() => {
    const storedBookshelf = JSON.parse(localStorage.getItem('Shelf')) || []
    setBookshelf(storedBookshelf)
  }, [])

  return (
    <div className="m-10">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Bookshelf</h2>
        <Link
          to="/"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Back
        </Link>
      </div>

      <div className="mt-4 mx-10">
      {bookshelf.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {bookshelf.map((book, index) => (
              <BookCard
                key={index}
                title={book.title}
                author={
                  book.author_name ? book.author_name.join(', ') : 'Unknown'
                }
                coverId={book.cover_i}
              />
            ))}
          </div>
      ) : (
        <p>Your bookshelf is empty.</p>
        )}
      </div>
    </div>
  )
}

export default BookShelf
