import React, { useState, useEffect } from 'react'
import BookCard from './BookCard'
import BookShelf from './BookShelf'
import { Link } from 'react-router-dom'

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [results, setResults] = useState([])
  const [bookshelf, setBookshelf] = useState(
    () => JSON.parse(localStorage.getItem('Shelf')) || []
  )

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value)
  }

  const fetchResults = async (term) => {
    try {
      const response = await fetch(
        `https://openlibrary.org/search.json?q=${term}&limit=10&page=1`
      )
      const data = await response.json()
      setResults(data.docs)
    } catch (error) {
      console.error('Error fetching search results:', error)
    }
  }

  useEffect(() => {
    if (searchTerm === '') {
      setResults([])
      return
    }

    const debounceFetch = setTimeout(() => {
      fetchResults(searchTerm)
    }, 300) // debounce delay

    return () => clearTimeout(debounceFetch)
  }, [searchTerm])

  const handleSearch = () => {
    console.log('Search term:', searchTerm)
    fetchResults(searchTerm) // Immediate search on button click
  }

  const handleAddToShelf = (book) => {
    const updatedBookshelf = [...bookshelf, book]
    setBookshelf(updatedBookshelf)
    localStorage.setItem('Shelf', JSON.stringify(updatedBookshelf))
  }

  return (
    <>
      <div className="flex items-center justify-center p-4">
        <input
          type="text"
          name="search"
          value={searchTerm}
          onChange={handleInputChange}
          className="bg-gray-100 p-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
          placeholder="Search..."
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white p-2 rounded-r-md border border-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 mr-20"
        >
          Search
        </button>
        <Link to='shelf' className="bg-green-600 hover:bg-green-500 p-4 text-sm rounded-lg text-white">
          Visit BookShelf
        </Link>
      </div>
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
                notShelf
                coverId={result.cover_i}
                onAddToShelf={() => handleAddToShelf(result)}
              />
            ))}
          </div>
        ) : (
          searchTerm && <p>No results found</p>
        )}
      </div>
    </>
  )
}

export default SearchBar