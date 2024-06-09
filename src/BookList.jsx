import React from 'react'
import BookCard from './BookCard'
import ShimmerCard from './ShimmerCard'

const BookList = ({ results, searchTerm, handleAddToShelf }) => {
  if (!searchTerm) {
    return <h2 className="text-center mt-4">Enter a search term</h2>
  }

  return (
    <div className="mt-4 mx-20">
      {results.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {results.map((result, index) => (
            <BookCard
              key={index}
              title={result.title}
              author={
                result.author_name ? result.author_name.join(', ') : 'Unknown'
              }
              coverId={result.cover_i}
              notShelf
              onAddToShelf={() => handleAddToShelf(result)}
            />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array(10)
            .fill()
            .map((_, index) => (
              <ShimmerCard key={index} />
            ))}
        </div>
      )}
    </div>
  )
}

export default BookList
